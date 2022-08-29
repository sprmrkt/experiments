import React from 'react';
import {useSphere, useSpring} from "@react-three/cannon";
import {Instance} from "@react-three/drei";

const Node = (props) => {
  const args = [0.05]
  const [ref] = useSphere(
    () => ({
      args,
      linearDamping: 0.1,
      mass: 1,
      position: [(Math.random() - 0.5) * props.restLength, (Math.random() - 0.5) * props.restLength, 0],
    })
  )

  useSpring(ref, props.anchorRef, {
    damping: 50,
    restLength: props.restLength,
    stiffness: 50,
  }, [props.restLength])

  return (
    <Instance ref={ref}/>
  )
}

export default Node