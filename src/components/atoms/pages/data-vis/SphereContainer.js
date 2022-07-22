import React from 'react';
import SpherePlane from "./SpherePlane";

const radius = 4

function SphereContainer() {

  return (
    <>
      <SpherePlane position={[radius, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />
      <SpherePlane position={[-radius, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
      <SpherePlane position={[0, 0, -radius]} rotation={[0, 0, 0]} />
      <SpherePlane position={[0, 0, radius]} rotation={[0, Math.PI, 0]} />
      <SpherePlane position={[0, radius, 0]} rotation={[Math.PI / 2, 0, 0]} />
      <SpherePlane position={[0, -radius, 0]} rotation={[-Math.PI / 2, 0, 0]} />
    </>
  )
}

export default SphereContainer;