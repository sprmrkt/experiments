import React, {useRef, useState} from 'react';
import {useFrame} from "@react-three/fiber";
import * as THREE from "three";
import {useScroll} from "@react-three/drei";
import {Physics} from "@react-three/cannon";

function PhysicsHolder({children}) {
  const ref = useRef(null)
  const data = useScroll()
  const [ zeroGravity, setZeroGravity ] = useState( true );
  useFrame(({clock}) => {

    const r1 = data.range(0, 0.1)
    const r2 = data.range(0, 0.4)
    const r3 = data.range(0.6, 0.4)
    if (r1 < 1) {
      ref.current.position.y = THREE.MathUtils.lerp(-2, 0, r1)
    }
    if (r2 < 1) {
      ref.current.rotation.y = THREE.MathUtils.lerp(0, Math.PI * 2, r2)
    } else if (r3 < 1) {
      ref.current.rotation.y = THREE.MathUtils.lerp(0, Math.PI * 2, r3)
    }

    const gravityTrigger = data.visible(0.9, 0.1)
    if (gravityTrigger && zeroGravity) {
      setZeroGravity(false)
    } else if (!gravityTrigger && !zeroGravity) {
      setZeroGravity(true)
    }

  })
  return (
    <Physics
      // allowSleep={true}
      broadphase={'SAP'}
      gravity={[0, zeroGravity ? 0 : 2, 0]}
      defaultContactMaterial={{friction: 0.1, restitution: 0.75}}>
      <group ref={ref}>
        {children}
      </group>
    </Physics>
  )
}

export default PhysicsHolder;