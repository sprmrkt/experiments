import React, {useRef, useState} from 'react';
import {Interactive} from "@react-three/xr";
import {useFrame} from "@react-three/fiber";
import * as THREE from "three";

function RotatingObject() {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef();

  useFrame(({clock}) => {
    if (isHovered) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.5
    }
  })

  return (
    <Interactive onHover={() => setIsHovered(true)}
                 onBlur={() => setIsHovered(false)}>
      <mesh ref={ref} position={[3, 0, -5]}>
        <torusBufferGeometry args={[0.6, 0.4, 24, 24]} />
        <meshStandardMaterial color={isHovered ? '#58c8fa' : '#fa5be5'} />
      </mesh>
    </Interactive>
  )
}

export default RotatingObject;