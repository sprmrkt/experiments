import React from 'react';
import {Instances} from "@react-three/drei";
import Node from "./Node";

const Nodes = (props) => {

  const boxes = [];
  for (let i = 0; i < props.count; i++) {
    boxes.push(<Node anchorRef={props.anchorRef} key={i}  restLength={props.restLength}/>);
  }
  return (
    <Instances range={props.count} material={props.mat} geometry={props.geo}>
      {boxes}
    </Instances>
  )
}

export default Nodes