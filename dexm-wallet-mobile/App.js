import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { AppLoading, Font, Icon } from "expo";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import AppNavigator from "./navigation/AppNavigator";
import Colors from "./constants/Colors";
import DynamicIntlProvider from "./containers/DynamicIntlProvider";
import reducer from "./reducers/";
import initialState from "./reducers/initialState";
import sagas from "./sagas/";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(sagas);

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <Provider store={store}>
          <DynamicIntlProvider>
            <View style={styles.container}>
              <StatusBar barStyle="light-content" />
              <AppNavigator />
            </View>
          </DynamicIntlProvider>
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        ...Icon.Ionicons.font,
        Lato: require("./assets/fonts/Lato-Regular.ttf")
      })
    ]);
  };

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightColor
  }
});
