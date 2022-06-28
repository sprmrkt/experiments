import React from "react";
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import CanvasHolder from "../components/atoms/CanvasHolder";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Point, Points} from "@react-three/drei";
import DefaultDirectionalLight from "../components/atoms/DefaultDirectionalLight";
import {useWindowSize} from "react-use";
import * as THREE from 'three'
import {useControls} from 'leva'

const Holder = styled.div`
`;


const controls = {
  count: {value: 10000, min: 1, max: 10000},
  size: {value: 0.01, min: 0.01, max: 1},
  radius: {value: 5, min: 0.01, max: 20},
  branches: {value: 3, min: 2, max: 20, step: 1},
  spin: {value: 1, min: 0, max: 5, step: 0.001},
  randomness: {value: 0.2, min: 0, max: 2, step: 0.001},
  randomnessPower: {value: 3, min: 1, max: 10, step: 0.001},
  insideColor: '#ba700f',
  outsideColor: '#0048ff',
}

function GalaxyGenerator() {
  const windowSize = useWindowSize()
  const {
    count,
    size,
    radius,
    branches,
    spin,
    randomness,
    randomnessPower,
    insideColor,
    outsideColor
  } = useControls(controls)

  return (
    <Holder>
      <Seo title="Galaxy Generator" />
      <CanvasHolder>
        <Canvas
          camera={{
            position: [0, 0, windowSize.width > 576 ? 20 : 15],
          }}>
          <axesHelper args={[5]} />
          <OrbitControls makeDefault />
          <ambientLight intensity={0.5} />
          <DefaultDirectionalLight />

          <group position={[0, 0, 0]}>
            <Points limit={10000}>
              <pointsMaterial
                size={size}
                sizeAttenuation={true}
                depthTest={false}
                transparent
                vertexColors
                blending={THREE.AdditiveBlending} />
              {Array.from({length: count}).map((_, i) => {
                const pointRadius = Math.random() * radius
                const spinAngle = pointRadius * spin
                const branchAngle = (i % branches) / branches * Math.PI * 2
                const rndX = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * pointRadius
                const rndY = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * pointRadius
                const rndZ = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * pointRadius
                const position = [Math.cos(branchAngle + spinAngle) * pointRadius + rndX, rndY, Math.sin(branchAngle + spinAngle) * pointRadius + rndZ]
                const color = new THREE.Color(insideColor).lerp(new THREE.Color(outsideColor), pointRadius / radius)
                return <Point
                  key={i}
                  position={position}
                  color={color}
                />
              })}
            </Points>
          </group>

        </Canvas>
      </CanvasHolder>
    </Holder>
  )
};

export default GalaxyGenerator
;
