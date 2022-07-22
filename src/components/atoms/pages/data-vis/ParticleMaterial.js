import React from 'react';
import * as THREE from "three";
import {useTexture} from "@react-three/drei";
import particleImg from "../../../../assets/data-vis/particles/1.png";

function ParticleMaterial() {
  const particleTexture = useTexture(particleImg)
  return (
    <pointsMaterial
      size={0.3}
      sizeAttenuation={true}
      depthTest={false}
      transparent
      vertexColors
      blending={THREE.AdditiveBlending}
      map={particleTexture} />
  )
}

export default ParticleMaterial;