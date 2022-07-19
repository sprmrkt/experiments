import React from "react";
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import CanvasHolder from "../components/atoms/CanvasHolder";
import {Canvas} from "@react-three/fiber";
import DefaultDirectionalLight from "../components/atoms/DefaultDirectionalLight";
import {useWindowSize} from "react-use";
import {OrbitControls} from "@react-three/drei";
import {useControls} from 'leva'
import {Physics} from '@react-three/cannon'
import PhysicsInner from "../components/atoms/pages/physics/PhysicsInner";

const Holder = styled.div`
`;

const controls = {
  radius: {value: 0.5, min: 0.1, max: 1},
}

function PhysicsPage() {
  const size = useWindowSize()
  const {
    radius,
  } = useControls(controls)

  return (
    <Holder>
      <Seo title="PhysicsPage" />
      <CanvasHolder>
        <Canvas
          shadows
          camera={{
            position: [0, 2, size.width > 576 ? 10 : 12],
            fov: 30,
          }}>
          <OrbitControls />
          <axesHelper args={[5]} />
          <ambientLight intensity={0.5} />
          <DefaultDirectionalLight />
          <Physics defaultContactMaterial={{ friction: 0.1, restitution: 0.8 }}>
            <PhysicsInner/>
          </Physics>
        </Canvas>
      </CanvasHolder>
    </Holder>
  )
};

export default PhysicsPage;
