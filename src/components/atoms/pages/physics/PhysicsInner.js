import React, {useEffect} from 'react';
import {Plane, Sphere} from "@react-three/drei";
import {usePlane, useSphere} from "@react-three/cannon";
import {useFrame} from "@react-three/fiber";

function PhysicsInner() {
  const [sphereRef, sphereApi] = useSphere(() => ({ mass: 1, position: [0,3,0], args: [0.5] }))
  const [planeRef, planeApi] = usePlane(() => ({ mass: 0, rotation: [-Math.PI / 2, 0, 0] }))

  useEffect(() => {
    sphereApi.applyLocalForce([150,0,0], [0,0,0])
  });

  useFrame(({ clock }) => {
    // sphereApi.applyLocalForce([-1,0,0], [0,0,0])
  })

  return (
    <>
      <Sphere ref={sphereRef} args={[0.5,32,32]} castShadow>
        <meshStandardMaterial metalness={0.3} roughness={0.4} />
      </Sphere>
      <Plane ref={planeRef} receiveShadow args={[10,10]}>
        <meshStandardMaterial color={'#777777'} metalness={0.3} roughness={0.4} />
      </Plane>
    </>
  )
}

export default PhysicsInner;