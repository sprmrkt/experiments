import React, {Suspense} from "react";
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import CanvasHolder from "../components/atoms/CanvasHolder";
import {Canvas} from "@react-three/fiber";
import DefaultDirectionalLight from "../components/atoms/DefaultDirectionalLight";
import {useWindowSize} from "react-use";
import {OrbitControls, ScrollControls} from "@react-three/drei";
import {Physics, Debug} from '@react-three/cannon'
import UnderstandingCannonInner from "../components/atoms/pages/understandingCannon/UnderstandingCannonInner";
import NotionInner from "../components/atoms/pages/notion-tests/NotionInner";
import PhysicsHolder from "../components/atoms/pages/notion-tests/PhysicsHolder";
import CameraRig from "../components/atoms/pages/notion-tests/CameraRig";

const Holder = styled.div`
  background-color: #100418;
`;

function NotionTests() {
  const size = useWindowSize()

  return (
    <Holder>
      <Seo title="NotionTests" />
      <CanvasHolder>
        <Canvas
          shadows
          camera={{
            position: [0, 0, 5],
            fov: 40,
          }}>
          <axesHelper args={[5]} />
          {/*<OrbitControls />*/}
          <ambientLight intensity={0.5} />
          <DefaultDirectionalLight />
          <Suspense fallback={null}>
            <ScrollControls pages={5}>
              <CameraRig />
              <PhysicsHolder>
                <Physics
                  // allowSleep={true}
                  broadphase={'SAP'}
                  gravity={[0, 0, 0]}
                  defaultContactMaterial={{friction: 0.1, restitution: 1}}>
                  {/*<Debug color="white" scale={1.1}>*/}
                  <NotionInner />
                  {/*</Debug>*/}
                </Physics>
              </PhysicsHolder>
            </ScrollControls>
          </Suspense>
        </Canvas>
      </CanvasHolder>
    </Holder>
  )
};

export default NotionTests;
