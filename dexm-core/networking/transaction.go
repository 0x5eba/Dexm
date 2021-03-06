package networking

import (
	"crypto/sha256"
	"fmt"
	"net/http"
	"time"

	"github.com/0x5eba/Dexm/dexm-core/wallet"

	bp "github.com/0x5eba/Dexm/protobufs/build/blockchain"
	"github.com/0x5eba/Dexm/protobufs/build/network"
	"github.com/golang/protobuf/proto"
	"github.com/gorilla/websocket"
	log "github.com/sirupsen/logrus"
)

// SendTransaction generates a transaction and broadcasts it
func SendTransaction(senderWallet *wallet.Wallet, recipient, fname string, amount, gas uint64, cdata []byte, ccreation bool, shardAddress uint32) error {
	ips, err := GetPeerList("hackney")
	if err != nil {
		log.Error("peer ", err)
		return nil
	}

	dial := websocket.Dialer{
		Proxy:            http.ProxyFromEnvironment,
		HandshakeTimeout: 5 * time.Second,
	}

	log.Info(ips)
	for _, ip := range ips {
		conn, _, err := dial.Dial(fmt.Sprintf("ws://%s/ws", ip+":3141"), nil)
		if err != nil {
			log.Error(err)
			continue
		}

		c := &client{
			conn:      conn,
			send:      make(chan []byte, 256),
			readOther: make(chan []byte, 256),
			isOpen:    true,
		}

		senderAddr, err := senderWallet.GetWallet()
		if err != nil {
			log.Error(err)
		}

		err = MakeSpecificRequest(senderWallet, 0, []byte(senderAddr), network.Request_GET_WALLET_STATUS, c, shardAddress)
		if err != nil {
			log.Error(err)
			continue
		}

		// use GetResponse insead of a infinite loop
		msg, err := c.GetResponse(100 * time.Millisecond)
		if err != nil {
			log.Error(err)
			continue
		}

		walletEnv := &network.Envelope{}
		err = proto.Unmarshal(msg, walletEnv)
		if err != nil {
			log.Error(err)
			continue
		}

		walletStatus := bp.AccountState{}
		err = proto.Unmarshal(walletEnv.Data, &walletStatus)
		if err != nil {
			log.Error(err)
		}
		log.Info("walletStatus ", walletStatus)
		senderWallet.Balance = int(walletStatus.Balance)

		trans, err := senderWallet.NewTransaction(recipient, amount, uint32(gas), cdata, shardAddress)
		if err != nil {
			log.Error(err)
			continue
		}

		pub, _ := senderWallet.GetPubKey()
		bhash := sha256.Sum256(trans)
		hash := bhash[:]

		r, s, err := senderWallet.Sign(hash)
		if err != nil {
			log.Error(err)
			continue
		}
		signature := &network.Signature{
			Pubkey: pub,
			R:      r.Bytes(),
			S:      s.Bytes(),
			Data:   hash,
		}

		trBroad := &network.Broadcast{
			Type:         network.Broadcast_TRANSACTION,
			Data:         trans,
			Address:      pub,
			ShardAddress: shardAddress,
		}
		brD, _ := proto.Marshal(trBroad)

		trEnv := &network.Envelope{
			Type:     network.Envelope_BROADCAST,
			Data:     brD,
			Identity: signature,
			Shard:    0,
			TTL:      64,
		}

		finalD, _ := proto.Marshal(trEnv)
		conn.WriteMessage(websocket.BinaryMessage, finalD)

		log.Info("Transaction done successfully")

	}

	return nil
}
