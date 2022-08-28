import React from 'react';
import {useScroll} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import * as THREE from "three";

function CameraRig() {
  const data = useScroll()

  useFrame((state) => {
    const r1 = data.range(0, 0.1)
    if(r1 < 1) {
      state.camera.position.z = THREE.MathUtils.lerp(5, 8, r1)
    }
  })

  return null;
}

export default CameraRig;