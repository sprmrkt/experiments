import React, {forwardRef} from 'react';
import {useSphere} from "@react-three/cannon";
import {useFrame} from "@react-three/fiber";

const Wind = (props) => {
  const [ref, api] = useSphere(() => ({ args: [0.5], type: 'Kinematic', ...props }))
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    api.position.set(Math.sin(t) * props.restLength, Math.cos(t) * props.restLength, 0.2)
  })
  return (
    <mesh ref={ref} geometry={props.geo}>
      <meshPhongMaterial color="#ff0000" opacity={0.5} transparent />
    </mesh>
  )
}

export default Wind;


