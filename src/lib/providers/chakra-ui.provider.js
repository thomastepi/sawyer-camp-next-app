"use client";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import { useServerInsertedHTML } from "next/navigation";
import React, { useState } from "react";
import theme from "@/styles/theme";

const EmotionCacheProvider = ({ children }) => {
  const [{ cache, flush }] = useState(() => {
    const cache = createCache({ key: "css", prepend: true });
    cache.compat = true;

    const prevInsert = cache.insert;
    let inserted = [];

    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };

    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };

    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) return null;

    let styles = "";
    names.forEach((name) => {
      styles += cache.inserted[name];
    });

    return (
      <style
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
};

const ChakraUIProvider = ({ children }) => {
  return (
    <EmotionCacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </EmotionCacheProvider>
  );
};

export default ChakraUIProvider;
