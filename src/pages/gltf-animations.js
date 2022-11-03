import React from "react";
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import CanvasHolder from "../components/atoms/CanvasHolder";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Plane, ScrollControls} from "@react-three/drei";
import DefaultDirectionalLight from "../components/atoms/DefaultDirectionalLight";
import {useWindowSize} from "react-use";
import BlocksModel from "../components/atoms/pages/blocks/BlocksModel";
import {Model as Fox} from "../components/atoms/pages/gltf-aimations/Fox";

const Holder = styled.div`
`;

function GltfAnimations() {
  const size = useWindowSize()

  return (
    <Holder>
      <Seo title="Gltf Animations" />
      <CanvasHolder>
        <Canvas
          shadows
          camera={{
            position: [0, 2, size.width > 576 ? 10 : 12],
            fov: 30,
          }}>
          <OrbitControls/>
          <axesHelper args={[5]} />
          <ambientLight intensity={0.5} />
          <DefaultDirectionalLight intensity={0.25}/>
          <Plane args={[10,10]} rotation={[-Math.PI/2, 0, 0]}>
            <meshStandardMaterial color={'pink'}/>
          </Plane>
          <Fox scale={0.025}/>
        </Canvas>
      </CanvasHolder>
    </Holder>
  )
};

export default GltfAnimations;
