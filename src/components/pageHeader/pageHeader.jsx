"use client";
import React from "react";
import { Box, Heading, Center, Text } from "@chakra-ui/react";

const defaultImg = "https://ik.imagekit.io/thormars/Sawyer-Camp/nature.jpg";

const PageHeader = ({ image, title, subtitle }) => {
  return (
    <Box
      bgImage={image || defaultImg}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
      w="100%"
      h={{ base: "40vh", md: "50vh" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      position="relative"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bg="rgba(0,0,0,0.35)"
        zIndex="1"
      />

      <Center zIndex="2">
        <Heading as="h1" size="4xl" textAlign="center">
          {title}
        </Heading>
        {subtitle && (
          <Text mt={4} fontSize="xl" textAlign="center">
            {subtitle}
          </Text>
        )}
      </Center>
    </Box>
  );
};

export default PageHeader;
