import React, {useRef} from 'react';
import {useScroll} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import * as THREE from "three";


const yellow = new THREE.MeshPhongMaterial({color: "#77c6e1", shininess: 100, transparent: true, opacity: 0.85})
const white = new THREE.MeshPhongMaterial({color: "#ffffff"})

function MyHero(props) {

  const ref = useRef()
  const outerRef = useRef()
  const innerRef = useRef()
  const data = useScroll()

  useFrame(({clock}) => {
    // Scroll ranges
    const r1 = data.range(0.2, 0.1)
    const r4 = data.range(0.55, 0.05)
    const r5 = data.range(0.7, 0.1)

    if (r1 < 1) {
      ref.current.scale.x = THREE.MathUtils.lerp(1, 2.5, r1)
      ref.current.scale.y = THREE.MathUtils.lerp(1, 2.5, r1)
      ref.current.scale.z = THREE.MathUtils.lerp(1, 2.5, r1)
    } else {
      outerRef.current.material.opacity = THREE.MathUtils.lerp(0.85, 0, r5)
      innerRef.current.material.opacity = THREE.MathUtils.lerp(1, 0, r5)
      ref.current.scale.x = THREE.MathUtils.lerp(2.5, 2, r5)
      ref.current.scale.y = THREE.MathUtils.lerp(2.5, 2, r5)
      ref.current.scale.z = THREE.MathUtils.lerp(2.5, 2, r5)
    }

  })
  return (
    <group>
      <group ref={ref}>
        <mesh ref={outerRef} geometry={props.geometry} material={yellow} />
        <mesh ref={innerRef} geometry={props.geometry} material={white} scale={0.1} />
      </group>
    </group>
  )
}

export default MyHero;