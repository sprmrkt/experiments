import React, {useRef} from 'react';
import {useFrame} from "@react-three/fiber";
import * as THREE from "three";
import {useScroll} from "@react-three/drei";

function PhysicsHolder({children}) {
  const ref = useRef(null)
  const data = useScroll()
  useFrame(({clock}) => {
    const t = clock.getElapsedTime()
    ref.current.rotation.y = t/4
    ref.current.rotation.x = t/-8

    const r1 = data.range(0, 0.1)
    if(r1 < 1) {
      ref.current.position.y = THREE.MathUtils.lerp(-2, 0, r1)
    }
  })
  return (
    <group ref={ref}>
      {children}
    </group>
  )
}

export default PhysicsHolder;