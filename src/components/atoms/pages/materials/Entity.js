import React,{ Suspense, useState} from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import {useGLTF} from '@react-three/drei' //will these be used?
import { proxy, useSnapshot } from 'valtio' //Will this be used?
import { useControls } from 'leva'
import * as THREE from 'three'
import {randomNumber} from "../../cFunctions"//NEW

const modes = ['translate', 'rotate', 'scale']

const state = proxy({ current: null, mode: 0 })

export function Entity({ name, ...props }) {
  const snap = useSnapshot(state)
  const { nodes } = useGLTF('/materials/sample_forms_2.gltf')
  console.log("nodes",nodes);

  useControls(name ,{
   color: {
     value: 'rgb('+randomNumber(0,255)+','+randomNumber(0,255)+','+randomNumber(0,255)+')',
     onChange: (v) => {
       props.material.color = new THREE.Color(v)
     }
   },
   roughness: {
     value: randomNumber(0.00,0.5),
     onChange: (v) => {
       props.material.roughness =v
     }
   },
   clearcoat: {
     value: randomNumber(0.00,0.9),
     onChange: (v) => {
       props.material.clearcoat =v
     }
   },
   clearcoatRoughness: {
     value: randomNumber(0.00,0.09),
     onChange: (v) => {
       props.material.clearcoatRoughness =v
     }
   },
   transmission: {
     value: 0,
     onChange: (v) => {
       props.material.transmission =v
     }
   },
   emissive: {
     value: 'rgb('+randomNumber(0,255)+','+randomNumber(0,255)+','+randomNumber(0,255)+')',
     onChange: (v) => {
       props.material.emissive =new THREE.Color(v)
     }
   },
   envMapIntensity: {
     value:  randomNumber(0.01,1.00),
     onChange: (v) => {
       props.material.envMapIntensity =v
     }
   },
   metalness: {
     value:  randomNumber(0,5),
     onChange: (v) => {
       props.material.metalness =v
     }
   },
   flatShading: {
     value: false,
     onChange: (v) => {
       props.material.flatShading =v
     }
   },
 })

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes[name.split(" ")[0]].geometry} material={props.material} />
    </group>
  )
}

 //useGLTF.preload('/materials/sample_forms.glb')
