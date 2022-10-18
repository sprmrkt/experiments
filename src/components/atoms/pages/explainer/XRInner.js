import React, {useRef} from 'react';
import {Controllers} from "@react-three/xr";
import DefaultDirectionalLight from "../../DefaultDirectionalLight";
import {Model as Static} from "./models/Ttc-explainer-poc-static";
import {useFrame} from "@react-three/fiber";
import {Box} from "@react-three/drei";
import XRActiveElements from "./XRActiveElements";
import PlayerRig from "./PlayerRig";
import XRButtons from "./XRButtons";

function XRInner() {



  return (
    <group>
      <Controllers />
      <ambientLight intensity={0.4} />
      <DefaultDirectionalLight />
      <group>
        <Static scale={25} />
        <XRActiveElements/>
        <PlayerRig/>
        <XRButtons/>
      </group>
    </group>
  )
}

export default XRInner;