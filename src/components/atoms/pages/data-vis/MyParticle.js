import React from 'react';
import {Sphere} from "@react-three/drei";
import {useSphere, useSpring} from "@react-three/cannon";
import PropTypes from "prop-types";

const radius = 0.1

function MyParticle(props) {

  const [ref, api] = useSphere(() => ({
    mass: 1,
    position: [Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5],
    args: [radius]
  }))

  return (
    <group ref={ref}>
      <Sphere args={[radius, 32, 32]}>
        <meshStandardMaterial metalness={0.3} roughness={0.4} color={props.color}  transparent opacity={0.85}/>
      </Sphere>
    </group>
  )
}

MyParticle.propTypes = {
  position: PropTypes.array,
  color: PropTypes.string.isRequired,
};

MyParticle.defaultProps = {
  position: [0, 0, 0],
};

export default MyParticle;