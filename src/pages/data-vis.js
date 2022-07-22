import React from "react";
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import CanvasHolder from "../components/atoms/CanvasHolder";
import {Canvas, useFrame} from "@react-three/fiber";
import {OrbitControls, useScroll} from "@react-three/drei";
import DefaultDirectionalLight from "../components/atoms/DefaultDirectionalLight";
import {useWindowSize} from "react-use";
import {ScrollControls} from "@react-three/drei";
import ParticleGroups from "../components/atoms/pages/data-vis/ParticleGroups";
import {Physics} from "@react-three/cannon";
import PhysicsParticles from "../components/atoms/pages/data-vis/PhysicsParticles";
import * as THREE from "three";

const Holder = styled.div`
`;


function DataVis() {

  return (
    <Holder>
      <Seo title="Data vis test" />
      <CanvasHolder>
        <Canvas
          camera={{
            position: [0, 0, 15],
          }}>
          <axesHelper args={[5]} />
          {/*<OrbitControls makeDefault />*/}
          <ambientLight intensity={0.5} />
          <DefaultDirectionalLight />
          {/*<ParticleGroups/>*/}
          <ScrollControls pages={5}>
            <Physics
              // allowSleep={true}
              broadphase={'SAP'}
              gravity={[0, 0, 0]}
              defaultContactMaterial={{friction: 0.1, restitution: 0.8}}>
              <PhysicsParticles />
            </Physics>
          </ScrollControls>

        </Canvas>
      </CanvasHolder>
    </Holder>
  )
};

export default DataVis
;
