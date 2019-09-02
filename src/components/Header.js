/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import { css, jsx } from "@emotion/core"

export default ({ mediaFactor }) => {
  const burgerStyle = {
    width: "28px",
    height: "1px",
    backgroundColor: "black",
    margin: "6px 0",
  }

  return (
    <div
      style={{
        margin: "2.5rem",
        display: "flex",
      }}
    >
      <div style={{ justifySelf: "left", flex: "1", alignSelf: "center" }}>
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
      {mediaFactor > 1 ? (
        <div style={{ justifySelf: "right" }}>
          <Link
            to="/contact/"
            css={css`
              color: black;
              text-decoration: none;
            `}
          >
            CONTENT
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
      ) : (
        <div>
          <div style={burgerStyle}></div>
          <div style={burgerStyle}></div>
          <div style={burgerStyle}></div>
        </div>
      )}
    </div>
  )
}
