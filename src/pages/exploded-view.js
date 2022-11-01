import React from "react";
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import CanvasHolder from "../components/atoms/CanvasHolder";
import {Canvas} from "@react-three/fiber";
import {Backdrop, Environment, MeshReflectorMaterial, ScrollControls, Sparkles} from "@react-three/drei";
import DefaultDirectionalLight from "../components/atoms/DefaultDirectionalLight";
import ExplodedViewInner from "../components/atoms/pages/exploded-view/ExplodedViewInner";
import {useWindowSize} from "react-use";
import {Perf} from "r3f-perf";
import MovingLight from "../components/atoms/pages/materials/MovingLight";

const Holder = styled.div`
  .info {
    padding: 20px;
    border-radius: 20px;
    color: black;
    background-color: rgba(255,255,255,0.4);
    border: 1px solid;
    text-align: center;
    h2 {
      font-size: 13px;
      margin: 0;
    }
    p {
      font-size: 11px;
      margin: 0;
    }
  }
`;

function ExplodedView() {
  const size = useWindowSize()

  return (
    <Holder>
      <Seo title="ExplodedView" />
      <CanvasHolder>
        <Canvas
          shadows
          camera={{
            position: [0, 0, size.width > 576 ? 10 : 18],
            fov: 30,
          }}>
          <Perf/>
          <ScrollControls pages={5}>
            {/*<axesHelper args={[5]} />*/}
            <ambientLight intensity={0.3} />
            <ExplodedViewInner />
          </ScrollControls>
          <DefaultDirectionalLight intensity={0.5} position={[10, 1, 10]}/>
          <Environment preset="warehouse" />
          <Backdrop receiveShadow={false} castShadow floor={2} position={[0, -2, -5]} scale={[50, 10, 10]}>
            <meshStandardMaterial color={'#292933'} envMapIntensity={0.1} />
          </Backdrop>
        </Canvas>
      </CanvasHolder>
    </Holder>
  )
};

export default ExplodedView;
