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
import {Float} from "@react-three/drei";
import {useExplainerStore} from "../../../../utils/myStore";
import {useStore} from "zustand";

function XRActiveElements() {
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
  const scene = useExplainerStore((state) => state.scene)

  useFrame(({clock}) => {
    console.log(scene)
  })

  return (
    <group>
      <group ref={popup1} position={[-5, 1, 7]}><PopUp scale={25} /></group>
      <group ref={popup2} position={[15, 1, 7]}><PopUp scale={25} /></group>
      <group ref={popup3} position={[8, 7, 7]}><PopUp scale={25} /></group>
      <group ref={popup4} position={[2, 17, 7]}><PopUp scale={25} /></group>

      <group ref={headphones}><Headphones scale={25} /></group>
      <group ref={headset}><Float><Headset scale={25} position={[-0.25, 0, 0]} /></Float></group>

      <group ref={minilady}><MiniLady scale={25} position={[0, 0, 0]} /></group>
      <group ref={miniman}><MiniMan scale={25} position={[2, 0, 0]} /></group>
      <group ref={manhead} position={[-10, 11, 0]}><Float><ManHead scale={25} /></Float></group>
      <group ref={ladyhead} position={[10, 11, 0]}><Float><LadyHead scale={25} /></Float></group>

      <group ref={speech1} position={[14, 15, 6]}><Speech1 scale={25} /></group>
      <group ref={speech2} position={[-3.5, 6, 0]}><Speech2 scale={25} /></group>
      <group ref={speech3} position={[-14, 10.5, 6]}><Speech3 scale={25} /></group>
      <group ref={speech4} position={[-8, 4, 3]}><Speech4 scale={25} /></group>
    </group>
  )
}

export default XRActiveElements;