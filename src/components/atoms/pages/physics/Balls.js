import React, {useState} from 'react';
import Ball from "./Ball";
import {button, useControls} from "leva";
import PropTypes from "prop-types";

function generateRandomBall(props) {
  return {
    position: [(Math.random() - 0.5) * 3, Math.random()*4 + 1, (Math.random() - 0.5) * 3,],
    radius: 0.5,
    color: props.palette[Math.floor(Math.random() * (props.palette.length - 1))]
  }
}

function Balls(props) {
  // Add initial balls
  const [balls, setBalls] = useState(() => Array.from({ length: 3 }).map(() => generateRandomBall(props)) )

  const addRandomBall = () => setBalls((currBalls) => [...currBalls, generateRandomBall(props)])
  const removeBalls = ()  => setBalls([])
  useControls({ addBall: button(addRandomBall), removeAllBalls: button(removeBalls) })

  return balls.map((ballInfo , i) =>
    <Ball key={i} {...ballInfo}/>
  )
}

Balls.propTypes = {
  palette: PropTypes.array.isRequired,
};

export default Balls;