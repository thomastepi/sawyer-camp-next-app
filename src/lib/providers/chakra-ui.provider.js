"use client";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import theme from "@/styles/theme";

const ChakraUIProvider = ({ children }) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
};

export default ChakraUIProvider;
