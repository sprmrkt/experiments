import React from 'react';
import {Helix} from "./shapes/Helix";
import * as THREE from "three";
import StackHolder from "./StackHolder";
import {RigidBody} from "@react-three/rapier";
import {Arc} from "./shapes/Arc";
import {Arch} from "./shapes/Arch";
import {Lozenger} from "./shapes/Lozenger";
import {PyramidShape} from "./shapes/Pyramid";
import {RectangleShape} from "./shapes/Rectangle";
import {Star} from "./shapes/Star";
import {Sphere} from "@react-three/drei";


// Materials
const red = new THREE.Color( 0xFE5030 ).convertSRGBToLinear();
const pink = new THREE.Color( 0xFAA8C0 ).convertSRGBToLinear();
const green = new THREE.Color( 0x478953 ).convertSRGBToLinear();
const yellow = new THREE.Color( 0xFED63F ).convertSRGBToLinear();
const white = new THREE.Color( 0xFFFFFF ).convertSRGBToLinear();
const redMat = new THREE.MeshStandardMaterial({color: red,})
const pinkMat = new THREE.MeshStandardMaterial({color: pink,})
const greenMat = new THREE.MeshStandardMaterial({color: green,})
const yellowMat = new THREE.MeshStandardMaterial({color: yellow,})

function ShapeStackInner() {
  return (
    <>
      <RigidBody colliders={"hull"}>
        <Helix mat={redMat}/>
      </RigidBody>
      <RigidBody colliders={"hull"}>
        <Arc mat={pinkMat}/>
      </RigidBody>
      <RigidBody colliders={"hull"}>
        <Arch mat={greenMat}/>
      </RigidBody>
      <RigidBody colliders={"hull"}>
        <Lozenger mat={yellowMat}/>
      </RigidBody>
      <RigidBody colliders={"hull"}>
        <PyramidShape mat={pinkMat}/>
      </RigidBody>
      <RigidBody colliders={"hull"}>
        <RectangleShape mat={greenMat}/>
      </RigidBody>
      <RigidBody colliders={"hull"}>
        <Star mat={yellowMat} position={[-4,0,0]}/>
      </RigidBody>
      <RigidBody colliders={"ball"}>
        <Sphere args={[2]}>
          <meshStandardMaterial color={red}/>
        </Sphere>
      </RigidBody>

      <RigidBody colliders={"hull"}>
        <Helix mat={yellowMat}/>
      </RigidBody>
      <RigidBody colliders={"hull"}>
        <Arc mat={greenMat}/>
      </RigidBody>
      <RigidBody colliders={"hull"}>
        <Arch mat={pinkMat}/>
      </RigidBody>
      <RigidBody colliders={"hull"}>
        <Lozenger mat={redMat}/>
      </RigidBody>
      <RigidBody colliders={"hull"}>
        <PyramidShape mat={redMat}/>
      </RigidBody>
      <RigidBody colliders={"hull"}>
        <RectangleShape mat={pinkMat}/>
      </RigidBody>
      <RigidBody colliders={"hull"}>
        <Star mat={redMat} position={[4,0,0]}/>
      </RigidBody>
      <RigidBody colliders={"ball"}>
        <Sphere args={[2]}>
          <meshStandardMaterial color={green}/>
        </Sphere>
      </RigidBody>

      <StackHolder/>
    </>
  )
}

export default ShapeStackInner;