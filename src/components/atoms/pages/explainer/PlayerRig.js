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

  useFrame((state,delta ) => {
    let x = THREE.MathUtils.damp(player.position.x, playerPos[scene][0], 0.1, delta)
    let y = THREE.MathUtils.damp(player.position.y, playerPos[scene][1], 0.1, delta)
    let z = THREE.MathUtils.damp(player.position.z, playerPos[scene][2], 0.1, delta)
    // let x = THREE.MathUtils.lerp(player.position.x, playerPos[scene][0], 0.001)
    // let y = THREE.MathUtils.lerp(player.position.y, playerPos[scene][1], 0.001)
    // let z = THREE.MathUtils.lerp(player.position.z, playerPos[scene][2], 0.001)
    // console.log(x,y,z)
    player.position.x = x
    player.position.y = y
    player.position.z = z
  })

  return null;
}

export default PlayerRig;