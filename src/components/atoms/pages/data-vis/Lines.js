import React, {useMemo, useRef} from 'react';
import * as THREE from "three";
import {useScroll} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";

function Lines(props) {
  const ref = useRef()
  const data = useScroll()
  const lineGeometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(props.positions), [props.positions])

  useFrame(({clock}) => {
    // Scroll ranges
    const r3 = data.range(0.4, 0.1)
    const r4 = data.range(0.55, 0.05)
    if( r3 < 1 ) {
      ref.current.material.opacity = THREE.MathUtils.lerp(0, 0.8, r3)
    } else {
      ref.current.material.opacity = THREE.MathUtils.lerp(0.8, 0, r4)
    }
  })
  return (
    <lineSegments ref={ref} geometry={lineGeometry}>
      <lineBasicMaterial color={'#838282'} attach="material" opacity={0} transparent />
    </lineSegments>
  )
}

export default Lines;