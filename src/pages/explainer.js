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

const scenes = 8;

function Explainer() {
  const size = useWindowSize()

  return (
    <Holder>
      <Seo title="Explainer" />
      <CanvasHolder>
        <Canvas
          shadows
          camera={{
            position: [-2, 0, size.width > 576 ? -30 : -40],
            fov: 40,
            rotation: [0, -Math.PI, 0]
          }}>
          {/*<OrbitControls />*/}
          <ScrollControls pages={10}>
            {/*<axesHelper args={[5]} />*/}
            <ambientLight intensity={0.4} />
            <DefaultDirectionalLight />
            <CameraRig scenes={scenes} />
            <group position={[0, -5, 0]}>
              <Static scale={25} />
              <ActiveElements scenes={scenes} />
            </group>
          </ScrollControls>
        </Canvas>
      </CanvasHolder>
    </Holder>
  )
};

export default Explainer;
