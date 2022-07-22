import React, {useMemo} from 'react';
import PropTypes from "prop-types";
import {useBox} from "@react-three/cannon";
import {Box} from "@react-three/drei";
import {RayGrab} from "@react-three/xr";

function GrabBox({color}) {
  const [boxRef] = useBox(() => ({mass: 1, position: [0, 0, -2]}))

  return (
    <RayGrab>
      <Box ref={boxRef} castShadow>
        <meshStandardMaterial metalness={0.3} roughness={0.4} color={color} />
      </Box>
    </RayGrab>
  )
}

GrabBox.propTypes = {
  color: PropTypes.string.isRequired,
};

export default GrabBox;