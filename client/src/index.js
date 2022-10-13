import React from "react";
import ReactDOM from "react-dom/client";
import "semantic-ui-css/semantic.min.css";
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-calendar/dist/Calendar.css';
import "./app/layout/styles.css";
import App from "./app/layout/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore,history } from "./app/store/configureStore";
import ScrollToTop from "./app/layout/ScrollToTop";
import { ConnectedRouter } from "connected-react-router";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore();

function render() {
  root.render(
    <Provider store={store}>
      <BrowserRouter history={history}>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </Provider>
  );
}

if (module.hot) {
  module.hot.accept("./app/layout/App", function () {
    setTimeout(render);
  });
}
render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
