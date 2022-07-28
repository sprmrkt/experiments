import React from 'react';
import PropTypes from "prop-types";
import {useBox} from "@react-three/cannon";
import {Box} from "@react-three/drei";
import {RayGrab} from "@react-three/xr";

function Cube({color, position, args = [0.5, 0.5, 0.5]}) {
  const [boxRef] = useBox(() => ({position, mass: 1, args}))

  return (
    <RayGrab>
      <Box ref={boxRef} args={args}>
        <meshStandardMaterial color={color} />
      </Box>
    </RayGrab>
  )
}

Cube.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Cube;