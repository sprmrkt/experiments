import React from 'react';
import {useScroll} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import * as THREE from "three";

function CameraRig() {
  const data = useScroll()

  useFrame((state) => {
    const r1 = data.range(0.1, 0.3)
    const r2 = data.range(0.5, 0.3)
    if(r1 < 1) {
      state.camera.position.x = THREE.MathUtils.lerp(0, 0.95, r1)
    } else if(r2 < 1) {
      state.camera.position.x = THREE.MathUtils.lerp(0.95, 1.9, r2)
    }
  })

  return null;
}

export default CameraRig;