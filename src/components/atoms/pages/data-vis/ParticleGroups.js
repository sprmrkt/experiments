import React, {useCallback, useMemo} from 'react';
import {Float, Point, Points, useTexture} from "@react-three/drei";
import * as THREE from "three";
import {useControls} from "leva";
import palettes from 'nice-color-palettes'
import ParticleMaterial from "./ParticleMaterial";

const palette = palettes[0]

const radius = 8
const influence = 1 // 0 to 1

const controls = {
  count: {value: 300, min: 2, max: 1000},
}

function ParticleGroups() {
  const {
    count,
  } = useControls(controls)

  let positions = []
  for (let i = 0; i < count; i++) {
    let randomDirection = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize()

    // Position with bias to the edge of the circle
    // https://stackoverflow.com/questions/29325069/how-to-generate-random-numbers-biased-towards-one-value-in-a-range
    let radius3 = Math.random() * radius;
    let mix = Math.random() * influence
    positions.push(randomDirection.multiplyScalar(radius3 * (1 - mix) + radius * mix))
  }

  const lineGeometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(positions), [positions])

  // const onUpdate = useCallback(self => self.setFromPoints(particlePositions), [particlePositions])

  return (
    <Float
      speed={2} // Animation speed, defaults to 1
      rotationIntensity={5} // XYZ rotation intensity, defaults to 1
      floatIntensity={1}>
      <group>
        <Points limit={controls.count.max}>
          <ParticleMaterial />
          {positions.map((position, i) => {
            return <Point
              key={i}
              position={position}
              color={palette[0]}
            />
          })}
        </Points>
      </group>
      <group>
        <Points limit={controls.count.max}>
          <ParticleMaterial/>
          {Array.from({length: count}).map((_, i) => {
            let randomDirection = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize()

            // Position with bias to the edge of the circle
            // https://stackoverflow.com/questions/29325069/how-to-generate-random-numbers-biased-towards-one-value-in-a-range
            let radius3 = Math.random() * radius;
            let mix = Math.random() * influence
            let position = randomDirection.multiplyScalar(radius3 * (1-mix) + radius * mix)

            return <Point
              key={i}
              position={position}
              color={palette[2]}
            />
          })}
        </Points>
      </group>
    </Float>
  )
}

export default ParticleGroups;