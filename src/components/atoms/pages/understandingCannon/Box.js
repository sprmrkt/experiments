import React from 'react';
import {useBox, useSpring} from "@react-three/cannon";
import {Instance} from "@react-three/drei";

const Box = (props) => {
  const args = [0.5, 0.5, 0.5]
  const [ref] = useBox(
    () => ({
      args,
      linearDamping: 0.7,
      mass: 1,
    })
  )

  useSpring(ref, props.ballRef, {
    damping: 1,
    restLength: props.restLength,
    stiffness: 50,
  })

  return (
    // <mesh ref={ref} material={props.mat} geometry={props.geo}/>
    <Instance ref={ref}/>
  )
}

export default Box