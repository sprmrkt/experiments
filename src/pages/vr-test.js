import React, {useEffect, useState} from "react";
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import CanvasHolder from "../components/atoms/CanvasHolder";
import DefaultDirectionalLight from "../components/atoms/DefaultDirectionalLight";
import {DefaultXRControllers, VRCanvas, Hands} from '@react-three/xr';
import palettes from 'nice-color-palettes'
import Floor from "../components/atoms/pages/vr-test/Floor";
import {Debug, Physics} from "@react-three/cannon";
import Cube from "../components/atoms/pages/vr-test/Cube";
import PhysicalHands from "../components/atoms/pages/vr-test/PhysicalHands";

const palette = palettes[Math.floor(Math.random() * (palettes.length - 1))]


const Holder = styled.div`
`;

function VrTestPage() {

  return (
    <Holder>
      <Seo title="VR test" />
      <CanvasHolder>
        <VRCanvas>
          <Physics
            allowSleep={true}
            broadphase={'SAP'}
            gravity={[0, -9.8, 0]}
            defaultContactMaterial={{friction: 0.1, restitution: 0.8}}>
            <DefaultXRControllers />
            <Hands />
            {/*<PhysicalHands />*/}
            <axesHelper args={[5]} />
            <ambientLight intensity={0.5} />
            <DefaultDirectionalLight />
            <Debug color={'yellow'} scale={1.1}>
              <Cube color={palette[1]} />
              <Cube color={palette[2]} position={[0,1,0]}/>
              <Cube color={palette[3]} position={[0,2,0]}/>
              <Floor color={palette[0]} />
            </Debug>
          </Physics>
        </VRCanvas>
      </CanvasHolder>
    </Holder>
  )
};

export default VrTestPage;
