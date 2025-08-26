import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./store.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { mystore } from "./mystore.jsx";
//import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
  //   <PersistGate persistor={persistor}>
  //     <BrowserRouter>
  //       <App />
  //     </BrowserRouter>
  //   </PersistGate>
  // </Provider>
  <Provider store={mystore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
