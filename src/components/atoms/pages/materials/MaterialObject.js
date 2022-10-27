import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const Holder = styled.div`
`;

function MaterialObject({children, propName}) {
  return (
    <Holder>
      {children}
    </Holder>
  )
}

MaterialObject.propTypes = {
  propName: PropTypes.string.isRequired,
};

export default MaterialObject;