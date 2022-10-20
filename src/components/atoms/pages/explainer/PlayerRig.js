import React, {useEffect} from 'react';
import {useScroll} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import * as THREE from "three";
import {useWindowSize} from "react-use";
import {useExplainerStore} from "../../../../utils/myStore";
import {useXR} from "@react-three/xr";

const playerPos = [
  [0, -15, -22],
  [0, 5, -22],
  [0, 5, 17],
  [10, 5, 17],
  [-10, 5, 17],
  [-10, 13, 17],
  [0, 13, 17],
  [10, 13, 17],
]

function PlayerRig() {
  const scene = useExplainerStore((state) => state.scene)
  const { player, isPresenting } = useXR()

  // useEffect(() => {
  //   player.rotation.y = Math.PI
  // });

  useEffect(() => {
    if (isPresenting) {
      player.rotation.y = Math.PI
      player.position.x = playerPos[0][0]
      player.position.y = playerPos[0][1]
      player.position.z = playerPos[0][2]
    }
  }, [isPresenting])

  useFrame((state,delta ) => {
    let x = THREE.MathUtils.damp(player.position.x, playerPos[scene][0], 0.075, delta)
    let y = THREE.MathUtils.damp(player.position.y, playerPos[scene][1], 0.075, delta)
    let z = THREE.MathUtils.damp(player.position.z, playerPos[scene][2], 0.075, delta)
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