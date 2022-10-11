import React, {useRef} from 'react';
import {Model as Person} from "./models/Explainer-poc-person";
import {Model as BasketBall} from "./models/Explainer-poc-basketball";
import {Model as Blob} from "./models/Explainer-poc-blob";
import {Model as Star} from "./models/Explainer-poc-star";
import {Model as PopUp} from "./models/Explainer-poc-pop-up-1";
import {Model as PopUp2} from "./models/Explainer-poc-pop-up-2";
import {Model as PopUp3} from "./models/Explainer-poc-pop-up-3";
import {useFrame} from "@react-three/fiber";
import {useScroll} from "@react-three/drei";
import * as THREE from "three";

function ActiveElements() {
  const basketball = useRef(null)
  const popup1 = useRef(null)
  const popup2 = useRef(null)
  const popup3 = useRef(null)
  const data = useScroll()

  useFrame(({clock}) => {
    const r1 = data.range(0,0.1)
    const r2 = data.range(0.2,0.2)
    const r3 = data.range(0.6,0.2)
    basketball.current.rotation.y = clock.getElapsedTime() * 0.5
    basketball.current.position.y = Math.sin(clock.getElapsedTime()* 5) * 0.1 - 0.4

    popup1.current.position.x = THREE.MathUtils.lerp(-2, 0, r1)
    popup2.current.position.y = THREE.MathUtils.lerp(-2, 0, r2)
    popup3.current.position.x = THREE.MathUtils.lerp(2, 0, r3)
  })

  return (
    <group>
      <Person scale={10} position={[0,-0.5,0]}/>
      <Person scale={10} position={[1,-0.5,0]}/>
      <Person scale={10} position={[2,-0.5,0]}/>
      <group ref={basketball} position={[-0.3,-0.5,-0.25]}><BasketBall scale={10}/></group>
      <Blob scale={10} position={[-1,-0.5,0]}/>
      <Star scale={10} position={[0,-0.5,0]}/>
      <group ref={popup1}><PopUp scale={10} position={[-1,-0.5,0]}/></group>
      <group ref={popup2}><PopUp2 scale={10} position={[-1,-0.5,0]}/></group>
      <group ref={popup3}><PopUp3 scale={10} position={[-0.75,-0.5,0]}/></group>
    </group>
  )
}

export default ActiveElements;