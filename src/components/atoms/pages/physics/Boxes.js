import React, {useState} from 'react';
import {button, useControls} from "leva";
import RandomBox from "./RandomBox";
import PropTypes from "prop-types";

function generateRandomBox(props) {
  return {
    position: [(Math.random() - 0.5) * 3, Math.random()*4 + 1, (Math.random() - 0.5) * 3,],
    color: props.palette[Math.floor(Math.random() * (props.palette.length - 1))]
  }
}

function Boxes(props) {
  // Add initial boxes
  const [boxes, setBoxes] = useState(() => Array.from({ length: 3 }).map(() => generateRandomBox(props)) )

  const addRandomBox = () => setBoxes((currBoxes) => [...currBoxes, generateRandomBox(props)])
  useControls({ addBox: button(addRandomBox) })

  return boxes.map((boxInfo , i) =>
    <RandomBox key={i} {...boxInfo}/>
  )
}

Boxes.propTypes = {
  palette: PropTypes.array.isRequired,
};

export default Boxes;