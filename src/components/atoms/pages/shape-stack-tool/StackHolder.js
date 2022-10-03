import React from 'react';
import {Box} from "@react-three/drei";
import {RigidBody} from "@react-three/rapier";

function StackHolder() {
  return (
    <>
      <RigidBody position={[0, -2, 0]} type="kinematicPosition">
        <Box args={[20, 0.5, 20]} />
      </RigidBody>
    </>
  )
}

export default StackHolder;