import React from "react";
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import CanvasHolder from "../components/atoms/CanvasHolder";
import {Canvas} from "@react-three/fiber";
import {Environment, OrbitControls, Plane, ScrollControls} from "@react-three/drei";
import DefaultDirectionalLight from "../components/atoms/DefaultDirectionalLight";
import {useWindowSize} from "react-use";
import BlocksModel from "../components/atoms/pages/blocks/BlocksModel";
import {Model} from "../components/atoms/pages/materials/Suzanne";
import MovingLight from "../components/atoms/pages/materials/MovingLight";

const Holder = styled.div`
`;

function Materials() {

  return (
    <Holder>
      <Seo title="Materials" />
      <CanvasHolder>
        <Canvas
          shadows
          camera={{
            position: [0, 2, 10],
            fov: 30,
          }}>
          <axesHelper args={[5]}/>
          <ambientLight intensity={0.5} />
          <OrbitControls/>
          <Model position={[0,-0.75,0]}/>
          <spotLight position={[50, 50, -30]} castShadow />
          <Environment preset="warehouse" />
          <MovingLight/>
          <Plane args={[100,100]} position={[0,-0.75,0]} rotation={[-Math.PI/2,0,0]}/>
        </Canvas>
      </CanvasHolder>
    </Holder>
  )
};

export default Materials;
