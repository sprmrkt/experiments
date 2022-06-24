import React, {useRef} from 'react';
import Globe from "./Globe";
import CwTypeModel from "./CwTypeModel";
import {useFrame} from "@react-three/fiber";

function GlobeGroup() {
  const globeGroupRef = useRef(null)

  useFrame(({clock}) => {
    globeGroupRef.current.position.y = (Math.sin(clock.getElapsedTime()) - 0.5) * 0.5
  })
  return (
    <group ref={globeGroupRef}>
      <Globe />
      <CwTypeModel scale={6} />
    </group>
  )
}

export default GlobeGroup;