import React, {Suspense} from "react";
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import CanvasHolder from "../components/atoms/CanvasHolder";
import {Canvas} from "@react-three/fiber";
import DefaultDirectionalLight from "../components/atoms/DefaultDirectionalLight";
import {useWindowSize} from "react-use";
import {Box, OrbitControls} from "@react-three/drei";
import {Helix} from "../components/atoms/pages/shape-stack-tool/shapes/Helix";
import * as THREE from "three";

const Holder = styled.div`
`;

// Materials
const red = new THREE.Color( 0xFE5030 ).convertSRGBToLinear();
const pink = new THREE.Color( 0xFAA8C0 ).convertSRGBToLinear();
const green = new THREE.Color( 0x478953 ).convertSRGBToLinear();
const yellow = new THREE.Color( 0xFED63F ).convertSRGBToLinear();
const white = new THREE.Color( 0xFFFFFF ).convertSRGBToLinear();
const redMat = new THREE.MeshStandardMaterial({
  color: red,
})

function ShapeStackTool() {
  const size = useWindowSize()

  return (
    <Holder>
      <Seo title="Shape stack tool" />
      <CanvasHolder>
        <Canvas
          shadows
          camera={{
            position: [0, 5, size.width > 576 ? 15 : 20],
            fov: 40,
          }}>
          <OrbitControls />
          <axesHelper args={[5]} />
          <ambientLight intensity={0.5} color={'white'}/>
          <DefaultDirectionalLight intensity={0.4} debug/>
          <DefaultDirectionalLight intensity={0.4} position={[-5, -10, -5]} debug/>
          <Suspense fallback={null}>
            <Helix mat={redMat} scale={1}/>
          </Suspense>
        </Canvas>
      </CanvasHolder>
    </Holder>
  )
};

export default ShapeStackTool;
