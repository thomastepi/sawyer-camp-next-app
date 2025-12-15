"use client";
import { useState, useEffect, useRef } from "react";
import {
  Box,
  Center,
  Heading,
  VStack,
  Text,
  Select,
  Radio,
  RadioGroup,
  Button,
  HStack,
  FormControl,
  FormLabel,
  Spinner,
  Container,
} from "@chakra-ui/react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import PageHeader from "@/components/pageHeader/pageHeader";
import DisplayAlert from "@/components/alert/customAlert";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { setAlert } from "@/redux/features/alertSlice";
import currencify from "@/utils/currencify";

const headerImage =
  "https://ik.imagekit.io/thormars/Sawyer-Camp/woman-carrying-child.jpg";

const donationAmounts = ["30", "50", "100"];

const CheckoutPage = () => {
  const [{ options, isPending }, paypalDispatch] = usePayPalScriptReducer();
  const [currency, setCurrency] = useState(options.currency);
  const [amount, setAmount] = useState("50");
  const [donationType, setDonationType] = useState("paypal");

  const reduxDispatch = useDispatch();
  const alert = useSelector((state) => state.alert);
  const alertRef = useRef(null);

  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    if (alert.show && alertRef.current) {
      alertRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [alert]);

  const onCurrencyChange = ({ target: { value } }) => {
    setCurrency(value);
    setAmount(donationAmounts[1]);
    paypalDispatch({
      type: "resetOptions",
      value: { ...options, currency: value },
    });
  };

  const onCreateOrder = async (data, actions) => {
    try {
      const response = await fetch(`${baseURL}/api/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, currency }),
      });
      const order = await response.json();
      return order.id;
    } catch (error) {
      console.error("Error creating order:", error);
      reduxDispatch(
        setAlert({
          message:
            "An error occurred while creating your order. Please try again later.",
          status: "error",
          title: "Error!",
          show: true,
        })
      );
      return Promise.reject(error);
    }
  };

  const onApproveOrder = async (data, actions) => {
    if (!data.orderID) {
      reduxDispatch(
        setAlert({
          message: "No order ID found. Please try again.",
          status: "error",
          title: "Error!",
          show: true,
        })
      );
      return;
    }
    try {
      const response = await fetch(
        `${baseURL}/api/capture-order/${data.orderID}`,
        {
          method: "POST",
        }
      );
      const details = await response.json();
      if (details.status === "COMPLETED") {
        reduxDispatch(
          setAlert({
            message:
              "Thank you for your donation. Your transaction was completed successfully.",
            status: "success",
            title: "Success!",
            show: true,
          })
        );
      } else {
        reduxDispatch(
          setAlert({
            message: "Your transaction was cancelled. Please try again.",
            status: "error",
            title: "Cancelled!",
            show: true,
          })
        );
      }
    } catch (error) {
      console.error("Error capturing order:", error);
      reduxDispatch(
        setAlert({
          message:
            "An error occurred while processing your transaction. Please try again later.",
          status: "error",
          title: "Error!",
          show: true,
        })
      );
    }
  };

  return (
    <Box>
      <PageHeader image={headerImage} title="Empower Our Cause" />

      <Container maxW="container.lg" py={16}>
        <VStack spacing={8} align="stretch">
          <Heading as="h2" size="xl" color="brand.900" textAlign="center">
            Your Contribution Makes a Difference
          </Heading>
          <Text fontSize="lg" color="brand.800" textAlign="center">
            Your donation supports farmers displaced by conflict and helps
            restore essential food production, contributing to a more
            sustainable future for Banga Bakundu.
          </Text>

          {isPending ? (
            <Center py={10}>
              <Spinner size="xl" color="brand.800" />
            </Center>
          ) : (
            <VStack
              spacing={7}
              bg="white"
              p={8}
              borderRadius="lg"
              boxShadow="md"
            >
              <FormControl as="fieldset">
                <FormLabel
                  fontWeight="bold"
                  textAlign="center"
                  color="brand.900"
                >
                  Select a Payment Method
                </FormLabel>
                <RadioGroup
                  value={donationType}
                  mt="10px"
                  onChange={setDonationType}
                >
                  <HStack spacing={6} justifyContent="center" wrap="wrap">
                    <Radio value="paypal" colorScheme="green" size="lg">
                      PayPal
                    </Radio>
                    <Radio value="mobilemoney" colorScheme="green" size="lg">
                      Mobile Money (MTN/Orange)
                    </Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>

              {donationType === "paypal" ? (
                <>
                  <FormControl as="fieldset">
                    <FormLabel
                      fontWeight="bold"
                      textAlign="center"
                      color="brand.900"
                    >
                      Select a Donation Amount
                    </FormLabel>
                    <RadioGroup value={amount} mt="10px" onChange={setAmount}>
                      <HStack spacing={6} justifyContent="center" wrap="wrap">
                        {donationAmounts.map((val, index) => (
                          <Box
                            key={val}
                            borderWidth="2px"
                            borderColor={
                              val === amount ? "brand.800" : "gray.200"
                            }
                            p={4}
                            borderRadius="md"
                            bg={val === amount ? "brand.500" : "brand.400"}
                            color={val === amount ? "white" : "brand.900"}
                            _hover={{
                              bg: val === amount ? "brand.700" : "brand.300",
                              cursor: "pointer",
                            }}
                            textAlign="center"
                          >
                            <Radio
                              value={val}
                              isChecked={val === amount}
                              colorScheme="green"
                              size="lg"
                            >
                              {currencify(Number(val), currency, "symbol")}
                            </Radio>
                            {index === 1 && (
                              <Text fontSize="xs" mt={1}>
                                Most Impactful
                              </Text>
                            )}
                          </Box>
                        ))}
                      </HStack>
                    </RadioGroup>
                  </FormControl>

                  <Box w={{ base: "100%", md: "50%" }}>
                    <Select
                      mb="20px"
                      value={currency}
                      onChange={onCurrencyChange}
                      focusBorderColor="brand.800"
                      borderColor="brand.700"
                    >
                      <option value="USD">💵 USD</option>
                      <option value="EUR">💶 Euro</option>
                      <option value="CAD">💵 CAD</option>
                    </Select>

                    <PayPalButtons
                      style={{ layout: "vertical", color: "blue" }}
                      createOrder={onCreateOrder}
                      onApprove={onApproveOrder}
                    />
                    <Text
                      fontSize="sm"
                      mt={2}
                      color="brand.700"
                      textAlign="center"
                    >
                      Transactions secured by PayPal
                    </Text>
                  </Box>
                </>
              ) : (
                <Box textAlign="center">
                  <Heading as="h3" size="lg" color="brand.900" mb={4}>
                    Donate with Mobile Money
                  </Heading>
                  <Text color="brand.800" mb={4}>
                    Please use the following details for your donation:
                  </Text>
                  <VStack spacing={2} align="stretch">
                    <Text>
                      <Text as="span" fontWeight="bold">
                        MTN Mobile Money:
                      </Text>{" "}
                      +237651771843
                    </Text>
                    <Text>
                      <Text as="span" fontWeight="bold">
                        Orange Money:
                      </Text>{" "}
                      +237691234567
                    </Text>
                  </VStack>
                  <Text mt={4} color="brand.700">
                    Please include "Donation" in the reference/reason field.
                  </Text>
                </Box>
              )}

              <Box ref={alertRef} w={{ base: "100%", md: "50%" }}>
                {alert.show && (
                  <DisplayAlert
                    message={alert.message}
                    alertStatus={alert.status}
                    title={alert.title}
                  />
                )}
              </Box>
            </VStack>
          )}
        </VStack>
      </Container>

      <Box bg="brand.800" py={16} color="white">
        <Container maxW="container.lg">
          <VStack spacing={6} textAlign="center">
            <Heading as="h2" size="xl">
              Considering a Larger Impact?
            </Heading>
            <Text fontSize="lg" maxW="2xl">
              Your generosity inspires us! Let's discuss how your organization
              can partner with us to make a lasting difference.
            </Text>
            <Button
              as={Link}
              href="/contact-us"
              colorScheme="orange"
              size="lg"
              bg="brand.900"
              _hover={{ bg: "brand.800" }}
            >
              Connect with Us
            </Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default CheckoutPage;
