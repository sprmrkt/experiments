import React from "react";
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import CanvasHolder from "../components/atoms/CanvasHolder";
import {Canvas} from "@react-three/fiber";
import DefaultDirectionalLight from "../components/atoms/DefaultDirectionalLight";
import {useWindowSize} from "react-use";
import {OrbitControls} from "@react-three/drei";
import {Physics} from '@react-three/cannon'
import PhysicsInner from "../components/atoms/pages/physics/PhysicsInner";

const Holder = styled.div`
`;

function PhysicsPage() {
  const size = useWindowSize()

  return (
    <Holder>
      <Seo title="PhysicsPage" />
      <CanvasHolder>
        <Canvas
          shadows
          camera={{
            position: [0, 5, size.width > 576 ? 15 : 20],
            fov: 40,
          }}>
          <OrbitControls />
          <axesHelper args={[5]} />
          <ambientLight intensity={0.5} />
          <DefaultDirectionalLight />
          <Physics
            allowSleep={true}
            broadphase={'SAP'}
            defaultContactMaterial={{ friction: 0.1, restitution: 0.8 }}>
            <PhysicsInner/>
          </Physics>
        </Canvas>
      </CanvasHolder>
    </Holder>
  )
};

export default PhysicsPage;
