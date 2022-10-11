import React from 'react';
import {useScroll} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import * as THREE from "three";
import {useWindowSize} from "react-use";

function CameraRig() {
  const data = useScroll()
  const size = useWindowSize()

  useFrame((state) => {
    const r0 = data.range(0, 0.1)
    const r1 = data.range(0.1, 0.3)
    const r2 = data.range(0.5, 0.3)
    if(r0 < 1) {
      state.camera.position.z = THREE.MathUtils.lerp(0, size.width > 576 ? 3.25 : 6, r0)
    } else if(r1 < 1) {
      state.camera.position.x = THREE.MathUtils.lerp(0, 0.95, r1)
    } else if(r2 < 1) {
      state.camera.position.x = THREE.MathUtils.lerp(0.95, 1.9, r2)
    }
  })

  return null;
}

export default CameraRig;