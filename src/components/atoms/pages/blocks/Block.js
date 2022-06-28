import React from 'react';
import PropTypes from "prop-types";
import {Box} from "@react-three/drei";

function Block(props) {

  const position = [
    props.position[0] + props.width / 2,
    props.position[1] + props.height / 2,
    props.position[2] + props.depth / 2,
  ]

  let rotationY = Math.floor(Math.random() * (10 - -10 + 1) + -10)/100
  console.log(rotationY)

  return (
    <group>
      <Box position={position} args={[props.width, props.height, props.depth]} rotation={[0,rotationY,0]}>
        <meshStandardMaterial color={props.color} />
      </Box>
    </group>
  )
}

Block.propTypes = {
  color: PropTypes.string.isRequired,
  position: PropTypes.array.isRequired,
  long: PropTypes.number,
};

Block.defaultProps = {
  color: '#f3d9a3',
  position: [-5, 0, 0],
  width: 1,
  height: 1,
  depth: 1,
};

export default Block;