"use client";
import {
  Box,
  Flex,
  Image,
  HStack,
  Link as ChakraLink,
  Button,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { navGroups } from "@/data/navLinks";
import DrawerPanel from "../mobileNavigation/drawerComponent";

const logoUrl =
  "https://ik.imagekit.io/thormars/Sawyer-Camp/offWhite-logo.jpeg?tr=w-300,h-300";

const Navbar = () => {
  const [isWide] = useMediaQuery("(min-width: 1200px)");
  return (
    <Box bg="brand.400" py={2} px={4} boxShadow="sm">
      <Flex
        maxW="1200px"
        mx="auto"
        alignItems="center"
        justifyContent="space-between"
      >
        <HStack
          w="100%"
          spacing={8}
          alignItems="center"
          justifyContent="space-between"
        >
          <Link href="/" aria-label="go to home page">
            <Image src={logoUrl} alt="logo" h="50px" />
          </Link>

          <HStack spacing={2} display={`${isWide ? "flex" : "none"}`}>
            {navGroups.map((group) => (
              <Menu key={group.label} placement="bottom-start">
                <MenuButton
                  as={Button}
                  variant="ghost"
                  rightIcon={<ChevronDownIcon />}
                  fontWeight="medium"
                  color="brand.900"
                  _hover={{ bg: "brand.300", color: "brand.700" }}
                  _active={{ bg: "brand.300" }}
                >
                  {group.label}
                </MenuButton>
                <MenuList bg="white" borderColor="brand.300" py={2}>
                  {group.links.map((link) => (
                    <MenuItem
                      as={Link}
                      key={link.path}
                      href={link.path}
                      color="brand.900"
                      _hover={{
                        bg: "brand.400",
                        color: "brand.700",
                        textDecoration: "none",
                      }}
                    >
                      {link.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            ))}
          </HStack>

          <Box display={`${isWide ? "none" : "block"}`}>
            <DrawerPanel />
          </Box>

          <HStack
            spacing={4}
            alignItems="center"
            display={`${isWide ? "flex" : "none"}`}
          >
            <ChakraLink as={Link} href="/signin" fontWeight="medium">
              Sign In
            </ChakraLink>
            <Button
              as={Link}
              href="/donate"
              variant="solid"
              colorScheme="green"
            >
              Donate
            </Button>
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
