import React from 'react';
import MyParticle from "./MyParticle";
import palettes from 'nice-color-palettes'
import SphereContainer from "./SphereContainer";
import {useScroll} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import * as THREE from "three";

const palette = palettes[1]


const baseParticles = 100;
const secondaryParticles = 100;
const heroParticles = 10;

function PhysicParticles() {
  const data = useScroll()

  useFrame((state) => {
    const a = data.range(0, 1/4)
    const b = data.range(1/4, 1/2)
    const c = data.range(1/2, 1)
    if(a < 1) {
      state.camera.position.z = THREE.MathUtils.lerp(15, 2, a)
    } else {
      state.camera.position.z = THREE.MathUtils.lerp(2, 15, b)
    }
    state.camera.position.y = THREE.MathUtils.lerp(0, -40, c)
  })

  return (
    <>
      <SphereContainer />
      {Array.from({length: baseParticles}).map((_, i) => {
        return <MyParticle key={i} color={palette[0]} />
      })}
      {Array.from({length: secondaryParticles}).map((_, i) => {
        return <MyParticle key={i} color={palette[1]} />
      })}
      {Array.from({length: heroParticles}).map((_, i) => {
        return <MyParticle key={i} color={palette[2]} hero />
      })}
    </>
  )
}

export default PhysicParticles;