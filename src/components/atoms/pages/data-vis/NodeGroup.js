import React, {useRef} from 'react';
import * as THREE from "three";
import Node from "./Node";
import {useFrame} from "@react-three/fiber";
import Lines from "./Lines";

const radius = 8
const influence = 1 // 0 to 1

function NodeGroup(props) {
  const groupRef = useRef()
  useFrame(({clock}) => {
    const a = clock.getElapsedTime() * 0.1
    groupRef.current.rotation.y = a
  })

  let positions = []
  for (let i = 0; i < props.count; i++) {
    let randomDirection = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize()

    // Position with bias to the edge of the circle
    // https://stackoverflow.com/questions/29325069/how-to-generate-random-numbers-biased-towards-one-value-in-a-range
    let radius3 = Math.random() * radius;
    let mix = Math.random() * influence
    positions.push(randomDirection.multiplyScalar(radius3 * (1 - mix) + radius * mix))
  }

  return (
    <group ref={groupRef}>
      {positions.map((position, i) => {
        return <Node
          key={i}
          i={i}
          position={position}
          geometry={props.geometry}
          material={props.material}
          hero={props.hero}
          whiteMaterial={props.whiteMaterial}/>
      })}
      {props.hero && <Lines positions={positions}/>}
    </group>
  )
}

export default NodeGroup;