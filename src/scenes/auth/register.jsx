"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  VStack,
  Text,
  Image,
  Center,
  Divider,
} from "@chakra-ui/react";
import { emitToast, toastError } from "@/lib/ui/toastEmitter";

const RegisterPage = () => {
  const [memberId, setMemberId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const logoUrl =
    "https://ik.imagekit.io/thormars/Sawyer-Camp/white-logo.jpeg?tr=w-300,h-300";

  const handleRegister = () => {
    if (!memberId || !username || !password) {
      toastError("error", "Please enter all required fields.");
      return;
    }
  };

  return (
    <Center minH="100vh" bg="brand.600" p={4}>
      <Box bg="white" p={8} rounded="lg" shadow="lg" w="full" maxW="md">
        <VStack spacing={6}>
          <Box w="30%" m="0 auto">
            <Image src={logoUrl} alt="Sawyer Camp Farmers CIG Logo" />
          </Box>
          <Heading as="h1" size="lg" color="brand.900" textAlign="center">
            Register
          </Heading>
          <Divider borderColor="brand.700" />
          <FormControl id="memberId">
            <FormLabel color="brand.900">Member ID</FormLabel>
            <Input
              type="text"
              value={memberId}
              borderColor="brand.700"
              _hover={{ borderColor: "brand.800" }}
              _focus={{ borderColor: "brand.900", boxShadow: "outline" }}
              onChange={(e) => setMemberId(e.target.value)}
            />
          </FormControl>
          <FormControl id="username">
            <FormLabel color="brand.900">Username</FormLabel>
            <Input
              type="text"
              value={username}
              borderColor="brand.700"
              _hover={{ borderColor: "brand.800" }}
              _focus={{ borderColor: "brand.900", boxShadow: "outline" }}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel color="brand.900">Password</FormLabel>
            <Input
              type="password"
              value={password}
              borderColor="brand.700"
              _hover={{ borderColor: "brand.800" }}
              _focus={{ borderColor: "brand.900", boxShadow: "outline" }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button
            colorScheme="green"
            width="full"
            onClick={handleRegister}
            size="lg"
          >
            Register
          </Button>
          <Text color="brand.800">
            Already have an account?{" "}
            <Link
              href="/signin"
              style={{
                color: "var(--chakra-colors-brand-900)",
                textDecoration: "underline",
              }}
            >
              Sign In
            </Link>
          </Text>
          <Link
            href="/"
            style={{
              color: "var(--chakra-colors-brand-800)",
              textDecoration: "underline",
            }}
          >
            Return Home
          </Link>
        </VStack>
      </Box>
    </Center>
  );
};

export default RegisterPage;
