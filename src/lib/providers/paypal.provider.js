"use client";
import React, { useMemo } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const PayPalProvider = ({ children, paypalClientId }) => {
  const initialOptions = useMemo(
    () => ({
      "client-id": paypalClientId,
      currency: "USD",
      intent: "capture",
    }),
    [paypalClientId]
  );

  return (
    <PayPalScriptProvider options={initialOptions}>
      {children}
    </PayPalScriptProvider>
  );
};

export default PayPalProvider;
