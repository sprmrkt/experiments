import React, {useRef} from 'react';
import {Box} from "@react-three/drei";
import {RigidBody} from "@react-three/rapier";
import {useFrame} from "@react-three/fiber";
import {Euler, Quaternion} from "three";

function StackHolder() {

  const holder = useRef(null)

  useFrame(() => {
    const now = performance.now();
    if (holder.current) {
      const euler = new Euler(now / 5000, 0, 0);
      holder.current.setNextKinematicRotation(
        new Quaternion().setFromEuler(euler)
      );
    }

  })

  return (
    <group>
      <RigidBody ref={holder} type="kinematicPosition" friction={0}>
        <Box args={[20, 0.5, 20]} position={[0, -10, 0]}>
          <meshBasicMaterial color={'purple'} wireframe />
        </Box>
        <Box args={[20, 0.5, 20]} position={[0, 10, 0]}>
          <meshBasicMaterial color={'blue'} wireframe />
        </Box>
        <Box args={[20, 20, 0.5]} position={[0, 0, -10]}>
          <meshBasicMaterial color={'blue'} wireframe />
        </Box>
        <Box args={[20, 20, 0.5]} position={[0, 0, 10]}>
          <meshBasicMaterial color={'blue'} wireframe />
        </Box>
        <Box args={[0.5, 20, 20]} position={[10, 0, 0]}>
          <meshBasicMaterial color={'blue'} wireframe />
        </Box>
        <Box args={[0.5, 20, 20]} position={[-10, 0, 0]}>
          <meshBasicMaterial color={'blue'} wireframe />
        </Box>
      </RigidBody>
    </group>
  )
}

export default StackHolder;