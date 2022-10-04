/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Lozenger(props) {
  const { nodes } = useGLTF('/shape-stack-tool/lozenger2.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Lozenger.geometry} material={props.mat} position={[0,-9.8,1.55]} rotation={[0, 0, 0]} scale={0.04} />
    </group>
  )
}

useGLTF.preload('/lozenger.glb')
