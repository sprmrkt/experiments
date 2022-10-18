import React from "react";
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import CanvasHolder from "../components/atoms/CanvasHolder";
import {Canvas} from "@react-three/fiber";
import {VRButton, XR} from "@react-three/xr";
import XRInner from "../components/atoms/pages/explainer/XRInner";

const Holder = styled.div`
  background-color: rgb(0, 29, 108);
`;


function Explainer() {

  return (
    <Holder>
      <Seo title="Explainer VR" />
      <CanvasHolder>
        <VRButton />
        <Canvas>
          <XR>
            <XRInner />
          </XR>
        </Canvas>
      </CanvasHolder>
    </Holder>
  )
};

export default Explainer;
