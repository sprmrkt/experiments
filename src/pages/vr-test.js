import React, {useEffect, useState} from "react";
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import CanvasHolder from "../components/atoms/CanvasHolder";
import {Canvas} from "@react-three/fiber";
import DefaultDirectionalLight from "../components/atoms/DefaultDirectionalLight";
import {DefaultXRControllers, VRCanvas, Interactive, useXR} from '@react-three/xr';
import {useSpring, animated} from '@react-spring/three'
import Room from "../components/atoms/pages/vr-test/Room";
import {Torus, Sphere} from "@react-three/drei";
import RotatingObject from "../components/atoms/pages/vr-test/RotatingObject";
import SelectObject from "../components/atoms/pages/vr-test/SelectObject";


const Holder = styled.div`
`;

function VrTestPage() {
  const [circleIsHovered, setCircleIsHovered] = useState(false)
  const {scale} = useSpring({scale: circleIsHovered ? 1.2 : 1})
  const {session} = useXR()


  useEffect(() => {
    console.log(session)
  }, [session]);

  return (
    <Holder>
      <Seo title="VR test" />
      <CanvasHolder>
        <VRCanvas>
          <DefaultXRControllers />
          <axesHelper args={[5]} />
          <ambientLight intensity={0.5} />
          <pointLight
            intensity={0.2}
            color={'#e8492d'}
            position={[0,0,0]}
            // shadow-radius={10} // Blurred shadows don't work with shadowMapType of softshadowmap (the defalt on three-fibre Canvas).
          />
          <Interactive onHover={() => setCircleIsHovered(true)}
                       onBlur={() => setCircleIsHovered(false)}>
            <animated.mesh scale={scale} position={[8, 0, -5]}>
              <sphereBufferGeometry args={[0.5, 16, 16]} />
              <meshStandardMaterial color={circleIsHovered ? '#e87c7c' : '#cec376'} />
            </animated.mesh>
          </Interactive>
          <RotatingObject/>
          <SelectObject/>
          <Room scale={0.05} position={[20, -15, -20]} />
        </VRCanvas>
      </CanvasHolder>
    </Holder>
  )
};

export default VrTestPage;
