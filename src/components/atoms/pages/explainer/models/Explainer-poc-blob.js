/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/explainer/explainer-poc-blob.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.104993, 0.016257, -0.001842]} rotation={[-Math.PI / 2, 0, 0]} scale={0.001}>
        <group position={[108.35947, 2.6493, -0.143039]} scale={0.113792}>
          <mesh geometry={nodes.Blob_1.geometry} material={materials.Blob} rotation={[Math.PI / 2, 0, 0]} scale={10} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/explainer/explainer-poc-blob.glb')