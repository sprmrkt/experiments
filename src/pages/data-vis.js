import React from "react";
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import CanvasHolder from "../components/atoms/CanvasHolder";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import DefaultDirectionalLight from "../components/atoms/DefaultDirectionalLight";
import {useWindowSize} from "react-use";
import ParticleGroups from "../components/atoms/pages/data-vis/ParticleGroups";

const Holder = styled.div`
`;





function DataVis() {
  const windowSize = useWindowSize()

  return (
    <Holder>
      <Seo title="Data vis test" />
      <CanvasHolder>
        <Canvas
          camera={{
            position: [0, 0, windowSize.width > 576 ? 15 : 10],
          }}>
          <axesHelper args={[5]} />
          <OrbitControls makeDefault />
          <ambientLight intensity={0.5} />
          {/*<DefaultDirectionalLight />*/}

          <ParticleGroups/>

        </Canvas>
      </CanvasHolder>
    </Holder>
  )
};

export default DataVis
;
