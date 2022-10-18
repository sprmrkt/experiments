import React from "react";
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import CanvasHolder from "../components/atoms/CanvasHolder";
import {Canvas} from "@react-three/fiber";
import DefaultDirectionalLight from "../components/atoms/DefaultDirectionalLight";
import {Model as Static} from "../components/atoms/pages/explainer/models/Ttc-explainer-poc-static";
import {Controllers, VRButton, XR} from "@react-three/xr";

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
            <Controllers />
            <ambientLight intensity={0.4} />
            <DefaultDirectionalLight />
            <group position={[0, -5, 0]}>
              <Static scale={25} />
            </group>
          </XR>
        </Canvas>
      </CanvasHolder>
    </Holder>
  )
};

export default Explainer;
