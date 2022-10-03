import React from 'react';
import {Helix} from "./shapes/Helix";
import * as THREE from "three";
import StackHolder from "./StackHolder";
import {RigidBody} from "@react-three/rapier";


// Materials
const red = new THREE.Color( 0xFE5030 ).convertSRGBToLinear();
const pink = new THREE.Color( 0xFAA8C0 ).convertSRGBToLinear();
const green = new THREE.Color( 0x478953 ).convertSRGBToLinear();
const yellow = new THREE.Color( 0xFED63F ).convertSRGBToLinear();
const white = new THREE.Color( 0xFFFFFF ).convertSRGBToLinear();
const redMat = new THREE.MeshStandardMaterial({
  color: red,
})
function ShapeStackInner() {
  return (
    <>
      <RigidBody colliders={"hull"} restitution={0.8}>
        <Helix mat={redMat}/>
      </RigidBody>
      <StackHolder/>
    </>
  )
}

export default ShapeStackInner;