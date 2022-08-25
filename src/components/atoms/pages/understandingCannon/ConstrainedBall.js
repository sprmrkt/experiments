import React, {forwardRef} from 'react';
import {useSphere} from "@react-three/cannon";

const ConstrainedBall = forwardRef((props, fwdRef) => {
  const [ref] = useSphere(() => ({
    args: [0.5],
    linearDamping: 0.7,
    mass: 1
  }), fwdRef)
  return (
    <mesh ref={ref} material={props.mat}>
      <sphereBufferGeometry args={[0.5, 64, 64]} />
    </mesh>
  )
})

export default ConstrainedBall;