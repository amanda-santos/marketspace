import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    blue: {
      700: "#364D9D",
      500: "#647AC7",
      100: "rgba(100, 122, 199, 0.1)",
    },
    red: {
      300: "#EE7979",
    },
    gray: {
      700: "#1A181B",
      600: "#3E3A40",
      500: "#5F5B62",
      400: "#9F9BA1",
      300: "#D9D8DA",
      200: "#EDECEE",
      100: "#F7F7F8",
    },
    white: "#FFFFFF",
  },
  fonts: {
    heading: "Karla_700Bold",
    body: "Karla_400Regular",
  },
  fontSizes: {
    xxs: 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
});
