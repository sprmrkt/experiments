import React from "react";
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import CanvasHolder from "../components/atoms/CanvasHolder";
import SapaGirlInner from "../components/atoms/pages/sapa-girl/SapaGirlInner";


const Holder = styled.div`
`;

function SapaGirl() {
  return (
    <Holder>
      <Seo title="Sapa Girl" />
      <CanvasHolder>
        <SapaGirlInner/>
      </CanvasHolder>
    </Holder>
  )
};

export default SapaGirl;
