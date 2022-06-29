import React from "react";
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import CanvasHolder from "../components/atoms/CanvasHolder";
import DefaultDirectionalLight from "../components/atoms/DefaultDirectionalLight";
import {
  ZapparCamera,
  ImageTracker,
  ZapparCanvas,
  BrowserCompatibility,
} from "@zappar/zappar-react-three-fiber";


const Holder = styled.div`
`;

function ArTest() {

  const targetFile = 'artest/futurity.zpt';

  return (
    <Holder>
      <Seo title="Blocks" />
      <BrowserCompatibility />
      <CanvasHolder>
        <ZapparCanvas>
          <ZapparCamera/>
          <ImageTracker targetImage={targetFile} >
            <axesHelper args={[5]}/>
            <ambientLight intensity={0.5} />
            <DefaultDirectionalLight />
            <mesh>
              <sphereBufferGeometry />
              <meshStandardMaterial color="hotpink" />
            </mesh>
          </ImageTracker>
        </ZapparCanvas>
      </CanvasHolder>
    </Holder>
  )
}

export default ArTest;
