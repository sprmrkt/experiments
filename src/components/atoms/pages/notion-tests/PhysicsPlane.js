import React from 'react';
import {Box, Plane} from "@react-three/drei";
import {useBox, usePlane} from "@react-three/cannon";
import PropTypes from "prop-types";

function PhysicsPlane(props) {

  const [ref] = useBox(() => ({ ...props }))

  return (
    <Box ref={ref} args={props.args}>
      <meshBasicMaterial color={'transparent'} transparent opacity={0}/>
    </Box>
  )
}

PhysicsPlane.propTypes = {
  position: PropTypes.array.isRequired,
  args: PropTypes.array.isRequired,
};

export default PhysicsPlane;