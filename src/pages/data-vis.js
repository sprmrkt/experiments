import React, {Suspense} from "react";
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import CanvasHolder from "../components/atoms/CanvasHolder";
import {Canvas} from "@react-three/fiber";
import DefaultDirectionalLight from "../components/atoms/DefaultDirectionalLight";
import {OrbitControls, ScrollControls} from "@react-three/drei";
import NodeGroup from "../components/atoms/pages/data-vis/NodeGroup";
import * as THREE from "three";
import CameraRig from "../components/atoms/pages/data-vis/CameraRig";

const Holder = styled.div`
`;

const sphere = new THREE.SphereGeometry(0.1, 36, 36)
const pink = new THREE.MeshPhongMaterial({ color: "#ff4894", shininess: 100, transparent: true, opacity: 0.85 })
const blue = new THREE.MeshPhongMaterial({ color: "#77c6e1", shininess: 100, transparent: true, opacity: 0.85 })
const yellow = new THREE.MeshPhongMaterial({ color: "#e7db55", shininess: 100, transparent: true, opacity: 0.85 })
const white = new THREE.MeshBasicMaterial({ color: "#ffffff", transparent: true })

function DataVis() {

  return (
    <Holder>
      <Seo title="Data vis test" />
      <CanvasHolder>
        <Canvas
          camera={{
            position: [0, 0, 15],
          }}>
          <Suspense fallback={<span style={{color: 'black'}}>loading...</span>}>
            {/*<OrbitControls makeDefault />  */}
            <ambientLight intensity={0.5} />
            <directionalLight
              intensity={0.8}
              color={'#de2020'}
              position={[5, 10, 5]}
              shadow-mapSize={[1024 * 2, 1024 * 2]}
              // shadow-radius={10} // Blurred shadows don't work with shadowMapType of softshadowmap (the defalt on three-fibre Canvas).
            />
            <ScrollControls pages={5}>
              <CameraRig/>
              <NodeGroup count={225} geometry={sphere} material={pink} whiteMaterial={white}/>
              <NodeGroup count={225} geometry={sphere} material={blue} whiteMaterial={white}/>
              <NodeGroup count={50} geometry={sphere} material={yellow} hero whiteMaterial={white}/>
            </ScrollControls>
          </Suspense>
        </Canvas>
      </CanvasHolder>
    </Holder>
  )
};

export default DataVis
;
