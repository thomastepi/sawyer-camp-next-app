"use client";
import ChakraUIProvider from "./chakra-ui.provider";
import PayPalProvider from "./paypal.provider";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const ProviderWrapper = ({ children, paypalClientId }) => {
  return (
    <ChakraUIProvider>
      <PayPalProvider paypalClientId={paypalClientId}>
        <Provider store={store}>{children}</Provider>
      </PayPalProvider>
    </ChakraUIProvider>
  );
};

export default ProviderWrapper;
