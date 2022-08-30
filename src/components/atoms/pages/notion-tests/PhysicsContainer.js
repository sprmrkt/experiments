import React from 'react';
import PhysicsPlane from "./PhysicsPlane";
import PropTypes from "prop-types";

const thickness = 0.01

function PhysicsContainer(props) {

  return (
    <group>
      {/*Roof*/}
      {props.roof && <PhysicsPlane args={[props.width, thickness, props.depth]} position={[0, props.height + props.yPos, 0]}/>}
      {/*Floor*/}
      <PhysicsPlane args={[props.width, thickness, props.depth]} position={[0, props.yPos, 0]}/>
      {/*Back*/}
      <PhysicsPlane args={[props.width, props.height, thickness]} position={[0, props.height / 2 + props.yPos, -props.depth/2]}/>
      {/*Front*/}
      <PhysicsPlane args={[props.width, props.height, thickness]} position={[0, props.height / 2 + props.yPos, props.depth/2]}/>
      {/*Left*/}
      <PhysicsPlane args={[thickness, props.height, props.depth]} position={[-props.width/2, props.height / 2 + props.yPos, 0]}/>
      {/*Right*/}
      <PhysicsPlane args={[thickness, props.height, props.depth]} position={[props.width/2, props.height / 2 + props.yPos, 0]}/>

    </group>
  )
}

PhysicsContainer.propTypes = {
  width: PropTypes.number,
  depth: PropTypes.number,
  height: PropTypes.number,
  yPos: PropTypes.number,
  roof: PropTypes.bool,
};

PhysicsContainer.defaultProps = {
  width: 1,
  depth: 1,
  height: 1,
  yPos: 0,
  roof: true,
};

export default PhysicsContainer;