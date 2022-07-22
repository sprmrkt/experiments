import React from 'react';
import {Plane} from "@react-three/drei";
import {usePlane} from "@react-three/cannon";
import PropTypes from "prop-types";

function Floor({color}) {
  const [ref] = usePlane(() => ({mass: 0, rotation: [-Math.PI / 2, 0, 0], position: [0, -1, -2.5]}))
  return (
    <Plane ref={ref} receiveShadow args={[5, 5]}>
      <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
    </Plane>
  )
}

Floor.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Floor;