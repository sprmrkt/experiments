import React from "react";
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import CanvasHolder from "../components/atoms/CanvasHolder";
import {Canvas} from "@react-three/fiber";
import {Environment, ScrollControls} from "@react-three/drei";
import DefaultDirectionalLight from "../components/atoms/DefaultDirectionalLight";
import ExplodedViewInner from "../components/atoms/pages/exploded-view/ExplodedViewInner";
import {useWindowSize} from "react-use";
import {Perf} from "r3f-perf";

const Holder = styled.div`
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
            position: [0, 0, size.width > 576 ? 10 : 15],
            fov: 30,
          }}>
          <Perf/>
          <ScrollControls pages={5}>
            {/*<axesHelper args={[5]} />*/}
            <ambientLight intensity={0.3} />
            <ExplodedViewInner />
          </ScrollControls>
          <DefaultDirectionalLight intensity={1.5} position={[10, 1, 10]}/>
          <Environment preset="warehouse" />
        </Canvas>
      </CanvasHolder>
    </Holder>
  )
};

export default ExplodedView;
