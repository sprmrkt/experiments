import React, {forwardRef} from 'react';
import {useSphere} from "@react-three/cannon";
import {useFrame} from "@react-three/fiber";

const HeroNode = forwardRef((props, fwdRef) => {
  const [ref, api] = useSphere(() => ({ args: [0.05], type: 'Kinematic', ...props }), fwdRef)
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    api.position.set(Math.sin(t)/4, Math.cos(t)/4, Math.cos(t)/4)
  })
  return (
    <mesh ref={ref} material={props.mat} geometry={props.geo}/>
  )
})

export default HeroNode;


