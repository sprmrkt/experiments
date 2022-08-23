import React, {useRef} from 'react';
import Ball from "./Ball";
import Box from "./Box";
import * as THREE from 'three';

const normalMat = new THREE.MeshNormalMaterial()
const boxGeo = new THREE.BoxBufferGeometry(0.5, 0.5, 0.5)

function UnderstandingCannonInner() {
  const ballRef = useRef(null)

  return (
    <>
      <group>
        <Ball ref={ballRef} mat={normalMat}/>
        <Box ballRef={ballRef} mat={normalMat} geo={boxGeo}/>
        <Box ballRef={ballRef} mat={normalMat} geo={boxGeo}/>
        <Box ballRef={ballRef} mat={normalMat} geo={boxGeo}/>
        <Box ballRef={ballRef} mat={normalMat} geo={boxGeo}/>
        <Box ballRef={ballRef} mat={normalMat} geo={boxGeo}/>
      </group>
    </>
  )
}

export default UnderstandingCannonInner;