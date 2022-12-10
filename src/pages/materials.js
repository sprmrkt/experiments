import React from "react";
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import CanvasHolder from "../components/atoms/CanvasHolder";
import {Canvas} from "@react-three/fiber";
import {Environment, MeshReflectorMaterial, OrbitControls,TransformControls,Plane} from "@react-three/drei";

import DefaultDirectionalLight from "../components/atoms/DefaultDirectionalLight";
import {useWindowSize} from "react-use";
import BlocksModel from "../components/atoms/pages/blocks/BlocksModel"; //Is this used?
import {Model} from "../components/atoms/pages/materials/Suzanne";
import {LightRig} from "../components/atoms/pages/materials/LightRig";

import DirectionalLight from "../components/atoms/pages/materials/DirectionalLight";//NEW
import Controls from "../components/atoms/pages/materials/Controls";//NEW
import {Entity} from "../components/atoms/pages/materials/Entity";//NEW
import {cicularPosition,degtorad} from "../components/atoms/cFunctions"//NEW

import * as THREE from 'three'
import plasterColor from "../assets/materials/white-rough-plaster/white_rough_plaster_diff_1k.jpg";
import plasterDisp from "../assets/materials/white-rough-plaster/white_rough_plaster_disp_1k.png";
import plasterRough from "../assets/materials/white-rough-plaster/white_rough_plaster_rough_1k.jpg";
// import plasterNormal from "../assets/materials/white-rough-plaster/white_rough_plaster_nor_gl_1k.exr";

const Holder = styled.div`
  background-color: #d0d0d0;
`;
//No duplicates of object names and material name combination
const materials = [
  { //1 "rabbit"
    title:"MeshPhysicalMaterial",
    mat:
    new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#bb2082').convertSRGBToLinear(),
      roughness: 0,
      clearcoat: 1,
      clearcoatRoughness: 0,
          transmission: 1,
          emissive: "#600000",
          envMapIntensity: 20,
              metalness: 0.75,
      flatShading:false
    })
  },
  { //2 "monkey",
    title:"MeshPhysicalMaterial",
    mat:
    new THREE.MeshStandardMaterial({
      color: new THREE.Color('#bb2082').convertSRGBToLinear(),
      roughness: 0,
      clearcoat: 1,
      clearcoatRoughness: 0,
          transmission: 1,
          emissive: "#600000",
          envMapIntensity: 20,
              metalness: 0.75,
      flatShading:false
    })
  },
  { //3 "horseshoe"
    title:"MeshPhysicalMaterial",
    mat:
    new THREE.MeshStandardMaterial({
      color: new THREE.Color('#bb2082').convertSRGBToLinear(),
      roughness: 0,
      clearcoat: 1,
      clearcoatRoughness: 0,
          transmission: 1,
          emissive: "#600000",
          envMapIntensity: 20,
              metalness: 0.75,
      flatShading:false
    })
  },
  { //4 ,"cube",
    title:"MeshPhysicalMaterial",
    mat:
    new THREE.MeshStandardMaterial({
      color: new THREE.Color('#bb2082').convertSRGBToLinear(),
      roughness: 0,
      clearcoat: 1,
      clearcoatRoughness: 0,
          transmission: 1,
          emissive: "#600000",
          envMapIntensity: 20,
              metalness: 0.75,
      flatShading:false
    })
  },
  { //5 ,"rabbit",
    title:"MeshStandardMaterial",
    mat:
    new THREE.MeshStandardMaterial({
      color: new THREE.Color('#bb2082').convertSRGBToLinear(),
      roughness: 0,
      clearcoat: 1,
      clearcoatRoughness: 0,
          transmission: 1,
          emissive: "#600000",
          envMapIntensity: 20,
              metalness: 0.75,
      flatShading:false
    })
  },
  { //6 ,"monkey"
    title:"MeshStandardMaterial",
    mat:
    new THREE.MeshStandardMaterial({
      color: new THREE.Color('#bb2082').convertSRGBToLinear(),
      roughness: 0,
      clearcoat: 1,
      clearcoatRoughness: 0,
          transmission: 1,
          emissive: "#600000",
          envMapIntensity: 20,
              metalness: 0.75,
      flatShading:false
    })
  },
  { //7 "horseshoe"
    title:"MeshStandardMaterial",
    mat:
    new THREE.MeshStandardMaterial({
      color: new THREE.Color('#bb2082').convertSRGBToLinear(),
      roughness: 0,
      clearcoat: 1,
      clearcoatRoughness: 0,
          transmission: 1,
          emissive: "#600000",
          envMapIntensity: 20,
              metalness: 0.75,
      flatShading:false
    })
  },
  { //7 "cube"
    title:"MeshStandardMaterial",
    mat:
    new THREE.MeshStandardMaterial({
      color: new THREE.Color('#bb2082').convertSRGBToLinear(),
      roughness: 0,
      clearcoat: 1,
      clearcoatRoughness: 0,
          transmission: 1,
          emissive: "#600000",
          envMapIntensity: 20,
              metalness: 0.75,
      flatShading:false
    })
  }
]
var radius=5;
function Materials() {
  const objectArray=["rabbit","monkey","cube","horseshoe","rabbit","monkey","cube","horseshoe"]; //must be even number for perfectly spaced circle
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
          {/*<ambientLight intensity={0.75} />*/}
          <OrbitControls makeDefault/>
          {/*
            <Model position={[-2, -0.75, -2]} material={materials[0]} />
          <Model position={[-2, -0.75, 0]} material={materials[1]} />
          <Model position={[-2, -0.75, 2]} material={materials[2]} />

          <Model position={[0, -0.75, -2]} material={materials[3]} />
          <Model position={[0, -0.75, 0]} material={materials[4]} />
          <Model position={[0, -0.75, 2]} material={materials[5]} />

          <Model position={[2, -0.75, -2]} material={materials[6]} />
          <Model position={[2, -0.75, 0]} material={materials[7]} />
          <Model position={[2, -0.75, 2]} material={materials[8]} />
          <Model position={[4, -0.75, -2]} material={materials[0]} scale={[3,3,3]}/>
          */}

          {objectArray.map((arr,index) => (
               <Entity key={index} name={objectArray[index]+" "+materials[index].title} position={[cicularPosition(radius,degtorad((360/objectArray.length)*index)).x, -0.6, cicularPosition(radius,degtorad((360/objectArray.length)*index)).y]} rotation={[0,degtorad((360/objectArray.length)*index),0]}  mTitle={materials[index].title} material={materials[index].mat} scale={[1.5,1.5,1.5]}/>
             ))}

          <Controls/>
          {/*<pointLight position={[-30, -30, -30]} color="white" intensity={0.5} />*/}
          {/*<spotLight position={[50, 50, -30]} castShadow intensity={0.5}/>*/}
        <Environment preset="warehouse"  />
          <LightRig name="LightRig" radius={10}/>
          {/*<DirectionalLight/>*/}
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

/*REMOVED ELEMENTS BELOW*/
//
