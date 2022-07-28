import React, {useRef} from 'react';
import {useScroll} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import * as THREE from "three";

function WorldGroup({children}) {
  const ref = useRef()
  const data = useScroll()
  useFrame(({clock}) => {
    const r7 = data.range(0.9, 0.1)
    ref.current.rotation.y = THREE.MathUtils.lerp(0, Math.PI / 2, r7)
    ref.current.position.y = (Math.sin(clock.getElapsedTime()) - 0.5) * 0.5
  })

  return (
    <group ref={ref}>
      {children}
    </group>
  )
}

export default WorldGroup;