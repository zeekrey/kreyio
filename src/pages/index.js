/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { React, useState } from "react"
// import { Helmet } from "react-helmet"
import SEO from "../components/SEO.js"
import Header from "../components/Header.js"
import Button from "../components/Button.js"
import textpattern from "../../static/textptrn.jpeg"

export default () => {
  const breakpoints = [576, 768, 992, 1200]
  const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

  return (
    <div
      css={css`
        font-family: Open Sans;
        font-size: 0.9rem;
      `}
    >
      <SEO title="Christian Krey" description="Just some pages about me."></SEO>
      <Header />
      <main
        css={css`
          text-align: center;
        `}
      >
        <div
          css={css`
            font-size: 5.6rem;
            ${[mq[0]]} {
              font-size: 8.6rem;
            }
            ${[mq[1]]} {
              font-size: 9.6rem;
            }
            ${[mq[2]]} {
              font-size: 12.6rem;
            }
            ${[mq[3]]} {
              font-size: 15.6rem;
            }
            font-family: Fugaz One, cursive;
            color: red;
            -webkit-text-fill-color: transparent;
            background: -webkit-linear-gradient(transparent, transparent),
              url(${textpattern}) center/80% no-repeat;
            background: -o-linear-gradient(transparent, transparent);
            -webkit-background-clip: text;
          `}
        >
          KREY
        </div>
        <div
          css={css`
            margin: 0 4rem;
            ${[mq[0]]} {
              margin: 0 4rem;
            }
            ${[mq[1]]} {
              margin: 0 6rem;
            }
            ${[mq[2]]} {
              margin: 0 8rem;
            }
            ${[mq[3]]} {
              margin: 0 10rem;
            }
          `}
        >
          Alllooooo, I’m Christian! A problem solver at heart, I'm passionate
          about anything and everything that enables me to make the world a
          better place. I studied computer science and economics, and I am
          skilled at scaling IT system architectures.
        </div>
        <Button
          css={css`
            margin-top: 1.5rem;
            ${[mq[0]]} {
              margin-top: 3rem;
            }
            ${[mq[1]]} {
              margin-top: 4rem;
            }
            ${[mq[2]]} {
              margin-top: 5rem;
            }
            ${[mq[3]]} {
              margin-top: 6rem;
            }
          `}
        >
          <a
            css={css`
              text-decoration: none;
              &:visited {
                color: black;
              }
            `}
            href={"https://medium.com/@christian_7682"}
          >
            My Thoughts & Ideas on Medium ↠
          </a>
        </Button>
      </main>
    </div>
  )
}
