import React, {useEffect, useRef, useState} from "react";
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import CanvasHolder from "../components/atoms/CanvasHolder";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import DefaultDirectionalLight from "../components/atoms/DefaultDirectionalLight";
import GlobeGroup from "../components/atoms/pages/cw-globe/GlobeGroup";
import {useWindowSize} from "react-use";
import Block from "../components/atoms/pages/blocks/Block";

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
            position: [0, 0, size.width > 576 ? 20 : 15],
          }}>
          <axesHelper args={[5]}/>
          <OrbitControls makeDefault />
          <ambientLight intensity={0.5} />
          <DefaultDirectionalLight />
          <Block position={[0, 0, 0]} depth={3} />
          <Block position={[2, 0, 0]} depth={3} />
          <Block position={[0, 1, 0]} height={2} />
          <Block position={[0, 1, 2]} height={2} />
          <Block color={'#b6253a'} position={[2, 1, 0]} height={2} depth={0.5} />
          <Block color={'#4991c0'} position={[2, 1, 2.5]} height={2} depth={0.5}/>
          <Block color={'#e0b139'} position={[2, 1, 1]}/>
        </Canvas>
      </CanvasHolder>
    </Holder>
  )
};

export default Blocks;
