"use client";
import {
  Box,
  Heading,
  Text,
  Image,
  AspectRatio,
  HStack,
  Tag,
  Stack,
  Button,
  Divider,
  Badge,
  SimpleGrid,
} from "@chakra-ui/react";
import Link from "next/link";

const WHATSAPP_URL = "https://wa.me/12144314816";

const ProductCard = ({ product }) => {
  return (
    <Box
      role="group"
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="2xl"
      overflow="hidden"
      bg="white"
      boxShadow="sm"
      transition="all 0.25s ease"
      _hover={{ shadow: "xl", transform: "translateY(-6px)" }}
      display="flex"
      flexDirection="column"
    >
      <Box position="relative">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={product.imageUrl}
            alt={product.name}
            objectFit="cover"
            _groupHover={{ transform: "scale(1.03)" }}
            transition="transform 0.3s ease"
          />
        </AspectRatio>
        <Box
          position="absolute"
          inset="0"
          bgGradient="linear(to-t, rgba(0,0,0,0.6), rgba(0,0,0,0.05))"
          opacity={0.65}
        />
        <Box position="absolute" bottom={3} left={3} right={3}>
          <HStack spacing={2} flexWrap="wrap">
            {product.category && (
              <Tag size="sm" colorScheme="green" borderRadius="full">
                {product.category}
              </Tag>
            )}
            {product.salesChannels?.map((channel) => (
              <Badge
                key={channel}
                colorScheme="green"
                variant="subtle"
                borderRadius="full"
                px={2}
              >
                {channel}
              </Badge>
            ))}
          </HStack>
        </Box>
      </Box>

      <Stack p={5} spacing={3} flex="1">
        <Heading size="md" color="brand.900">
          {product.name}
        </Heading>
        <Text fontSize="sm" color="brand.800" noOfLines={3}>
          {product.description}
        </Text>

        <Divider />
        <Text fontSize="xs" color="brand.700">
          {product.origin}
        </Text>
        <>
          <SimpleGrid minChildWidth="100px" spacing={2} alignItems="center">
            <Button
              as={Link}
              href={`/products/${product.slug}`}
              size="sm"
              colorScheme="green"
            >
              View details
            </Button>
            <Button
              as={Link}
              href={`/contact-us?product=${encodeURIComponent(product.name)}`}
              size="sm"
              colorScheme="green"
              variant="outline"
            >
              Request quote
            </Button>
            <Button
              as={Link}
              href={`${WHATSAPP_URL}?text=${encodeURIComponent(
                `Hi Sawyer Camp, I'm interested in ${product.name}. Can you share pricing, availability, and lead time?`
              )}`}
              size="sm"
              variant="outline"
              colorScheme="green"
            >
              WhatsApp
            </Button>
          </SimpleGrid>
        </>
      </Stack>
    </Box>
  );
};

export default ProductCard;
