import React from "react";
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import CanvasHolder from "../components/atoms/CanvasHolder";
import {Canvas} from "@react-three/fiber";
import {ScrollControls} from "@react-three/drei";
import DefaultDirectionalLight from "../components/atoms/DefaultDirectionalLight";
import {useWindowSize} from "react-use";
import BlocksModel from "../components/atoms/pages/blocks/BlocksModel";

const Holder = styled.div`
`;

function Blocks() {
  const size = useWindowSize()

  return (
    <Holder>
      <Seo title="Blocks" />
      <CanvasHolder>
        <Canvas
          shadows
          camera={{
            position: [0, 2, size.width > 576 ? 10 : 30],
            fov: 30,
          }}>
          <ScrollControls pages={5}>
          <axesHelper args={[5]}/>
          <ambientLight intensity={0.5} />
          <DefaultDirectionalLight />
          <BlocksModel scale={0.005} position={[0, 0, -0.5]}/>
          </ScrollControls>
        </Canvas>
      </CanvasHolder>
    </Holder>
  )
};

export default Blocks;
