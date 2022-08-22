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
import {MountainsModel} from "../components/atoms/pages/mountains/MountainsModel";

const palette = palettes[Math.floor(Math.random() * (palettes.length - 1))]


const Holder = styled.div`
`;

function MountainsPage() {

  return (
    <Holder>
      <Seo title="Mountains" />
      <CanvasHolder>
        <VRCanvas>
          <DefaultXRControllers />
          <Hands />
          <axesHelper args={[5]} />
          <ambientLight intensity={1} />
          <DefaultDirectionalLight />
          <MountainsModel/>
        </VRCanvas>
      </CanvasHolder>
    </Holder>
  )
};

export default MountainsPage;
