import React from "react";
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import CanvasHolder from "../components/atoms/CanvasHolder";
import {Canvas} from "@react-three/fiber";
import {Box, OrbitControls, ScrollControls} from "@react-three/drei";
import DefaultDirectionalLight from "../components/atoms/DefaultDirectionalLight";
import {useWindowSize} from "react-use";
import {Model as Static} from "../components/atoms/pages/explainer/models/Explainer-poc-static";
import ActiveElements from "../components/atoms/pages/explainer/ActiveElements";
import CameraRig from "../components/atoms/pages/explainer/CameraRig";

const Holder = styled.div`
`;

function Explainer() {
  const size = useWindowSize()

  return (
    <Holder>
      <Seo title="Explainer" />
      <CanvasHolder>
        <Canvas
          shadows
          camera={{
            position: [0, 0, size.width > 576 ? 3.25 : 6],
            fov: 30,
          }}>
          {/*<OrbitControls />*/}
          <ScrollControls pages={5}>
            {/*<axesHelper args={[5]} />*/}
            <ambientLight intensity={0.3} />
            <DefaultDirectionalLight />
            <CameraRig/>
            <Static scale={10} position={[0, -0.5, 0]} />
            <ActiveElements />
          </ScrollControls>
        </Canvas>
      </CanvasHolder>
    </Holder>
  )
};

export default Explainer;
