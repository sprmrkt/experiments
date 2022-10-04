import React from 'react';
import {Box} from "@react-three/drei";
import {RigidBody} from "@react-three/rapier";

function StackHolder() {
  return (
    <>
      <RigidBody position={[0, -5, 0]} type="kinematicPosition">
        <Box args={[10, 0.5, 10]} >
          <meshBasicMaterial color={'purple'} />
        </Box>
      </RigidBody>
      <RigidBody position={[0, 5, 0]} type="kinematicPosition">
        <Box args={[10, 0.5, 10]} >
          <meshBasicMaterial color={'blue'} wireframe/>
        </Box>
      </RigidBody>
      <RigidBody position={[0, 0, -5]} type="kinematicPosition">
        <Box args={[10, 10, 0.5]} >
          <meshBasicMaterial color={'blue'} wireframe/>
        </Box>
      </RigidBody>
      <RigidBody position={[0, 0, 5]} type="kinematicPosition">
        <Box args={[10, 10, 0.5]} >
          <meshBasicMaterial color={'blue'} wireframe/>
        </Box>
      </RigidBody>
      <RigidBody position={[5, 0, 0]} type="kinematicPosition">
        <Box args={[0.5, 10, 10]} >
          <meshBasicMaterial color={'blue'} wireframe/>
        </Box>
      </RigidBody>
      <RigidBody position={[-5, 0, 0]} type="kinematicPosition">
        <Box args={[0.5, 10, 10]} >
          <meshBasicMaterial color={'blue'} wireframe/>
        </Box>
      </RigidBody>
    </>
  )
}

export default StackHolder;