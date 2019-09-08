/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"

export default (props) => {
  return (
    <button
      css={css`
        padding: 0.8rem 1.4rem;
        border: 1px solid #000000;
        box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        cursor: pointer;
        display: inline-block;
        color: black;
        text-decoration: none;
        font-size: 0.9rem;
        &:hover {
          box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.35);
        }
      `}
      {...props}
    >
      {props.children}
    </button>
  )
}
