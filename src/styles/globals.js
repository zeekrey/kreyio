import { createGlobalStyle } from "styled-components"
import "typeface-open-sans"
import "typeface-oswald"

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.primary};
    height: 100vh;
    margin: 0;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
    font-family: 'Open Sans', BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-size: 0.9rem;
    transition: all 0.25s linear;
    @media (min-width: 1024px) { 
    max-width: 800px;
  }
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  `
