/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/materials/suzanne.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Suzanne.geometry} material={materials['default']} />
    </group>
  )
}

useGLTF.preload('/materials/suzanne.gltf')