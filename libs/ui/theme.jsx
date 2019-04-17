import React from "react"
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming"

const defaultTheme = {
  colors: {
    black: "#000",
    siteColor: "#3f3f3f",
    siteBackground: "#f4f2f2",
    detailBackground: "#fff",
    overlay: "rgba(190, 190, 190, 0)",
    overlayActive: "rgba(190, 190, 190, 0.65)",

    title: "#000",
    titleInverted: "white",
    text: "#3f3f3f",
    textInverted: "#f9f9f9",
    description: "#636161",
    descriptionInverted: "#f9f9f9",
    link: "#000",
    linkInverted: "#fff",
    linkHover: "#333",
    linkHoverInverted: "#eee",

    redBadge: "rgb(228, 17, 17)",
    greenBadge: "rgb(13, 132, 46)",

    boxBackground: "#fff",

    mainGradientFrom: "rgb(255, 87, 87)",
    mainGradientTo: "#6a32cc",

    dialogContentBackground: "white",
    dialogOverlayBackground: "rgba(220, 220, 220, 0.65)",

    horizontalMenuColor: "#636161",

    buttonColor: "black",
    fancyButtonColor: "black",
    fancyButtonBackground: "white",
    veryFancyButtonColor: "white",

    stickyListTitleBackground: "rgba(244, 242, 242, 0.95)",

    inputError: "#d23939",
    input: "black",
    inputBackground: "white",
    inputValidBackground: "rgb(55, 169, 124)",
    inputInvalidBackground: "#d23939",
    inputBorderColor: "hsl(0, 0%, 80%)",

    checkboxColor: "#ababab",
    checkboxColorActive: "white",
  },
}

const darkTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    siteColor: "#f9f9f9",
    siteBackground: "#1b1b1b",
    detailBackground: "#292929",
    overlay: "rgba(0, 0, 0, 0)",
    overlayActive: "rgba(0, 0, 0, 0.25)",

    title: "#fff",
    titleInverted: "black",
    text: "#f9f9f9",
    textInverted: "#3f3f3f",
    description: "#f9f9f9",
    descriptionInverted: "#292929",
    link: "#fff",
    linkInverted: "#000",
    linkHover: "#eee",
    linkHoverInverted: "#333",

    redBadge: "rgb(228, 17, 17)",
    greenBadge: "rgb(13, 132, 46)",

    boxBackground: "#292929",

    mainGradientFrom: "rgb(232, 57, 57)",
    mainGradientTo: "#410c9e",

    dialogOverlayBackground: "rgba(0, 0, 0, 0.65)",
    dialogContentBackground: "#333",

    horizontalMenuColor: "#e9e9e9",

    buttonColor: "white",
    fancyButtonColor: "white",
    fancyButtonBackground: "#292929",

    veryFancyButtonColor: "white",

    stickyListTitleBackground: "rgba(27, 27, 27, 0.85)",

    inputError: "#d23939",
    input: "white",
    inputBackground: "black",
    inputValidBackground: "rgb(55, 169, 124)",
    inputInvalidBackground: "#d23939",
    inputBorderColor: "#393939",

    checkboxColor: "#ababab",
    checkboxColorActive: "white",
  },
}

export const themes = {
  light: defaultTheme,
  dark: darkTheme,
}

export const ThemeProvider = ({ theme, ...props }) => {
  const usedTheme = themes[theme] || themes["light"]

  return <EmotionThemeProvider theme={usedTheme} {...props} />
}