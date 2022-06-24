import React from 'react';
import styled from 'styled-components';

const Holder = styled.div`
  width: 100%;
  height: var(--windowHeight);
  overflow: hidden;
`;

function CanvasHolder({children}) {
  return (
    <Holder>
      {children}
    </Holder>
  )
}

export default CanvasHolder;