import React, {useEffect, useRef, useState} from 'react';
import {useExplainerStore} from "../../../../utils/myStore";
import {Cylinder} from "@react-three/drei";
import {Interactive} from "@react-three/xr";
import {useFrame} from "@react-three/fiber";

const nextPos = [
  [0, 0, -7],
  [-1, 3, -7],
  [10, 5, 4],
  [-10, 5, 4],
  [-10, 15, 4],
  [0, 15, 4],
  [10, 15, 4],
  [0, 0, 0],
]

const prevPos = [
  [0, 3, 10],
  [-1.25, -10, -7],
  [-2, 6, -3],
  [0, 5, 4],
  [10, 5, 4],
  [-10, 5, 4],
  [-10, 15, 4],
  [0, 15, 4],
]


function XRButtons() {
  const next = useRef(null)
  const prev = useRef(null)
  const scene = useExplainerStore((state) => state.scene)
  const increaseScene = useExplainerStore((state) => state.increaseScene)
  const decreaseScene = useExplainerStore((state) => state.decreaseScene)
  const [nextHover, setNextHover] = useState(false);
  const [prevHover, setPrevHover] = useState(false);

  useEffect(() => {
    if(next.current) {
      next.current.position.x = nextPos[scene][0]
      next.current.position.y = nextPos[scene][1]
      next.current.position.z = nextPos[scene][2]
      prev.current.position.x = prevPos[scene][0]
      prev.current.position.y = prevPos[scene][1]
      prev.current.position.z = prevPos[scene][2]
    }
  }, [scene]);

  useFrame(({clock}) => {
    next.current.scale.x = Math.sin(clock.getElapsedTime() * 2) * 0.1 + 1
    next.current.scale.y = Math.sin(clock.getElapsedTime() * 2) * 0.1 + 1
    next.current.scale.z = Math.sin(clock.getElapsedTime() * 2) * 0.1 + 1
    prev.current.scale.x = Math.sin(clock.getElapsedTime() * 2) * 0.1 + 1
    prev.current.scale.y = Math.sin(clock.getElapsedTime() * 2) * 0.1 + 1
    prev.current.scale.z = Math.sin(clock.getElapsedTime() * 2) * 0.1 + 1
  })

  return (
    <group>
      <Interactive onSelect={increaseScene} onHover={() => setNextHover(true)} onBlur={() => setNextHover(false)}>
        <Cylinder ref={next} args={[1.75,1.75,0.125,32]} rotation={[Math.PI/2,0,0]}>
          <meshStandardMaterial color={nextHover ? '#deffc7' : '#b8fd6e'} transparent opacity={0.9}/>
        </Cylinder>
      </Interactive>
      <Interactive onSelect={decreaseScene} onHover={() => setPrevHover(true)} onBlur={() => setPrevHover(false)}>
        <Cylinder ref={prev} args={[0.75,0.75,0.125,32]} rotation={[Math.PI/2,0,0]}>
          <meshStandardMaterial color={prevHover ? '#f3a6bd' : '#fd6291'} transparent opacity={0.4}/>
        </Cylinder>
      </Interactive>
    </group>
  )
}

export default XRButtons;