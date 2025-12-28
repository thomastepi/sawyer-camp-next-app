"use client";
import { useMemo, useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  HStack,
  Button,
  SimpleGrid,
  Input,
  Tag,
  Wrap,
  WrapItem,
  // Divider,
  Flex,
  Badge,
} from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import PageHeader from "@/components/pageHeader/pageHeader";
import ProductCard from "@/components/products/productCard";
import { products, productCategories } from "@/data/products";
import cashCropHighlights from "@/data/cashCropHighlights";

const channelFilters = ["All", "Wholesale", "Retail"];

const ProductsPage = () => {
  const [channel, setChannel] = useState("All");
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesChannel =
        channel === "All" || product.salesChannels?.includes(channel);
      const matchesCategory =
        category === "All" || product.category === category;
      const lowerQuery = query.trim().toLowerCase();
      const matchesQuery =
        !lowerQuery ||
        product.name.toLowerCase().includes(lowerQuery) ||
        product.description.toLowerCase().includes(lowerQuery);
      return matchesChannel && matchesCategory && matchesQuery;
    });
  }, [channel, category, query]);

  return (
    <Box>
      <PageHeader
        title="Our Products"
        image="https://ik.imagekit.io/thormars/Sawyer-Camp/plantain-bunches.jpg?updatedAt=1766379398318"
      />

      <Container maxW="container.xl" py={12}>
        <Stack spacing={16}>
          <Stack spacing={3} textAlign="center">
            <Heading size="2xl" color="brand.900">
              Cash crops from Banga-Bakundu
            </Heading>
            <Text fontSize="lg" color="brand.800">
              Bulk oil palm, cocoa, coffee, citrus, and staple grains grown by
              our farmer network with sustainable practices and reinvestment
              into local communities. Whether you require global shipping or
              direct farm-gate collection, we tailor packaging and logistics to
              your specific volumes.
            </Text>
            <SimpleGrid minChildWidth="250px" spacing={4}>
              <Badge colorScheme="green" borderRadius="full" px={3} py={1}>
                Export-ready lots
              </Badge>
              <Badge colorScheme="green" borderRadius="full" px={3} py={1}>
                Smallholder powered
              </Badge>
              <Badge colorScheme="green" borderRadius="full" px={3} py={1}>
                Sustainable sourcing
              </Badge>
              <Badge colorScheme="green" borderRadius="full" px={3} py={1}>
                Community reinvestment
              </Badge>
            </SimpleGrid>
          </Stack>

          <Box>
            <Heading size="lg" mb={8} color="brand.900" textAlign="center">
              Cash crop highlights
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
              {cashCropHighlights.map((item) => (
                <Stack
                  key={item.title}
                  p={6}
                  bg="brand.400"
                  borderRadius="xl"
                  align="center"
                  textAlign="center"
                  spacing={3}
                >
                  <Heading size="md" color="brand.900">
                    {item.title}
                  </Heading>
                  <Text fontSize="sm" color="brand.800">
                    {item.detail}
                  </Text>
                  <Badge
                    colorScheme="green"
                    variant="subtle"
                    borderRadius="full"
                    px={2}
                    py={1}
                  >
                    {item.stat}
                  </Badge>
                </Stack>
              ))}
            </SimpleGrid>
          </Box>

          <Stack spacing={6}>
            <Flex
              align={{ base: "stretch", md: "center" }}
              direction={{ base: "column", md: "row" }}
              gap={4}
              justify="space-between"
            >
              <Stack spacing={1}>
                <Heading size="md" color="brand.900">
                  Filter products
                </Heading>
                <Text fontSize="sm" color="brand.800">
                  Find exactly what you need
                </Text>
              </Stack>

              <Input
                placeholder="Search crops..."
                variant="filled"
                bg="brand.50"
                _focus={{ bg: "white" }}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                maxW={{ base: "100%", md: "300px" }}
                focusBorderColor="brand.800"
              />
            </Flex>

            <HStack spacing={3} flexWrap="wrap">
              {channelFilters.map((item) => (
                <Button
                  key={item}
                  size="sm"
                  variant={channel === item ? "solid" : "ghost"}
                  colorScheme="green"
                  onClick={() => setChannel(item)}
                >
                  {item}
                </Button>
              ))}
            </HStack>

            <Wrap spacing={2}>
              {productCategories.map((item) => (
                <WrapItem key={item}>
                  <Tag
                    size="md"
                    borderRadius="full"
                    cursor="pointer"
                    variant={category === item ? "solid" : "outline"}
                    colorScheme="green"
                    onClick={() => setCategory(item)}
                    bg={category === item ? undefined : "transparent"}
                  >
                    {item}
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>
          </Stack>

          <Stack spacing={4}>
            <HStack
              justify="space-between"
              align={{ base: "flex-start", md: "center" }}
              flexDir={{ base: "column", md: "row" }}
            >
              <Heading size="lg" color="brand.900">
                Available crops
              </Heading>
              <Text fontSize="sm" color="brand.700">
                Showing {filteredProducts.length} of {products.length} products
              </Text>
            </HStack>

            {filteredProducts.length === 0 ? (
              <Box
                borderWidth="1px"
                borderColor="gray.200"
                borderRadius="xl"
                p={6}
                bg="gray.50"
              >
                <Heading size="sm" color="brand.900" mb={2}>
                  No matches yet
                </Heading>
                <Text fontSize="sm" color="brand.700">
                  Try a different category or clear the search to see all crops
                  we supply.
                </Text>
              </Box>
            ) : (
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </SimpleGrid>
            )}
          </Stack>

          <Box
            borderRadius="2xl"
            bg="brand.400"
            color="brand.900"
            p={{ base: 8, md: 12 }}
            px={{ base: 2 }}
            textAlign="center"
          >
            <Heading size="lg" mb={4}>
              Ready to place an order?
            </Heading>
            <Text fontSize="lg" mb={8} color="brand.800" maxW="2xl" mx="auto">
              Tell us your destination, volumes, and preferred packaging. We
              provide flexible logistics options, including coordinated shipping
              to your door or <strong>farm-gate pickup</strong> for clients who
              prefer to manage their own transportation. Every order supports
              training, better tools, and income stability for our smallholder
              farmers.
            </Text>
            <Flex
              gap={4}
              justify="center"
              direction={{ base: "column", sm: "row" }}
            >
              <Button
                as={Link}
                href="/contact-us"
                size="lg"
                colorScheme="green"
              >
                Request a quote
              </Button>
              <Button
                as={Link}
                href="/donate"
                size="lg"
                variant="outline"
                colorScheme="green"
              >
                Support the farmers
              </Button>
              <Button
                as={Link}
                href={`https://wa.me/12144314816?text=${encodeURIComponent(
                  "Hi Sawyer Camp, I'd like to place an order. Here are my products and volumes: "
                )}`}
                size="lg"
                variant="ghost"
                colorScheme="green"
                leftIcon={<FaWhatsapp />}
              >
                WhatsApp now
              </Button>
            </Flex>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default ProductsPage;
