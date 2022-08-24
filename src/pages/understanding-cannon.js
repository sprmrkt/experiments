import React, {Suspense} from "react";
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import CanvasHolder from "../components/atoms/CanvasHolder";
import {Canvas} from "@react-three/fiber";
import DefaultDirectionalLight from "../components/atoms/DefaultDirectionalLight";
import {useWindowSize} from "react-use";
import {OrbitControls} from "@react-three/drei";
import {Physics, Debug} from '@react-three/cannon'
import UnderstandingCannonInner from "../components/atoms/pages/understandingCannon/UnderstandingCannonInner";

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
          <ambientLight intensity={0.8} />
          <DefaultDirectionalLight />
          <Suspense fallback={null}>
            <Physics
              // allowSleep={true}
              broadphase={'SAP'}
              gravity={[0, 0, 0]}
              defaultContactMaterial={{friction: 0.1, restitution: 0.01}}>
              <Debug color="black" scale={1.1}>
                <UnderstandingCannonInner />
              </Debug>
            </Physics>
          </Suspense>
        </Canvas>
      </CanvasHolder>
    </Holder>
  )
};

export default PhysicsPage;
