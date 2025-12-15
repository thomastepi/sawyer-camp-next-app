"use client";
import HeroSection from "@/components/home/hero/hero";
import WhatWeDo from "@/components/home/whatWeDo/whatWeDo";
import ImpactSection from "@/components/home/impact/impact";
import Team from "@/components/home/team/team";
import BlogArticleBox from "@/components/blogArticles/blogArticlesBox";
import GoogleMaps from "@/components/googleMaps/googleMaps";
import Subscribe from "@/components/subscribeForm/subscribe";
import { Box, Container } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Box>
      <HeroSection />
      <Box py={16}>
        <Container maxW="container.xl">
          <WhatWeDo />
        </Container>
      </Box>
      <Box py={16} bg="brand.400">
        <Container maxW="container.xl">
          <ImpactSection />
        </Container>
      </Box>
      <Box py={16}>
        <Container maxW="container.xl">
          <Team />
        </Container>
      </Box>
      <Box py={16} bg="brand.400">
        <Container maxW="container.xl">
          <BlogArticleBox title="Latest News" />
        </Container>
      </Box>
      <Box py={16}>
        <Container maxW="container.xl">
          <Subscribe />
        </Container>
      </Box>
      <Box mt={16} bg="brand.400">
        <GoogleMaps />
      </Box>
    </Box>
  );
};

export default HomePage;
