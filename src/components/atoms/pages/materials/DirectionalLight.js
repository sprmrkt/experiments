import React, {useRef} from 'react';
import {useFrame} from "@react-three/fiber";
import {PivotControls} from '@react-three/drei'

function DirectionalLight() {
  const ref = useRef()
//  useFrame((state) => (ref.current.rotation.x = state.clock.elapsedTime)) //Moving Components
  return (
      <group ref={ref}>
        <directionalLight color="red" position={[0, 0, 5]} />
      </group>
  )
}

export default DirectionalLight;
//  <rectAreaLight width={15} height={100} position={[20, 20, -7]} intensity={0.5} onUpdate={(self) => self.lookAt(0, 0, 0)} />
