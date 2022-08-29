import React from 'react';
import {useScroll} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import * as THREE from "three";

function CameraRig() {
  const data = useScroll()

  useFrame((state) => {
    const r1 = data.range(0, 0.1)
    const r2 = data.range(0.6, 0.1)
    const r3 = data.range(0.7, 0.1)
    const r4 = data.range(0.9, 0.1)
    if(r1 < 1) {
      state.camera.position.z = THREE.MathUtils.lerp(5, 8, r1)
    } else if(r2 < 1) {
      state.camera.position.z = THREE.MathUtils.lerp(8, 1, r2)
    } else if(r3 < 1) {
      state.camera.position.z = THREE.MathUtils.lerp(1, 8, r3)
    } else if(r4 < 1) {
      state.camera.position.y = THREE.MathUtils.lerp(0, -2, r4)
    }
  })

  return null;
}

export default CameraRig;