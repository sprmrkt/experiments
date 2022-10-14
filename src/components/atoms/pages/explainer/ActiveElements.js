import React, {useRef} from 'react';
import {Model as PopUp} from "./models/Ttc-explainer-poc-pop-up";
import {Model as Headphones} from "./models/Ttc-explainer-poc-headphones";
import {Model as Headset} from "./models/Ttc-explainer-poc-headset";
import {Model as LadyHead} from "./models/Ttc-explainer-poc-lady-head";
import {Model as ManHead} from "./models/Ttc-explainer-poc-man-head";
import {Model as MiniMan} from "./models/Ttc-explainer-poc-mini-man";
import {Model as MiniLady} from "./models/Ttc-explainer-poc-mini-lady";
import {Model as Speech1} from "./models/Ttc-explainer-poc-speech1";
import {Model as Speech2} from "./models/Ttc-explainer-poc-speech2";
import {Model as Speech3} from "./models/Ttc-explainer-poc-speech3";
import {Model as Speech4} from "./models/Ttc-explainer-poc-speech4";
import {useFrame} from "@react-three/fiber";
import {Box, Float, Sphere, useScroll} from "@react-three/drei";
import * as THREE from "three";

function ActiveElements() {
  // const basketball = useRef(null)
  const popup1 = useRef(null)
  const popup2 = useRef(null)
  const popup3 = useRef(null)
  const popup4 = useRef(null)
  const headphones = useRef(null)
  const headset = useRef(null)
  const minilady = useRef(null)
  const miniman = useRef(null)
  const ladyhead = useRef(null)
  const manhead = useRef(null)
  const speech1 = useRef(null)
  const speech2 = useRef(null)
  const speech3 = useRef(null)
  const speech4 = useRef(null)
  const polygon = useRef(null)
  const data = useScroll()

  useFrame(({clock}) => {
  //   const r1 = data.range(0,0.1)
  //   const r2 = data.range(0.2,0.2)
  //   const r3 = data.range(0.6,0.2)
    polygon.current.rotation.y = clock.getElapsedTime() * -2
    polygon.current.position.y = Math.sin(clock.getElapsedTime()* 0.5) * 2
  //
  //   popup1.current.position.x = THREE.MathUtils.lerp(-2, 0, r1)
  //   popup2.current.position.y = THREE.MathUtils.lerp(2, 0, r2)
  //   popup3.current.position.x = THREE.MathUtils.lerp(2, 0, r3)
  })

  return (
    <group>
      <group ref={popup1}><Float><PopUp scale={25} position={[0,0,1]}/></Float></group>
      <group ref={popup2}><Float><PopUp scale={25} position={[20,1,2]}/></Float></group>
      <group ref={popup3}><Float><PopUp scale={25} position={[13,7,2]}/></Float></group>
      <group ref={popup4}><Float><PopUp scale={25} position={[8,17,2]}/></Float></group>

      <group ref={headphones}><Headphones scale={25} position={[0,0,0]}/></group>
      <group ref={headset}><Float><Headset scale={25} position={[-0.25,0,0]}/></Float></group>
      <group ref={polygon}><Box args={[2,2,2]} position={[0,15,0]} rotation={[0, Math.PI/4, 0]}><meshStandardMaterial color={'#F02929'} flatShading={true}/></Box></group>

      <group ref={minilady}><MiniLady scale={25} position={[0,0,0]}/></group>
      <group ref={miniman}><MiniMan scale={25} position={[0,0,0]}/></group>
      <group ref={manhead}><Float><ManHead scale={25} position={[0,1,0]}/></Float></group>
      <group ref={ladyhead}><Float><LadyHead scale={25} position={[0,1,0]}/></Float></group>

      <group ref={speech1}><Speech1 scale={25} position={[0,0,0]}/></group>
      <group ref={speech2}><Speech2 scale={25} position={[0,0,0]}/></group>
      <group ref={speech3}><Speech3 scale={25} position={[0,0,0]}/></group>
      <group ref={speech4}><Speech4 scale={25} position={[0,0,0]}/></group>
    </group>
  )
}

export default ActiveElements;