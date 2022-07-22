import React, {useEffect, useState} from "react";
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import CanvasHolder from "../components/atoms/CanvasHolder";
import DefaultDirectionalLight from "../components/atoms/DefaultDirectionalLight";
import {DefaultXRControllers, VRCanvas, Interactive, useXR, Hands, RayGrab} from '@react-three/xr';
import {useSpring} from '@react-spring/three'
import {Torus, Sphere, Plane, Box} from "@react-three/drei";
import palettes from 'nice-color-palettes'
import Floor from "../components/atoms/pages/vr-test/Floor";
import {Physics} from "@react-three/cannon";
import GrabBox from "../components/atoms/pages/vr-test/GrabBox";

const palette = palettes[Math.floor(Math.random() * (palettes.length - 1))]


const Holder = styled.div`
`;

function VrTestPage() {

  return (
    <Holder>
      <Seo title="VR test" />
      <CanvasHolder>
        <VRCanvas
        >
          <DefaultXRControllers />
          <Hands />
          <axesHelper args={[5]} />
          <ambientLight intensity={0.5} />
          <DefaultDirectionalLight />
          <Physics
            allowSleep={true}
            broadphase={'SAP'}
            gravity={[0, -9.8, 0]}
            defaultContactMaterial={{friction: 0.1, restitution: 0.8}}>
            <GrabBox color={palette[1]} />
            <Floor color={palette[0]} />
          </Physics>
        </VRCanvas>
      </CanvasHolder>
    </Holder>
  )
};

export default VrTestPage;
