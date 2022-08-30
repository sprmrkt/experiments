import React, {useEffect, useRef, useState} from 'react';
import * as THREE from 'three';
import AnchorNode from "./AnchorNode";
import Nodes from "./Nodes";
import {useFrame} from "@react-three/fiber";
import {useScroll} from "@react-three/drei";
import PhysicsContainer from "./PhysicsContainer";

const grey = new THREE.Color( 0x2D2830 );
const purple = new THREE.Color( 0x6026F5 );
const secondaryC = new THREE.Color( 0x966C73 );
const tertiaryC = new THREE.Color( 0x9F713B );
const heroMat = new THREE.MeshStandardMaterial({color: grey, transparent: true, opacity: 0.5})
const heroMat2 = new THREE.MeshStandardMaterial({color: grey, transparent: true, opacity: 0.5})
const primaryMat = new THREE.MeshStandardMaterial({color: grey, transparent: true, opacity: 0.5})
const secondaryMat = new THREE.MeshStandardMaterial({color: grey, transparent: true, opacity: 0.5})
const tertiaryMat = new THREE.MeshStandardMaterial({color: grey, transparent: true, opacity: 0.5})
const blankMat = new THREE.MeshStandardMaterial({transparent: true, opacity: 0, wireframe: true})
const nodeGeo = new THREE.SphereBufferGeometry(0.05, 24, 24)

function UnderstandingCannonInner() {
  const heroAnchor = useRef(null)
  const secondaryAnchor = useRef(null)
  const tertiaryAnchor = useRef(null)
  const data = useScroll()
  const [ restLengthChanged, setRestLengthChanged ] = useState( false );

  useFrame(({clock}) => {
    const r2 = data.range(0.1, 0.1)
    const r3 = data.range(0.2, 0.1)
    const r4 = data.range(0.3, 0.1)
    const r5 = data.range(0.5, 0.1)
    const r6 = data.range(0.6, 0.1)
    const r7 = data.range(0.7, 0.1)
    const r8 = data.range(0.8, 0.1)
    const restLengthTrigger = data.visible(0.8, 0.2)

    if(r2 < 1) {
      heroMat.color.lerpColors(grey, purple, r2)
      heroMat.opacity = THREE.MathUtils.lerp(0.5, 1, r2)
      primaryMat.color.lerpColors(grey, purple, r2)
      primaryMat.opacity = THREE.MathUtils.lerp(0.5, 1, r2)
    } else if(r3 < 1) {
      secondaryMat.color.lerpColors(grey, purple, r3)
      secondaryMat.opacity = THREE.MathUtils.lerp(0.5, 1, r3)
      tertiaryMat.color.lerpColors(grey, purple, r3)
      tertiaryMat.opacity = THREE.MathUtils.lerp(0.5, 1, r3)
    } else if(r4 < 1) {
      secondaryMat.color.lerpColors(purple, secondaryC, r4)
      tertiaryMat.color.lerpColors(purple, tertiaryC, r4)
    } else if(r5 < 1) {
      secondaryMat.color.lerpColors(secondaryC, purple, r5)
      tertiaryMat.color.lerpColors(tertiaryC, purple, r5)
    } else if(r6 < 1) {
      primaryMat.opacity = THREE.MathUtils.lerp(1, 0.1, r6)
      secondaryMat.opacity = THREE.MathUtils.lerp(1, 0.1, r6)
      tertiaryMat.opacity = THREE.MathUtils.lerp(1, 0.1, r6)
    } else if(r7 < 1) {
      primaryMat.opacity = THREE.MathUtils.lerp(0.1, 1, r7)
      secondaryMat.opacity = THREE.MathUtils.lerp(0.1, 1, r7)
      tertiaryMat.opacity = THREE.MathUtils.lerp(0.1, 1, r7)
    } else if(r8 < 1) {
      secondaryMat.color.lerpColors(purple, secondaryC, r5)
      tertiaryMat.color.lerpColors(purple, tertiaryC, r5)
    }

    if( restLengthTrigger && !restLengthChanged ) {
      setRestLengthChanged(true)
    } else if( !restLengthTrigger && restLengthChanged ) {
      setRestLengthChanged(false)
    }

  })

  return (
    <>
      <AnchorNode ref={heroAnchor} mat={heroMat} geo={nodeGeo} hero/>
      <AnchorNode ref={secondaryAnchor} mat={blankMat} geo={nodeGeo} secondary/>
      <AnchorNode ref={tertiaryAnchor} mat={blankMat} geo={nodeGeo} tertiary/>

      <Nodes anchorRef={heroAnchor} mat={primaryMat} geo={nodeGeo} count={150} restLength={restLengthChanged ? 1 : 2.05} />
      <Nodes anchorRef={secondaryAnchor} mat={secondaryMat} geo={nodeGeo} count={150} restLength={restLengthChanged ? 3 : 2} />
      <Nodes anchorRef={tertiaryAnchor} mat={tertiaryMat} geo={nodeGeo} count={150} restLength={1.95} />

      <PhysicsContainer roof={false} yPos={-7} width={2} depth={0.25} height={4}/>
    </>
  )
}

export default UnderstandingCannonInner;