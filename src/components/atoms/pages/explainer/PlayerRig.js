import React, {useEffect} from 'react';
import {useScroll} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import * as THREE from "three";
import {useWindowSize} from "react-use";
import {useExplainerStore} from "../../../../utils/myStore";
import {useXR} from "@react-three/xr";

const playerPos = [
  [0, -15, -20],
  [0, 5, -20],
  [0, 5, 15],
  [10, 5, 15],
  [-10, 5, 15],
  [-10, 13, 15],
  [0, 13, 15],
  [10, 13, 15],
]

function PlayerRig() {
  const scene = useExplainerStore((state) => state.scene)
  const { player } = useXR()

  useEffect(() => {
    player.rotation.y = Math.PI
  });

  useFrame((state, clock) => {
    player.position.x = playerPos[scene][0]
    player.position.y = playerPos[scene][1]
    player.position.z = playerPos[scene][2]
  })

  return null;
}

export default PlayerRig;