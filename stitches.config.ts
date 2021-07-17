import { createCss } from "@stitches/react"
import { grass, grassDark, olive, oliveDark } from "@radix-ui/colors"

export const {
  styled,
  css,
  global,
  keyframes,
  getCssString,
  theme,
} = createCss({
  theme: {
    colors: {
      ...grass,
      ...olive,
    },
    shadows: {
      ...grass,
      ...olive,
    },
  },
  media: {
    small: "(min-width: 576px)",
    medium: "(min-width: 768px)",
    large: "(min-width: 992px)",
    xlarge: "(min-width: 1200px)",
  },
})

// const darkTheme = theme({
//   colors: {
//     ...grassDark,
//     ...oliveDark,
//   },
// })

export const globalStyles = global({
  body: {
    margin: 0,
    padding: 0,
    fontFamily: "'Work Sans', sans-serif",
  },
  a: {
    border: "none",
    appearance: "none",
    textDecoration: "none",
    boxShadow: "0px 2px $grass6",
    color: "inherit",

    "&:hover": {
      color: "$grass8",
    },

    "&:active, &:focus": {
      color: "$grass9",
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
})
