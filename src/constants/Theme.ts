// src/constants/Theme.ts

export const Theme = {
  colors: {
    primary: "#EB5757", // That signature Coral
    grayMid: "#9B9898",
    grayLight: "#E3E3E3",
    dark: "#000000",
    white: "#FFFFFF",
    background: "#FFFFFF",
  },
  typography: {
    // React Native uses unitless numbers for pixels
    t1: {
      fontSize: 30,
      fontWeight: "600" as const, // Inter Semi Bold
    },
    t2: {
      fontSize: 26,
      fontWeight: "600" as const,
    },
    t3: {
      fontSize: 20,
      fontWeight: "600" as const,
    },
    t4: {
      fontSize: 16,
      fontWeight: "600" as const,
    },
    bodyLg: {
      fontSize: 14,
      fontWeight: "400" as const, // Inter Regular
      lineHeight: 21, // 1.5 * 14
    },
    bodySm: {
      fontSize: 12,
      fontWeight: "400" as const,
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  radius: {
    button: 25, // Based on your "Ajouter au panier" pill shape
    card: 16,
  },
};
