import React from "react";
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import CanvasHolder from "../components/atoms/CanvasHolder";
import {Canvas} from "@react-three/fiber";
import {Environment, MeshReflectorMaterial, OrbitControls, Plane, ScrollControls} from "@react-three/drei";
import DefaultDirectionalLight from "../components/atoms/DefaultDirectionalLight";
import {useWindowSize} from "react-use";
import BlocksModel from "../components/atoms/pages/blocks/BlocksModel";
import {Model} from "../components/atoms/pages/materials/Suzanne";
import MovingLight from "../components/atoms/pages/materials/MovingLight";
import * as THREE from 'three'
import plasterColor from "../assets/materials/white-rough-plaster/white_rough_plaster_diff_1k.jpg";
import plasterDisp from "../assets/materials/white-rough-plaster/white_rough_plaster_disp_1k.png";
import plasterRough from "../assets/materials/white-rough-plaster/white_rough_plaster_rough_1k.jpg";
// import plasterNormal from "../assets/materials/white-rough-plaster/white_rough_plaster_nor_gl_1k.exr";

const Holder = styled.div`
  background-color: #d0d0d0;
`;

const materials = [
  // Pink shiny plastic
  new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#bb2082').convertSRGBToLinear(),
    roughness: 0,
    clearcoat: 1,
    clearcoatRoughness: 0,
  }),
  // Pink shiny plastic
  new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#0a968e').convertSRGBToLinear(),
    roughness: 0,
    clearcoat: 1,
    clearcoatRoughness: 0,
  }),
  // Pink shiny plastic
  new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#bb9b1d').convertSRGBToLinear(),
    roughness: 0,
    clearcoat: 1,
    clearcoatRoughness: 0,
  }),
  // Frosted glass
  new THREE.MeshPhysicalMaterial({
    roughness: 0.8,
    transmission: 1,
    thickness: 1.5
  }),
  // Mid glass
  new THREE.MeshPhysicalMaterial({
    roughness: 0.5,
    transmission: 1,
    thickness: 1.5
  }),
  // Clear glass
  new THREE.MeshPhysicalMaterial({
    roughness: 0.07,
    transmission: 1,
    thickness: 1.5
  }),
  // Matt plastic
  new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#984b3a').convertSRGBToLinear(),
    roughness: 0.7,
  }),
  // Matt plastic
  new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#b3bb5f').convertSRGBToLinear(),
    roughness: 0.7,
  }),
  // Matt plastic
  new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#5d81ad').convertSRGBToLinear(),
    roughness: 0.7,
  }),
  // Texture
  new THREE.MeshPhysicalMaterial({
    // map: plasterColor,
    // displacementMap: plasterDisp,
    // roughnessMap: plasterRough,
    displacementScale: 0.5,
    toneMapped: false
  }),
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
          <ambientLight intensity={0.75} />
          <OrbitControls />

          <Model position={[-2, -0.75, -2]} material={materials[0]}/>
          <Model position={[-2, -0.75, 0]} material={materials[1]}/>
          <Model position={[-2, -0.75, 2]} material={materials[2]}/>

          <Model position={[0, -0.75, -2]} material={materials[3]}/>
          <Model position={[0, -0.75, 0]} material={materials[4]}/>
          <Model position={[0, -0.75, 2]} material={materials[5]}/>

          <Model position={[2, -0.75, -2]} material={materials[6]}/>
          <Model position={[2, -0.75, 0]} material={materials[7]}/>
          <Model position={[2, -0.75, 2]} material={materials[8]}/>

          <Model position={[4, -0.75, -2]} material={materials[9]}/>

          {/*<pointLight position={[-30, -30, -30]} color="white" intensity={0.5} />*/}
          {/*<spotLight position={[50, 50, -30]} castShadow intensity={0.5}/>*/}
          <Environment preset="warehouse" />
          <MovingLight />

          <mesh position={[0, -0.6, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
              blur={[400, 100]}
              resolution={1024}
              mixBlur={1}
              mixStrength={15}
              depthScale={2}
              minDepthThreshold={0.85}
              color="#151515"
              metalness={0.6}
              roughness={1}
              mirror={1}
            />
          </mesh>
        </Canvas>
      </CanvasHolder>
    </Holder>
  )
};

export default Materials;
