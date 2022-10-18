import React, {useEffect, useRef, useState} from 'react';
import {useExplainerStore} from "../../../../utils/myStore";
import {Box, Sphere} from "@react-three/drei";
import {Interactive} from "@react-three/xr";
import {useFrame} from "@react-three/fiber";

const nextPos = [
  [2, -15, -10],
  [2, 5, -10],
  [10, 5, 6],
  [-10, 5, 6],
  [-10, 12, 6],
  [0, 15, 6],
  [10, 15, 6],
  [0, 0, 0],
]

const prevPos = [
  [2, 3, 10],
  [2, 3, -10],
  [-2.5, 6, -5],
  [0, 5, 3],
  [10, 5, 6],
  [-10, 5, 6],
  [-10, 15, 6],
  [0, 15, 6],
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
    next.current.position.x = nextPos[scene][0]
    next.current.position.y = nextPos[scene][1]
    next.current.position.z = nextPos[scene][2]
    prev.current.position.x = prevPos[scene][0]
    prev.current.position.y = prevPos[scene][1]
    prev.current.position.z = prevPos[scene][2]
  }, [scene]);

  return (
    <group>
      <Interactive onSelect={increaseScene} onHover={() => setNextHover(true)} onBlur={() => setNextHover(false)}>
        <Box ref={next}>
          <meshStandardMaterial color={nextHover ? 'pink' : 'white'} />
        </Box>
      </Interactive>
      <Interactive onSelect={decreaseScene} onHover={() => setPrevHover(true)} onBlur={() => setPrevHover(false)}>
        <Sphere ref={prev} args={[0.5]}>
          <meshStandardMaterial color={prevHover ? 'pink' : 'white'} />
        </Sphere>
      </Interactive>
    </group>
  )
}

export default XRButtons;