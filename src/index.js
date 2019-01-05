import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./redux/reducers";
import ConnectedCalculator from "./connect";

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedCalculator />
  </Provider>,
  document.getElementById("root")
);
