import React, {useEffect, useRef, useState} from 'react';
import {Plane} from "@react-three/drei";
import {usePlane, useSpring} from "@react-three/cannon";
import palettes from 'nice-color-palettes'
import Ball from "./Ball";
import Box from "./Box";

const palette = palettes[2]

function UnderstandingCannonInner() {
  // const ballRef = useRef()
  // const boxRef = useRef()
  // const [planeRef] = usePlane(() => ({ mass: 0, rotation: [-Math.PI / 2, 0, 0] }))

  const [boxRef, ballRef, api] = useSpring(useRef(null), useRef(null), {
    damping: 1,
    restLength: 2,
    stiffness: 100,
  })
  const [isDown, setIsDown] = useState(false)

  useEffect(() => api.setRestLength(isDown ? 0 : 2), [isDown])

  return (
    <>
      <group onPointerDown={() => setIsDown(true)} onPointerUp={() => setIsDown(false)}>
        <Ball ref={ballRef} />
        <Box ref={boxRef} />
      </group>
      {/*<Plane ref={planeRef} receiveShadow args={[10,10]}>*/}
      {/*  <meshStandardMaterial color={palette[1]} metalness={0.3} roughness={0.4} />*/}
      {/*</Plane>*/}
    </>
  )
}

export default UnderstandingCannonInner;