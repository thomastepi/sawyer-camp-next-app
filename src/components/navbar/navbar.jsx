"use client";
import {
  Box,
  Text,
  Flex,
  Image,
  HStack,
  Link as ChakraLink,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import navLinks from "@/data/navLinks";
import DrawerPanel from "../mobileNavigation/drawerComponent";

const logoUrl =
  "https://ik.imagekit.io/thormars/Sawyer-Camp/offWhite-logo.jpeg?tr=w-300,h-300";

const Navbar = () => {
  return (
    <Box bg="brand.400" py={2} px={4} boxShadow="sm">
      <Flex
        maxW="1200px"
        mx="auto"
        alignItems="center"
        justifyContent="space-between"
      >
        <HStack spacing={8} alignItems="center">
          <Link href="/">
            <Image src={logoUrl} alt="logo" h="50px" />
          </Link>

          <HStack spacing={6} display={{ base: "none", md: "flex" }}>
            {navLinks
              .filter((link) => !link.flag)
              .map((link) => (
                <ChakraLink
                  as={Link}
                  key={link.path}
                  href={link.path}
                  fontWeight="medium"
                  _hover={{ color: "brand.700" }}
                >
                  <Text>{link.name}</Text>
                </ChakraLink>
              ))}
          </HStack>
        </HStack>

        <Box display={{ base: "block", md: "none" }}>
          <DrawerPanel />
        </Box>

        <HStack
          spacing={4}
          alignItems="center"
          display={{ base: "none", md: "flex" }}
        >
          <ChakraLink as={Link} href="/signin" fontWeight="medium">
            Sign In
          </ChakraLink>
          <ChakraLink as={Link} href="/become-a-member" fontWeight="medium">
            Become a Member
          </ChakraLink>
          <Button as={Link} href="/donate" variant="solid" colorScheme="green">
            Donate
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
