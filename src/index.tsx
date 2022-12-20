import { Box, ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ChakraProvider>
    <Provider store={store}>
      <Box
        alignItems="center"
        // background="#09b0ed"
        height="700px"
        width="70%"
        marginLeft="250px"
      >
        <Header />
        <App />
        <Footer />
      </Box>
    </Provider>
  </ChakraProvider>
);

