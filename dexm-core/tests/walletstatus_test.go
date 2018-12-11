package tests

import (
	"testing"
	"time"

	"github.com/0x5eba/Dexm/dexm-core/blockchain"
)

func TestDataProcessing(t *testing.T) {
	blockchain.OpenService(1)
	time.Sleep(50 * time.Second)
}
