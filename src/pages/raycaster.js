import React from "react";
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import CanvasHolder from "../components/atoms/CanvasHolder";
import {Canvas} from "@react-three/fiber";
import DefaultDirectionalLight from "../components/atoms/DefaultDirectionalLight";
import {useWindowSize} from "react-use";
import {OrbitControls} from "@react-three/drei";
import RayCaster from "../components/atoms/pages/raycaster/RayCaster";

const Holder = styled.div`
`;

function RayCasterPage() {
  const size = useWindowSize()

  return (
    <Holder>
      <Seo title="RayCasterPage" />
      <CanvasHolder>
        <Canvas
          shadows
          camera={{
            position: [0, 2, size.width > 576 ? 10 : 12],
            fov: 30,
          }}>
          <OrbitControls/>
          <axesHelper args={[5]} />
          <ambientLight intensity={0.5} />
          <DefaultDirectionalLight />
          <RayCaster/>
        </Canvas>
      </CanvasHolder>
    </Holder>
  )
};

export default RayCasterPage;
