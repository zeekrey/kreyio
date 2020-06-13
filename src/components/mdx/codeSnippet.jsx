import React from "react"
import styled from "styled-components"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/oceanicNext"

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 1.5em 1.5em;
  overflow: scroll;
  border-radius: 0.5em;
  position: relative;
`

const Line = styled.div`
  display: table-row;
`

const LineContent = styled.span`
  display: table-cell;
`

const Button = styled.button`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
`

export function CodeSnippet({ children }) {
  //   function myFunction(e) {
  //     // https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
  //     navigator.clipboard.writeText(code).then(
  //       function () {
  //         console.log("Async: Copying to clipboard was successful!")
  //       },
  //       function (err) {
  //         console.error("Async: Could not copy text: ", err)
  //       }
  //     )
  //   }

  return (
    <Highlight {...defaultProps} theme={theme} code={children} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
          {/* <Button onClick={myFunction}>Copy</Button> */}
        </Pre>
      )}
    </Highlight>
  )
}
