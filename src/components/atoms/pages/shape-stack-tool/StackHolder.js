import React, {useRef} from 'react';
import {Box} from "@react-three/drei";
import {RigidBody, CuboidCollider} from "@react-three/rapier";
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
        <CuboidCollider args={[15, 1.5, 15]} position={[0, -15, 0]}/>
        <CuboidCollider args={[15, 1.5, 15]} position={[0, 15, 0]}/>
        <CuboidCollider args={[15, 15, 1.5]} position={[0, 0, -15]}/>
        <CuboidCollider args={[15, 15, 1.5]} position={[0, 0, 15]}/>
        <CuboidCollider args={[1.5, 15, 15]} position={[15, 0, 0]}/>
        <CuboidCollider args={[1.5, 15, 15]} position={[-15, 0, 0]}/>
      </RigidBody>
    </group>
  )
}

export default StackHolder;