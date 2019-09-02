/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { React, useState } from "react"
import { Link } from "gatsby"
import Header from "../components/Header.js"
import Contact from "../components/Contact.js"
import useMedia from "../hooks/useMedia.js"

import githubLogo from "../../static/github.png"
import linkedinLogo from "../../static/linkedin.png"
import mediumLogo from "../../static/medium.png"

export default () => {
  const mediaFactor = useMedia(
    ["(min-width: 1024px)", "(min-width: 600px)", "(min-width: 0px)"],
    [3, 2, 1],
    1
  )
  return (
    <div style={{ fontFamily: "Open Sans", fontSize: "0.9rem" }}>
      <Header mediaFactor={mediaFactor} />
      <div
        css={css`
          text-align: center;
        `}
      >
        <div
          css={css`
            font-size: ${2.4 * mediaFactor + "rem"};
            font-family: Fugaz One, cursive;
          `}
        >
          CONTACT
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: ${mediaFactor === 3 ? 'row' : 'column'};
            margin: 2rem ${4 * mediaFactor + "rem"};
            justify-content: center;
            align-items: center;
          `}
        >
          <div
            css={css`
              flex: 1;
              margin: 5rem 1rem;
            `}
          >
            <div>
              Feel free to add, follow or contact me on any of the following
              networks.
            </div>
            <div
              css={css`
                margin: 2.5rem 0rem;
              `}
            >
              <a href="http://">
                <img src={githubLogo} alt="GitHub" width="40" />
              </a>
              <a href="http://">
                <img
                  src={mediumLogo}
                  alt="Medium.com"
                  width="38"
                  css={css`
                    margin-left: 1.5rem;
                  `}
                />
              </a>
              <a href="http://">
                <img
                  src={linkedinLogo}
                  alt="LinkedIn"
                  width="45"
                  css={css`
                    margin-left: 1.5rem;
                  `}
                />
              </a>
            </div>
            <div>
              Or leave me a message. ↠
            </div>
          </div>
          {mediaFactor === 3 && <div
            css={css`
              margin: 0rem 3rem;
              width: 1px;
              background: black;
              height: 20rem;
            `}
          ></div>}
          <div
            css={css`
              flex: 1;
              height: 100%;
              width: 100%;
            `}
          >
            <Contact />
          </div>
        </div>
      </div>
    </div>
  )
}
