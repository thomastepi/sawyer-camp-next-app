"use client";
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  HStack,
  Tag,
  Badge,
  Button,
  SimpleGrid,
  Divider,
  List,
  ListItem,
  ListIcon,
  Avatar,
  AspectRatio,
  Image,
  Icon,
} from "@chakra-ui/react";
import {
  CheckCircleIcon,
  ExternalLinkIcon,
  CalendarIcon,
} from "@chakra-ui/icons";
import Link from "next/link";
import PageHeader from "@/components/pageHeader/pageHeader";
// import { FaQuoteLeft } from "react-icons/fa";

const WHATSAPP_URL = "https://wa.me/12144314816";

const ProductDetail = ({ product }) => {
  return (
    <Box>
      <PageHeader
        title={product.name}
        image={product.imageUrl}
        // subtitle={product.category}
      />

      <Container maxW="container.xl" py={12}>
        <Stack spacing={10}>
          <Stack spacing={4}>
            <HStack spacing={3} flexWrap="wrap">
              <Tag size="lg" colorScheme="green" borderRadius="full">
                {product.category}
              </Tag>
              {product.salesChannels?.map((channel) => (
                <Badge
                  key={channel}
                  colorScheme="green"
                  variant="subtle"
                  borderRadius="full"
                  px={3}
                  py={1}
                >
                  {channel}
                </Badge>
              ))}
              {product.seasonality && (
                <HStack>
                  <CalendarIcon color="brand.800" />
                  <Text fontSize="sm" color="brand.700">
                    {product.seasonality}
                  </Text>
                </HStack>
              )}
              {product.lastUpdated && (
                <Badge colorScheme="gray" variant="subtle" borderRadius="full">
                  Updated {product.lastUpdated}
                </Badge>
              )}
            </HStack>

            <Heading size="2xl" color="brand.900">
              {product.name}
            </Heading>
            <Text fontSize="lg" color="brand.800" maxW="3xl">
              {product.description}
            </Text>

            <HStack spacing={3} flexWrap="wrap">
              {product.packaging && (
                <Tag size="md" variant="subtle" colorScheme="green">
                  Packaging: {product.packaging}
                </Tag>
              )}
              {product.moq && (
                <Tag size="md" variant="subtle" colorScheme="green">
                  MOQ: {product.moq}
                </Tag>
              )}
              {product.priceRange && (
                <Tag size="md" variant="outline" colorScheme="green">
                  {product.priceRange}
                </Tag>
              )}
              {product.availability && (
                <Tag size="md" variant="outline" colorScheme="green">
                  Availability: {product.availability}
                </Tag>
              )}
            </HStack>

            {product.pricingNote && (
              <Text fontSize="sm" color="brand.700">
                Pricing note: {product.pricingNote}
              </Text>
            )}
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box
              borderWidth="1px"
              borderColor="gray.200"
              borderRadius="xl"
              p={6}
              bg="white"
              boxShadow="sm"
            >
              <Heading size="md" color="brand.900" mb={3}>
                Highlights
              </Heading>
              <List spacing={2}>
                {product.highlights?.map((item) => (
                  <ListItem key={item} color="brand.800">
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    {item}
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box
              borderWidth="1px"
              borderColor="gray.200"
              borderRadius="xl"
              p={6}
              bg="white"
              boxShadow="sm"
            >
              <Heading size="md" color="brand.900" mb={3}>
                Best for
              </Heading>
              <HStack spacing={3} flexWrap="wrap">
                {product.useCases?.map((use) => (
                  <Tag key={use} size="md" variant="subtle" colorScheme="green">
                    {use}
                  </Tag>
                ))}
              </HStack>
            </Box>
          </SimpleGrid>

          {(product.harvestCalendar?.length ||
            product.processingMethods?.length ||
            product.qualitySpecs?.length) && (
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              {product.harvestCalendar?.length > 0 && (
                <Box
                  borderWidth="1px"
                  borderColor="gray.200"
                  borderRadius="xl"
                  p={6}
                  bg="white"
                >
                  <Heading size="md" color="brand.900" mb={3}>
                    Harvest calendar
                  </Heading>
                  <Stack spacing={3}>
                    {product.harvestCalendar.map((entry) => (
                      <HStack
                        key={`${entry.window}-${entry.detail}`}
                        spacing={3}
                        align="flex-start"
                        bg="green.50"
                        borderRadius="lg"
                        p={3}
                      >
                        <CalendarIcon color="green.600" mt={1} />
                        <Box>
                          <Text fontWeight="semibold" color="brand.900">
                            {entry.window}
                          </Text>
                          <Text fontSize="sm" color="brand.700">
                            {entry.detail}
                          </Text>
                        </Box>
                      </HStack>
                    ))}
                  </Stack>
                </Box>
              )}

              {product.processingMethods?.length > 0 && (
                <Box
                  borderWidth="1px"
                  borderColor="gray.200"
                  borderRadius="xl"
                  p={6}
                  bg="white"
                >
                  <Heading size="md" color="brand.900" mb={3}>
                    Processing methods
                  </Heading>
                  <List spacing={3}>
                    {product.processingMethods.map((step) => (
                      <ListItem key={step} color="brand.800">
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        {step}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}

              {/* {product.qualitySpecs?.length > 0 && (
                <Box
                  borderWidth="1px"
                  borderColor="gray.200"
                  borderRadius="xl"
                  p={6}
                  bg="white"
                >
                  <Heading size="md" color="brand.900" mb={3}>
                    Quality specs
                  </Heading>
                  <Stack spacing={3}>
                    {product.qualitySpecs.map((spec) => (
                      <HStack
                        key={`${spec.label}-${spec.value}`}
                        justify="space-between"
                        borderWidth="1px"
                        borderColor="gray.100"
                        borderRadius="lg"
                        p={3}
                      >
                        <Text fontWeight="semibold" color="brand.900">
                          {spec.label}
                        </Text>
                        <Badge colorScheme="green" variant="subtle">
                          {spec.value}
                        </Badge>
                      </HStack>
                    ))}
                  </Stack>
                </Box>
              )} */}
            </SimpleGrid>
          )}

          {product.storageTransport && (
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              {product.storageTransport.storage?.length > 0 && (
                <Box
                  borderWidth="1px"
                  borderColor="gray.200"
                  borderRadius="xl"
                  p={6}
                  bg="white"
                >
                  <Heading size="md" color="brand.900" mb={3}>
                    Storage notes
                  </Heading>
                  <List spacing={3}>
                    {product.storageTransport.storage.map((note) => (
                      <ListItem key={note} color="brand.800">
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        {note}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}

              {product.storageTransport.transport?.length > 0 && (
                <Box
                  borderWidth="1px"
                  borderColor="gray.200"
                  borderRadius="xl"
                  p={6}
                  bg="white"
                >
                  <Heading size="md" color="brand.900" mb={3}>
                    Transport notes
                  </Heading>
                  <List spacing={3}>
                    {product.storageTransport.transport.map((note) => (
                      <ListItem key={note} color="brand.800">
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        {note}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}
            </SimpleGrid>
          )}

          {product.photos &&
            (product.photos.field?.length ||
              product.photos.processing?.length) && (
              <Stack spacing={4}>
                <Heading size="lg" color="brand.900">
                  Field or processing photos
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                  {product.photos.field?.map((photo) => (
                    <AspectRatio
                      key={photo.url}
                      ratio={4 / 3}
                      borderRadius="xl"
                      overflow="hidden"
                    >
                      <Image
                        src={photo.url}
                        alt={photo.alt}
                        objectFit="cover"
                      />
                    </AspectRatio>
                  ))}
                  {product.photos.processing?.map((photo) => (
                    <AspectRatio
                      key={photo.url}
                      ratio={4 / 3}
                      borderRadius="xl"
                      overflow="hidden"
                    >
                      <Image
                        src={photo.url}
                        alt={photo.alt}
                        objectFit="cover"
                      />
                    </AspectRatio>
                  ))}
                </SimpleGrid>
              </Stack>
            )}

          {product.farmer && (
            <Box
              borderWidth="1px"
              borderColor="gray.200"
              borderRadius="2xl"
              p={{ base: 6, md: 8 }}
              bg="white"
              boxShadow="sm"
            >
              <Heading size="lg" color="brand.900" mb={4}>
                Meet the farmer
              </Heading>
              <Stack
                direction={{ base: "column", md: "row" }}
                spacing={4}
                align="flex-start"
              >
                <Avatar
                  name={product.farmer.name}
                  src={product.farmer.photo}
                  size="xl"
                  border="3px solid"
                  borderColor="green.100"
                />
                <Stack spacing={2}>
                  <Text fontSize="lg" fontWeight="bold" color="brand.900">
                    {product.farmer.name}
                  </Text>
                  <Text color="brand.800">
                    {product.farmer.role} · {product.farmer.years}
                  </Text>
                  <Text fontStyle="italic" color="brand.700">
                    “{product.farmer.quote}”
                  </Text>
                  <Text color="brand.800">Focus: {product.farmer.focus}</Text>
                </Stack>
              </Stack>
            </Box>
          )}

          {/* {product.testimonials?.length > 0 && (
            <Stack spacing={4}>
              <Heading size="lg" color="brand.900">
                Buyer testimonials & use cases
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                {product.testimonials.map((story) => (
                  <Box
                    key={`${story.company}-${story.useCase}`}
                    borderWidth="1px"
                    borderColor="gray.200"
                    borderRadius="xl"
                    p={5}
                    bg="white"
                    boxShadow="sm"
                  >
                    <HStack spacing={3} mb={3} align="flex-start">
                      <Icon as={FaQuoteLeft} color="green.500" mt={1} />
                      <Stack spacing={1}>
                        <Text fontWeight="semibold" color="brand.900">
                          {story.company}
                        </Text>
                        <Text fontSize="sm" color="brand.700">
                          {story.role}
                        </Text>
                      </Stack>
                    </HStack>
                    <Text fontSize="sm" color="brand.800" mb={3}>
                      “{story.quote}”
                    </Text>
                    <Badge colorScheme="green" variant="subtle">
                      Use case: {story.useCase}
                    </Badge>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>
          )} */}

          <Box
            borderRadius="2xl"
            bg="brand.700"
            color="white"
            p={{ base: 6, md: 10 }}
          >
            <Heading size="lg" mb={3}>
              Request a quote
            </Heading>
            <Text fontSize="md" mb={6}>
              Tell us destination, volumes, and packaging to receive pricing and
              lead times for {product.name}. Your purchase strengthens our
              farmer network with training, better tools, and reliable income.
            </Text>
            <HStack spacing={4} flexWrap="wrap">
              <Button
                as={Link}
                href={`/contact-us?product=${encodeURIComponent(product.name)}`}
                size="lg"
                colorScheme="green"
                variant="solid"
                leftIcon={<ExternalLinkIcon />}
              >
                Contact form
              </Button>
              <Button
                as={Link}
                href={`${WHATSAPP_URL}?text=${encodeURIComponent(
                  `Hi Sawyer Camp, I need pricing and lead times for ${product.name}. My destination is ____ and volume is _____.`
                )}`}
                size="lg"
                variant="outline"
                colorScheme="whiteAlpha"
              >
                WhatsApp now
              </Button>
            </HStack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default ProductDetail;
