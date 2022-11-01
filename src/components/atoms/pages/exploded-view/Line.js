import React, {useRef} from 'react'
import {useFrame} from "@react-three/fiber";
import * as THREE from "three";
import {QuadraticBezierLine} from "@react-three/drei";

//
// function Line({ start, end, v1 = new THREE.Vector3(), v2 = new THREE.Vector3() }) {
//   const ref = useRef()
//
//   useFrame(() => {
//     ref.current.setPoints(start.current.getWorldPosition(v1), end)
//   })
//
//   return <QuadraticBezierLine ref={ref} lineWidth={1} color="#ff2060" transparent/>
// }

const Line = React.forwardRef(({start, end, v1 = new THREE.Vector3(), v2 = new THREE.Vector3()} , ref) => {
  useFrame(() => {
    ref.current.setPoints(start, end)
  })

  return <QuadraticBezierLine ref={ref} lineWidth={1} color="#000000" transparent opacity={0}/>
});

export default Line;