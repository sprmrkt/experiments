import {Link} from "gatsby";
import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types'

const Holder = styled.header`
  position: fixed;
  z-index: 10;
  top: 0.5rem;
  left: 1rem;
  opacity: ${props => props.hide ? 0 : 1};
  h1 {
    margin: 0;
  }
`;

function Header({hide}) {
  return (
      <Holder hide={hide}>
        <h1>
          <Link to="/">experiments</Link>/<a href="https://supermarket.london" target="_blank" rel="noopener noreferrer">supermarket.london</a>
        </h1>
      </Holder>
  );
}

Header.propTypes = {
  hide: PropTypes.bool,
};

export default Header;
