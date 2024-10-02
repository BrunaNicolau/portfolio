
"use client";
import { Provider } from "react-redux";
import App from "./app";
import store from "./redux/store";

export default function Home() {
  return (
    <Provider store={store} >
      <App></App>
    </Provider>
  );
}
