import React from "react";
import { Toaster } from "react-hot-toast";
import "../styles/globals.css";
import { StateContext } from "../context/StateContext";
import { Layout, layout } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Toaster />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
