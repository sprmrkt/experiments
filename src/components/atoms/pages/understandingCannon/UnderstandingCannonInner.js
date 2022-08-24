import React, {useRef} from 'react';
import Ball from "./Ball";
import * as THREE from 'three';
import Boxes from "./Boxes";

const normalMat = new THREE.MeshNormalMaterial()
const redMat = new THREE.MeshStandardMaterial({color: 'red'})
const boxGeo = new THREE.BoxBufferGeometry(0.5, 0.5, 0.5)

function UnderstandingCannonInner() {
  const ballRef = useRef(null)

  return (
    <>
      <group>
        <Ball ref={ballRef} mat={normalMat}/>
        <Boxes ballRef={ballRef} mat={normalMat} geo={boxGeo} count={50} restLength={4}/>
        <Boxes ballRef={ballRef} mat={redMat} geo={boxGeo} count={50} restLength={2}/>
      </group>
    </>
  )
}

export default UnderstandingCannonInner;