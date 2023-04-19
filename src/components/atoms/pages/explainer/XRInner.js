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
      <ambientLight intensity={0.5} />
      <hemisphereLight args={[3835902, 9568489, 1]} />
      <directionalLight
        intensity={0.5}
        color={'#ffffff'}
        castShadow
        position={[5, 10, 5]}
        shadow-mapSize={[1024 * 2, 1024 * 2]}
      />
      <directionalLight
        intensity={0.5}
        color={'#ffffff'}
        castShadow
        position={[-5, 10, -5]}
        shadow-mapSize={[1024 * 2, 1024 * 2]}
      />
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