/** @jsx jsx */
import { React, useState } from "react"
import { Link } from "gatsby"
import { css, jsx } from "@emotion/core"

export default () => {
  const breakpoints = [576, 768, 992, 1200]
  const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)
  const burgerStyle = {
    width: "28px",
    height: "1px",
    backgroundColor: "black",
    margin: "6px 0",
  }

  return (
    <header
      css={css`
        margin: 2.5rem;
        display: flex;
      `}
    >
      <div
        css={css`
          justify-self: left;
          flex: 1;
          align-self: center;
        `}
      >
        <Link
          to="/"
          css={css`
            color: black;
            text-decoration: none;
          `}
        >
          CHRISTIAN KREY.IO
        </Link>
      </div>
      <div
        css={css`
          justify-self: right;
          display: none;
          ${[mq[1]]} {
            display: inherit;
          }
        `}
      >
        <Link
          to="/about/"
          css={css`
            color: black;
            text-decoration: none;
          `}
        >
          ABOUT
        </Link>
        <Link
            to="/contact/"
            css={css`
              color: black;
              text-decoration: none;
              margin-left: 4rem;
            `}
          >
            CONTACT
          </Link>
      </div>
      <div
        css={css`
          ${[mq[1]]} {
            display: none;
          }
        `}
      >
        <div style={burgerStyle}></div>
        <div style={burgerStyle}></div>
        <div style={burgerStyle}></div>
      </div>
    </header>
  )
}
