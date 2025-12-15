"use client";
import React, { useState, useEffect } from "react";
import { Heading, Box, Button, VStack, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { crossfadeImgURLs } from "@/data/homepageImages";

const MotionBox = motion(Box);

export const HeroSection = () => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    crossfadeImgURLs.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const intervalId = setInterval(() => {
      setCurrentImgIndex(
        (prevIndex) => (prevIndex + 1) % crossfadeImgURLs.length
      );
    }, 7000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Flex
      as="section"
      h="100vh"
      alignItems="center"
      justifyContent="center"
      color="white"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex={-1}
      >
        {crossfadeImgURLs.map((url, index) => (
          <MotionBox
            key={index}
            bgImage={`url(${url})`}
            bgSize="cover"
            bgPosition="center"
            position="absolute"
            top={0}
            left={0}
            bottom={0}
            right={0}
            animate={{
              opacity: currentImgIndex === index ? 1 : 0,
              scale: currentImgIndex === index ? 1.05 : 1,
            }}
            transition={{ opacity: { duration: 1.5 }, scale: { duration: 10 } }}
          />
        ))}
      </Box>

      {/* Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(0, 0, 0, 0.6)"
        zIndex={0}
      />

      <VStack spacing={6} zIndex={1} textAlign="center" px={4}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Heading
            as="h1"
            fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
            fontWeight="bold"
            lineHeight="1.2"
          >
            Empowering Farmers,
            <br />
            <Text as="span" color="brand.500">
              Nourishing Communities.
            </Text>
          </Heading>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <Text fontSize={{ base: "lg", md: "xl" }} maxW="600px">
            The Sawyer Camp Farmers CIG is dedicated to sustainable agriculture
            and economic opportunity in Banga Bakundu, Cameroon.
          </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <Button
            as={Link}
            href="/become-a-member"
            size="lg"
            variant="solid"
            mt={4}
            px={10}
            py={7}
          >
            Become a Member
          </Button>
        </motion.div>
      </VStack>
    </Flex>
  );
};

export default HeroSection;
