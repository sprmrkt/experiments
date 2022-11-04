import React from "react";
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import CanvasHolder from "../components/atoms/CanvasHolder";
import {Canvas} from "@react-three/fiber";
import DefaultDirectionalLight from "../components/atoms/DefaultDirectionalLight";
import {useWindowSize} from "react-use";
import {Model as SapaGirlModel} from "../components/atoms/pages/sapa-girl/Sapa-girl";
import {OrbitControls, Plane} from "@react-three/drei";

const Holder = styled.div`
`;

function SapaGirl() {
  const size = useWindowSize()

  return (
    <Holder>
      <Seo title="Sapa Girl" />
      <CanvasHolder>
        <Canvas
          shadows
          camera={{
            position: [0, 2, size.width > 576 ? 10 : 12],
            fov: 30,
          }}>
          <axesHelper args={[5]} />
          <OrbitControls/>
          <ambientLight intensity={0.5} />
          <DefaultDirectionalLight />
          <SapaGirlModel scale={15}/>
          <Plane args={[10,10]} rotation={[-Math.PI/2, 0, 0]}>
            <meshStandardMaterial color={'#8c7845'}/>
          </Plane>
        </Canvas>
      </CanvasHolder>
    </Holder>
  )
};

export default SapaGirl;
