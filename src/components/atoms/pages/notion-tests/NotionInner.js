import React, {useRef} from 'react';
import * as THREE from 'three';
import HeroNode from "./HeroNode";
import Nodes from "./Nodes";
import {useFrame} from "@react-three/fiber";
import {useScroll} from "@react-three/drei";

const grey = new THREE.Color( 0x2D2830 );
const purple = new THREE.Color( 0x6026F5 );
const greyMat = new THREE.MeshStandardMaterial({color: grey, transparent: true, opacity: 0.5})
const nodeGeo = new THREE.SphereBufferGeometry(0.05, 24, 24)

function UnderstandingCannonInner() {
  const ballRef = useRef(null)
  const data = useScroll()

  useFrame(({clock}) => {
    const r1 = data.range(0, 0.1)
    if(r1 < 1) {
      greyMat.color.lerpColors(grey, purple, r1)
    }
  })

  console.log(greyMat)

  return (
    <>
      <HeroNode ref={ballRef} mat={greyMat} geo={nodeGeo} />

      <Nodes ballRef={ballRef} mat={greyMat} geo={nodeGeo} count={150} restLength={2.05} />
      <Nodes ballRef={ballRef} mat={greyMat} geo={nodeGeo} count={150} restLength={2} />
      <Nodes ballRef={ballRef} mat={greyMat} geo={nodeGeo} count={150} restLength={1.95} />
    </>
  )
}

export default UnderstandingCannonInner;