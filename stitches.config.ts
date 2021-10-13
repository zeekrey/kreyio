import { createStitches } from "@stitches/react"
import { sand, sandDark, yellow, yellowDark } from "@radix-ui/colors"

export const { styled, css, globalCss, keyframes, getCssText, createTheme } =
  createStitches({
    theme: {
      colors: {
        ...sand,
        ...yellow,
      },
      shadows: {
        ...sandDark,
        ...yellowDark,
      },
    },
    media: {
      small: "(min-width: 576px)",
      medium: "(min-width: 768px)",
      large: "(min-width: 992px)",
      xlarge: "(min-width: 1200px)",
    },
  })

export const darkTheme = createTheme({
  colors: {
    ...sandDark,
    ...yellowDark,
  },
  shadows: {
    ...sand,
    ...yellow,
  },
})

export const globalStyles = globalCss({
  body: {
    margin: 0,
    padding: 0,
    fontFamily: "'Work Sans', sans-serif",
  },
  a: {
    border: "none",
    appearance: "none",
    textDecoration: "none",
    boxShadow: "0px 1px $sand12",
    color: "inherit",

    "&:hover": {
      color: "$yellow10",
    },

    "&:active, &:focus": {
      color: "$yellow11",
    },
  },
  "p, a, li": {
    lineHeight: "1.4rem",
  },

  // Code blocks
  pre: {
    padding: "0.75rem",
    borderRadius: "0.3rem",
    overflowY: "auto",
  },

  // Line numbers
  code: {
    counterReset: "step",
    counterIncrement: "step 0",

    ".line::before": {
      content: "counter(step)",
      counterIncrement: "step",
      width: "1rem",
      marginRight: "1.5rem",
      display: "inline-block",
      textAlign: "right",
      color: "rgba(115,138,148,.4)",
    },
  },
})

export const Box = styled("div", {})
