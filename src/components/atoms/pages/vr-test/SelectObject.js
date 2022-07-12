import React, {useRef, useState} from 'react';
import {Interactive} from "@react-three/xr";
import {useFrame} from "@react-three/fiber";
import * as THREE from "three";
import {Text3D} from "@react-three/drei";

function SelectObject() {
  const [isSelected, setIsSelected] = useState(false)
  const ref = useRef();

  useFrame(({clock}) => {
    if (isSelected) {
      ref.current.position.y = (Math.sin(clock.getElapsedTime()) - 0.5) * 0.5
    }
  })

  return (
    <Interactive onSelect={() => setIsSelected(!isSelected)}>
      <mesh ref={ref} position={[8, 0, 0]}>
        <cylinderBufferGeometry args={[0.5, 0.5, 1, 24]} />
        <meshStandardMaterial color={isSelected ? '#ee755e' : '#e0b139'} />
      </mesh>
    </Interactive>
  )
}

export default SelectObject;