import { Box, ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./App.css";
import AppShell from "./components/app-shell";
import Footer from "./components/footer/Footer";
import Header from "./components/header";
import { store } from "./store";
import { AppTheme } from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ChakraProvider theme={AppTheme}>
    <Provider store={store}>
      <AppShell  >
        <Header />
        <App />
        <Footer />
      </AppShell>
    </Provider>
  </ChakraProvider>
);

