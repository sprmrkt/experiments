import {Link} from "gatsby";
import React from "react";
import styled from "styled-components";

const Holder = styled.header`
  position: fixed;
  top: 0.5rem;
  left: 1rem;
  h1 {
    margin: 0;
  }
`;

function Header() {
  return (
      <Holder>
        <h1>
          <Link to="/">The Third Dimension</Link>
        </h1>
      </Holder>
  );
}

export default Header;
