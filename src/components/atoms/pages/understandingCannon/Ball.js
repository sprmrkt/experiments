import React, {forwardRef} from 'react';
import {useSphere} from "@react-three/cannon";
import {useFrame} from "@react-three/fiber";

const Ball = forwardRef((props, fwdRef) => {
  const [ref, { position }] = useSphere(() => ({ args: [0.5], type: 'Kinematic', ...props }), fwdRef)
  useFrame(({ mouse, viewport }) =>
    position.set((mouse.x * viewport.width) / 2, (mouse.y * viewport.height) / 2, 0),
  )
  return (
    <mesh ref={ref}>
      <sphereBufferGeometry args={[0.5, 64, 64]} />
      <meshNormalMaterial />
    </mesh>
  )
})

export default Ball;


