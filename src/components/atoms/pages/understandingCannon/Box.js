import React, {forwardRef} from 'react';
import {useBox} from "@react-three/cannon";

const Box = forwardRef((props, fwdRef) => {
  const args = [1, 1, 1]
  const [ref] = useBox(
    () => ({
      args,
      linearDamping: 0.7,
      mass: 1,
      ...props,
    }),
    fwdRef,
  )
  return (
    <mesh ref={ref}>
      <boxBufferGeometry args={args} />
      <meshNormalMaterial />
    </mesh>
  )
})

export default Box