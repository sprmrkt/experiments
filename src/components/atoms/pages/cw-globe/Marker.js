import React, {useRef} from 'react';
import PropTypes from "prop-types";
import {useFrame} from "@react-three/fiber";
import * as THREE from 'three'


function Marker({main, position}) {
  const ref = useRef()
  const min = main ? 0.1: 0.05;
  const max = main ? 0.3: 0.15;
  const color = main ? "#f5cf50": "#61cee7";
  useFrame(({clock}) => {
    ref.current.scale.x = THREE.MathUtils.mapLinear(Math.sin(clock.getElapsedTime() * 2), -1, 1, min, max)
    ref.current.scale.y = THREE.MathUtils.mapLinear(Math.sin(clock.getElapsedTime() * 2), -1, 1, min, max)
    ref.current.scale.z = THREE.MathUtils.mapLinear(Math.sin(clock.getElapsedTime() * 2), -1, 1, min, max)
  })

  return (
    <mesh ref={ref} position={position}>
      <sphereBufferGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        metalness={0}
        roughness={0}
        color={color} />
    </mesh>
  )
}

Marker.propTypes = {
  main: PropTypes.bool,
  position: PropTypes.array.isRequired
};

Marker.defaultProps = {
  main: false,
};

export default Marker;