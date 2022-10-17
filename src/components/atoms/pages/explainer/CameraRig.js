import React from 'react';
import {useScroll} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import * as THREE from "three";
import {useWindowSize} from "react-use";

function CameraRig({scenes}) {
  const data = useScroll()
  const size = useWindowSize()

  useFrame((state) => {

    const ranges = []
    for (let i = 0; i < scenes * 2 - 1; i++) {
      ranges.push(data.range(i * (1 / (scenes * 2 - 1)),1 / (scenes * 2 - 1)))
    }
    const specialRotationRange = data.range( 1 / (scenes * 2 - 1) * 1.25,  1 / (scenes * 2 - 1) * 0.75)
    if(ranges[0] < 1) {
      state.camera.position.y = THREE.MathUtils.lerp(-20, 0, ranges[0])
    } else if(ranges[1] < 1) {
      state.camera.position.z = THREE.MathUtils.lerp(size.width > 576 ? -30 : -40, size.width > 576 ? 30 : 40, ranges[1])
      state.camera.position.x = THREE.MathUtils.lerp(-2, 0, ranges[1])
      state.camera.rotation.y = THREE.MathUtils.lerp(-Math.PI, 0, specialRotationRange)
    } else if(ranges[3] < 1) {
      state.camera.position.x = THREE.MathUtils.lerp(0, 10, ranges[3])
    } else if(ranges[5] < 1) {
      state.camera.position.x = THREE.MathUtils.lerp(10, -10, ranges[5])
    } else if(ranges[7] < 1) {
      state.camera.position.y = THREE.MathUtils.lerp(0, 10, ranges[7])
    } else if(ranges[9] < 1) {
      state.camera.position.x = THREE.MathUtils.lerp(-10, 0, ranges[9])
    } else if(ranges[11] < 1) {
      state.camera.position.x = THREE.MathUtils.lerp(0, 10, ranges[11])
    }
  })

  return null;
}

export default CameraRig;