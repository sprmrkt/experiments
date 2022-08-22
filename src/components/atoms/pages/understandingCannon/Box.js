import React, {forwardRef, useRef} from 'react';
import {useBox, useSpring} from "@react-three/cannon";

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
    restLength: 2,
    stiffness: 100,
  })

  return (
    <mesh ref={ref}>
      <boxBufferGeometry args={args} />
      <meshNormalMaterial />
    </mesh>
  )
}

export default Box