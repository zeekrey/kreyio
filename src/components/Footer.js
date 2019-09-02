/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from 'react';

export default ({children}) => {
    return (
        <div css={css`
        position: fixed;
        bottom: 0;
        width: 100vw;
        display: flex;
        justify-content: center;
        padding: .8rem 0;
        margin-left: -0.8rem;
        font-size: .6rem;
        `}>{children}</div>
    )
}
