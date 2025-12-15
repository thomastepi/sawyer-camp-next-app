import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      900: "#2C5234", // Dark Green
      800: "#4A7C59", // Medium Green
      700: "#6B9B7A", // Light Green
      600: "#8FBFAA", // Pale Green
      500: "#A9D5B7", // Very Pale Green
      400: "#F0EFEA", // Off-white/Light beige
      300: "#D9D4C1", // Beige
      200: "#A69B85", // Taupe
      100: "#594F43", // Dark Brown
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  styles: {
    global: {
      "html, body": {
        color: "brand.900",
        lineHeight: "tall",
      },
      a: {
        color: "brand.800",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        textDecoration: "none",
      },
      variants: {
        solid: {
          bg: "brand.800",
          color: "white",
          _hover: {
            bg: "brand.900",
          },
        },
      },
    },
    Input: {
      baseStyle: {
        field: {
          borderColor: "brand.700",
        },
      },
    },
    Textarea: {
      baseStyle: {
        borderColor: "brand.700",
      },
    },
    Select: {
      baseStyle: {
        borderColor: "brand.700",
      },
    },
  },
});

export default theme;
