import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./colors";

const spin = keyframes`
to {
    transform: rotate(360deg);

}`;
const NavBar = () => {
  const [padding, setPadding] = useState(15);
  return (
    <header
      css={css`
        background-color: ${colors.primary};
        padding: ${padding}px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        css={css`
          font-size: 60px;
          animation: 1s ${spin} linear infinite;
          display: inline-block;
          /* &: is a stand in for the actual component itself */
          &:hover {
            animation: 1s ${spin} linear infinite reverse;
            text-decoration: underline;
          }
        `}
        role="img"
        aria-label="logo"
      >
        😃
      </span>
    </header>
  );
};

export default NavBar;
