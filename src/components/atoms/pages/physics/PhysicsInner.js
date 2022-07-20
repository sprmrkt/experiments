import React from 'react';
import {Plane} from "@react-three/drei";
import {usePlane} from "@react-three/cannon";
import Balls from "./Balls";
import Boxes from "./Boxes";
import palettes from 'nice-color-palettes'

const palette = palettes[Math.floor(Math.random() * (palettes.length - 1))]

function PhysicsInner() {
  const [planeRef] = usePlane(() => ({ mass: 0, rotation: [-Math.PI / 2, 0, 0] }))

  return (
    <>
      <Balls palette={palette}/>
      <Boxes palette={palette}/>
      <Plane ref={planeRef} receiveShadow args={[10,10]}>
        <meshStandardMaterial color={palette[Math.floor(Math.random() * (palette.length - 1))]} metalness={0.3} roughness={0.4} />
      </Plane>
    </>
  )
}

export default PhysicsInner;