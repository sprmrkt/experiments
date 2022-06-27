import React, {useRef} from 'react';
import {useTexture} from "@react-three/drei";
import basecolor from "../../../../assets/cw-globe/color2.jpg";
import height from "../../../../assets/cw-globe/height2.jpg";
import clouds from "../../../../assets/cw-globe/clouds2.png";
import {useFrame} from "@react-three/fiber";
import Marker from "./Marker";
import {placeObjectOnSphere} from '../../../../utils/helpers';

function Globe() {
  const groupRef = useRef(null)
  // const cloudsRef = useRef(null)
  const textureProps = useTexture({
    map: basecolor,
    displacementMap: height,
  })
  const cloudsTexture = useTexture(clouds)

  useFrame(({clock}) => {
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.5
    // cloudsRef.current.rotation.y = clock.getElapsedTime() * -0.05
  })

  return (
    <group ref={groupRef}>
      <mesh castShadow receiveShadow scale={5}>
        <sphereBufferGeometry args={[1, 264, 264]} />
        <meshPhysicalMaterial
          {...textureProps}
          displacementScale={0.05}
          color={"#ffffff"}
          toneMapped={false}/>
      </mesh>
      {/*<mesh ref={cloudsRef} scale={5.5}>*/}
      {/*  <sphereBufferGeometry args={[1, 128, 128]} />*/}
      {/*  <meshBasicMaterial*/}
      {/*    transparent={true}*/}
      {/*    alphaMap={cloudsTexture}*/}
      {/*    color={"#790404"}*/}
      {/*    toneMapped={false}/>*/}
      {/*</mesh>*/}
      <Marker position={placeObjectOnSphere(33.8688, 151.2093, 5.3)} main/>
      <Marker position={placeObjectOnSphere(37.8136, 144.9631, 5.3)} main/>
      <Marker position={placeObjectOnSphere(1.3521, 103.8198, 5.3)} main/>
      <Marker position={placeObjectOnSphere(15.8688, 121.2093, 5.2)} />
      <Marker position={placeObjectOnSphere(45.8136, 50.9631, 5.2)} />
      <Marker position={placeObjectOnSphere(15.2521, 120.8198, 5.2)} />
      <Marker position={placeObjectOnSphere(120.8688, 30.2093, 5.2)} />
      <Marker position={placeObjectOnSphere(165.8136, 50.9631, 5.2)} />
      <Marker position={placeObjectOnSphere(189.3521, 90.8198, 5.2)} />
    </group>
  )
}

export default Globe;