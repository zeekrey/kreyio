import { styled } from "../stitches.config"

const Button = styled("button", {
  all: "unset",
  padding: "8px 10px",
  background: "$sand1",
  borderRadius: "4px",
  cursor: "pointer",

  "&:hover": {
    background: "$sand2",
    color: '$yellow10'
  },

  "&:active, &:focus": {
    boxShadow: "0 0 0px 2px $sand11",
  },
})

export default Button
