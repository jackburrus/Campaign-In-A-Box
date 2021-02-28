import { createTheme } from "@shopify/restyle";

const palette = {
  primary: "#0B406B",
  primaryLight: "#174972",
  primaryDark: "#142751",

  secondary: "#689AC1",
  secondaryLight: "#7EABCF",
  secondaryDark: "#698AA4",

  text: "#516779",
  textLight: "#384753",
  textDark: "#2D3B47",

  buttonText: "#F7F9FA",

  card: "#D6E1F1",
  cardText: "#384753",
  buttonBackground: "#FF3E5E",
  accent: "#FF3E5E",
  lightAccent: "#F7EBE8",

  //generic
  white: "#F7F9FA",
  black: "#000",
  //coins
  btc: "#FFA800",
  monero: "#F86300",
  paypal: "#2990C2",
};

const PrimaryTheme = createTheme({
  colors: {
    primary: palette.primary,
    primaryDark: palette.primaryDark,
    secondary: palette.secondary,
    secondaryDark: palette.secondaryDark,
    accent: palette.accent,
    lightAccent: palette.lightAccent,
    buttonText: palette.buttonText,
    buttonBackground: palette.buttonBackground,

    white: palette.white,
    text: palette.text,
    shadowColor: palette.black,
    card: palette.card,
    cardText: palette.cardText,
    lightRed: palette.accent,
    btc: palette.btc,
    monero: palette.monero,
    paypal: palette.paypal,
  },

  textVariants: {
    primaryText: {
      color: "white",
      fontFamily: "SourceSansPro_700Bold",
      fontSize: { phone: 36, tablet: 36, web: 56, desktop: 56 },
    },
    secondaryText: {
      color: "text",
      fontFamily: "SourceSansPro_700Bold",
      fontSize: { phone: 24, tablet: 24, web: 36, desktop: 36 },
    },
    issuePrimary: {
      color: "white",
      fontFamily: "SourceSansPro_700Bold",
      fontSize: { phone: 24, tablet: 24, web: 36, desktop: 56 },
      marginBottom: {
        phone: "l",
        tablet: "l",
        web: undefined,
        desktop: undefined,
      },
    },
    issueSecondary: {
      color: "white",
      fontFamily: "SourceSansPro_400Regular",
      fontSize: { phone: 12, tablet: 14, web: 24, desktop: 36 },
    },
    issueCardTextTitle: {
      color: "cardText",
      fontFamily: "Lato_700Bold",
      fontSize: { phone: 18, tablet: 18, web: 16, desktop: 18 },
      letterSpacing: 1.2,
    },
    issueCardTextBody: {
      color: "cardText",
      fontFamily: "Lato_700Bold",
      fontSize: { phone: 12, tablet: 12, web: 14, desktop: 20 },
      lineHeight: { phone: 25, tablet: 25, web: 35, desktop: 35 },
    },
    eventRegisterTitle: {
      fontSize: { phone: 18, tablet: 16, web: 30, desktop: 30 },
      color: "white",
      fontFamily: "Lato_700Bold",
    },
    eventRegisterDetails: {
      fontSize: { phone: 18, tablet: 16, web: 18, desktop: 18 },
      color: "accent",
      fontFamily: "Lato_700Bold",
      // marginTop: 10,
    },
    aboutGiantText: {
      fontSize: { phone: 40, tablet: 40, web: 100, desktop: 100 },
      fontFamily: "Lato_700Bold",
      color: "white",
    },
    aboutHeaderText: {
      fontSize: { phone: 24, tablet: 24, web: 40, desktop: 40 },
      fontFamily: "Lato_700Bold",
      color: "white",
    },
    aboutBodyText: {
      fontSize: { phone: undefined, tablet: undefined, web: 18, desktop: 18 },
      fontFamily: "Lato_700Bold",
      color: "white",
      lineHeight: 30,
      textAlign: "auto",
    },
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
    web: 992,
    desktop: 1200,
  },
});

export type Theme = typeof PrimaryTheme;
export default PrimaryTheme;
