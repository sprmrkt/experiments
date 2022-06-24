import React, {useEffect, useRef, useState} from "react";
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import CanvasHolder from "../components/atoms/CanvasHolder";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import DefaultDirectionalLight from "../components/atoms/DefaultDirectionalLight";
import GlobeGroup from "../components/atoms/pages/cw-globe/GlobeGroup";
import {useWindowSize} from "react-use";

const Holder = styled.div`
`;

function CwGlobe() {
  const size = useWindowSize()

  return (
    <Holder>
      <Seo title="CW Globe" />
      <CanvasHolder>
        <Canvas
          shadows
          camera={{
            position: [0, 0, size.width > 576 ? 30 : 40],
            fov: 30,
          }}>
          <OrbitControls enableZoom={false} makeDefault />
          <ambientLight intensity={0.5} />
          <DefaultDirectionalLight />
          <GlobeGroup/>
        </Canvas>
      </CanvasHolder>
    </Holder>
  )
};

export default CwGlobe;
