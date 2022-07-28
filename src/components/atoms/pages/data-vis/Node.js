import React, {useRef} from 'react'
import {useFrame} from "@react-three/fiber"
import {useScroll} from "@react-three/drei"
import * as THREE from 'three'

function Node(props) {
  const ref = useRef()
  const outerRef = useRef()
  const innerRef = useRef()
  const rand = Math.random() / 10
  const data = useScroll()

  useFrame(({clock}) => {
    // Scroll ranges
    const r1 = data.range(0.2, 0.1)
    const r2 = data.range(0.3, 0.1)
    const r3 = data.range(0.4, 0.1)
    const r4 = data.range(0.55, 0.05)
    const r5 = data.range(0.7, 0.1)

    // Floatyness (The movement stops after r2 hence multiplying the value by 1-r2 at the end of each calculation)
    const a = clock.getElapsedTime() + props.i
    ref.current.position.y = (Math.sin(a) + rand) * (1 - r2)
    ref.current.position.x = ((Math.sin(a / 2) / 4) + rand) * (1 - r2)


    // Show Hero things
    if (props.hero) {
      ref.current.scale.x = THREE.MathUtils.lerp(1, 2.5, r1)
      ref.current.scale.y = THREE.MathUtils.lerp(1, 2.5, r1)
      ref.current.scale.z = THREE.MathUtils.lerp(1, 2.5, r1)
    } else {
      ref.current.scale.x = THREE.MathUtils.lerp(1, 0.3, r1)
      ref.current.scale.y = THREE.MathUtils.lerp(1, 0.3, r1)
      ref.current.scale.z = THREE.MathUtils.lerp(1, 0.3, r1)
    }

    // Fade out for hero particle
    if( r4 < 1 ) {
      outerRef.current.material.opacity = THREE.MathUtils.lerp(0.85, 0.3, r4)
      innerRef.current.material.opacity = THREE.MathUtils.lerp(1, 0.3, r4)
    } else {
      outerRef.current.material.opacity = THREE.MathUtils.lerp(0.3, 0.85, r5)
      innerRef.current.material.opacity = THREE.MathUtils.lerp(0.3, 1, r5)
    }

  })

  return (
    <group position={props.position}>
      <group ref={ref}>
        <mesh ref={outerRef} geometry={props.geometry} material={props.material} />
        <mesh ref={innerRef} geometry={props.geometry} material={props.whiteMaterial} scale={0.1} />
      </group>
    </group>
  )
}

export default Node;