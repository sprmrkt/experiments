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
import * as THREE from 'three'

const Holder = styled.div`
  background-color: #d0d0d0;
`;

const materials = [
  new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#bb86a1').convertSRGBToLinear(),
    roughness: 0,
    clearcoat: 1,
    clearcoatRoughness: 0,
  })
]

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
          <axesHelper args={[5]} />
          <ambientLight intensity={0.5} />
          <OrbitControls />

          <Model position={[0, -0.75, 0]} material={materials[0]}/>

          <pointLight position={[-10, -10, -10]} color="white" intensity={1} />
          <spotLight position={[50, 50, -30]} castShadow />
          <Environment preset="warehouse" />
          <MovingLight />
        </Canvas>
      </CanvasHolder>
    </Holder>
  )
};

export default Materials;
