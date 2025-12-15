"use client";
import Navbar from "../../navbar/navbar";
import { Box } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box position="sticky" top="0" zIndex="sticky">
      <header>
        <Navbar />
      </header>
    </Box>
  );
};

export default Header;
