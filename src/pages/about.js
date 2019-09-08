/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { Link } from "gatsby"
import Header from "../components/Header.js"
import Button from "../components/Button.js"

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
      <Header />
      <div>
        <div
          css={css`
            text-align: center;
            font-size: 2.4rem;
            ${[mq[0]]} {
              font-size: 2.6rem;
            }
            ${[mq[1]]} {
              font-size: 4.6rem;
            }
            ${[mq[2]]} {
              font-size: 5.6rem;
            }
            ${[mq[3]]} {
              font-size: 7.6rem;
            }
            font-family: Fugaz One, cursive;
          `}
        >
          ME...
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            margin: 2rem 4rem;
            ${[mq[0]]} {
              margin: 2rem 5rem;
            }
            ${[mq[1]]} {
              margin: 2rem 6rem;
            }
            ${[mq[2]]} {
              margin: 2rem 7rem;
            }
            ${[mq[3]]} {
              margin: 2rem 12rem;
            }
          `}
        >
          <div
            css={css`
              font-size: 1rem;
              line-height: 2rem;
            `}
          >
            <p>
              Born in Leipzig, Germany, I moved to Cologne to study computer
              science and economics when I was nineteen. That was a big move for
              me, but it seemed like the right thing to do. For years I had
              cultivated a passion for computers and math, and if building my
              career meant moving away from everything I had ever known, then I
              could do that. This is not to say, of course, that I made the
              decision lightly. Not at all! It just seemed to make sense to me
              on multiple levels.
            </p>
            <p>
              Since graduating, I have taken jobs at large companies for the
              most part. These jobs have all presented their own unique
              challenges, and as stressful as the pressure seemed in the
              beginning, they prepared me well to help organizations navigate
              all the most significant and common challenges in their
              industries.
            </p>
            <p>
              The most complex systems are the ones that call out to me most
              loudly. There is something about complexity that is endlessly
              attractive to me, and any time I can take an outdated, outmoded
              process and reshape it into something more modern and
              cutting-edge, I am eager to do so. An innovator at heart, I solve
              problems through creativity, thinking outside the box and pushing
              out of the realm of what is likely into the realm of what is
              possible. If all this sounds a little scary, that's because it is!
            </p>
            <p>
              I know how to create scaling IT system architectures, and
              entrepreneurship and web development are both passions of mine. I
              strive to grow and learn every day, and long-term, I want to apply
              my IT and entrepreneurship knowledge to make the world a better
              place. I am available for networking, public talk, presentation,
              start-up, and nonprofit opportunities that make good use of my
              skills.
            </p>
          </div>
          <Button
            css={css`
              align-self: center;
              justify-self: center;
              margin-top: 1.5rem;
            `}
          >
            <Link
              css={css`
                text-decoration: none;
                &:visited {
                  color: black;
                }
              `}
              to="/contact/"
            >
              Contact me ↠
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
