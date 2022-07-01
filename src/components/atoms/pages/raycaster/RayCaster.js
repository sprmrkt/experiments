import React from 'react';

function RayCaster() {
  return (
    <>
      <mesh position={[-2, 0, 0]}>
        <sphereBufferGeometry args={[0.5, 16, 16]} />
        <meshBasicMaterial color={'#ff0000'} />
      </mesh>
      <mesh>
        <sphereBufferGeometry args={[0.5, 16, 16]} />
        <meshBasicMaterial color={'#ff0000'} />
      </mesh>
      <mesh position={[2, 0, 0]}>
        <sphereBufferGeometry args={[0.5, 16, 16]} />
        <meshBasicMaterial color={'#ff0000'} />
      </mesh>
    </>
  )
}

export default RayCaster;