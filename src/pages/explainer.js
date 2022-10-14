import React from "react";
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import CanvasHolder from "../components/atoms/CanvasHolder";
import {Canvas} from "@react-three/fiber";
import {Box, OrbitControls, ScrollControls} from "@react-three/drei";
import DefaultDirectionalLight from "../components/atoms/DefaultDirectionalLight";
import {useWindowSize} from "react-use";
import {Model as Static} from "../components/atoms/pages/explainer/models/Ttc-explainer-poc-static";
import ActiveElements from "../components/atoms/pages/explainer/ActiveElements";
import CameraRig from "../components/atoms/pages/explainer/CameraRig";

const Holder = styled.div`
  background-color: rgb(0, 29, 108);
`;

function Explainer() {

  return (
    <Holder>
      <Seo title="Explainer" />
      <CanvasHolder>
        <Canvas
          shadows
          camera={{
            position: [0, 0, 10],
            fov: 30,
          }}>
          <OrbitControls />
          {/*<ScrollControls pages={5}>*/}
          <axesHelper args={[5]} />
          <ambientLight intensity={0.4} />
          <DefaultDirectionalLight />
          {/*<CameraRig/>*/}
            <Static scale={25} position={[0, 0, 0]} />
            {/*<Box args={[10,10,10]}/>*/}
            <ActiveElements />
          {/*</ScrollControls>*/}
        </Canvas>
      </CanvasHolder>
    </Holder>
  )
};

export default Explainer;
