import React, {useRef} from 'react';
import {useFrame} from "@react-three/fiber";

function MovingLight() {
  const ref = useRef()
  useFrame((state) => (ref.current.rotation.x = state.clock.elapsedTime))
  return (
    <group ref={ref}>
      <rectAreaLight width={15} height={100} position={[20, 20, -7]} intensity={0.5} onUpdate={(self) => self.lookAt(0, 0, 0)} />
    </group>
  )
}

export default MovingLight;
