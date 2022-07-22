import React from 'react';
import {Plane} from "@react-three/drei";
import {usePlane} from "@react-three/cannon";
import PropTypes from "prop-types";

function SpherePlane(props) {

  const [ref] = usePlane(() => ({ ...props }))

  return (
    <Plane ref={ref} args={[8,8]}>
      <meshBasicMaterial wireframe/>
    </Plane>
  )
}

SpherePlane.propTypes = {
  position: PropTypes.array.isRequired,
  rotation: PropTypes.array.isRequired,
};

export default SpherePlane;