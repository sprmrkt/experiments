import React from "react";
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import CanvasHolder from "../components/atoms/CanvasHolder";
import {Canvas} from "@react-three/fiber";
import {ScrollControls} from "@react-three/drei";
import DefaultDirectionalLight from "../components/atoms/DefaultDirectionalLight";
import ExplodedViewInner from "../components/atoms/pages/exploded-view/ExplodedViewInner";
import {useWindowSize} from "react-use";

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
          <ScrollControls pages={5}>
            {/*<axesHelper args={[5]} />*/}
            <ambientLight intensity={0.5} />
            <DefaultDirectionalLight />
            <ExplodedViewInner />
          </ScrollControls>
        </Canvas>
      </CanvasHolder>
    </Holder>
  )
};

export default ExplodedView;
