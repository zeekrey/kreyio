import React from "react"
import styled from "styled-components"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/oceanicNext"
import { Copy } from "react-feather"

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 1em 1.5em;
  overflow: scroll;
  border-radius: 0.5em;
  position: relative;
  font-size: 0.8rem;
  line-height: 1rem;
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
  cursor: pointer;
  &:hover {
    transition: 0.2s;
    color: ${({ theme }) => theme.secondary};
  }
`

export function CodeSnippet({ children }) {
  function copyToClipboard() {
    // https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
    navigator.clipboard.writeText(children).then(
      function () {
        console.log("Async: Copying to clipboard was successful!")
      },
      function (err) {
        console.error("Async: Could not copy text: ", err)
      }
    )
  }

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
          <Button as={Copy} onClick={copyToClipboard} size={16}>
            Copy
          </Button>
        </Pre>
      )}
    </Highlight>
  )
}
