import React from 'react';
import {useScroll} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import * as THREE from "three";

function CameraRig() {
  const data = useScroll()

  useFrame((state) => {
    const r3 = data.range(0.4, 0.1)
    const r4 = data.range(0.55, 0.05)
    const r5 = data.range(0.7, 0.1)
    if(r3 < 1) {
      state.camera.position.z = THREE.MathUtils.lerp(15, 8, r3)
    } else if(r4 < 1) {
      state.camera.position.z = THREE.MathUtils.lerp(8, 4, r4)
    } else {
      state.camera.position.z = THREE.MathUtils.lerp(4, 20, r5)
    }
  })

  return null;
}

export default CameraRig;