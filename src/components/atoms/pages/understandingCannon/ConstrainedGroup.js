import React, {useRef} from 'react';
import {useDistanceConstraint} from "@react-three/cannon";
import ConstrainedBall from "./ConstrainedBall";

function ConstrainedGroup(props) {
  const ball1 = useRef(null)
  const ball2 = useRef(null)
  const ball3 = useRef(null)
  const ball4 = useRef(null)
  const ball5 = useRef(null)

  useDistanceConstraint(ball1, props.ballRef, {
    distance: 1.5
  })
  useDistanceConstraint(ball2, ball1, {
    distance: 1.5
  })

  useDistanceConstraint(ball3, ball2, {
    distance: 1.5
  })
  useDistanceConstraint(ball4, ball3, {
    distance: 1.5
  })

  useDistanceConstraint(ball5, ball4, {
    distance: 1.5
  })

  return (
    <>
      <ConstrainedBall ref={ball1} mat={props.mat} />
      <ConstrainedBall ref={ball2} mat={props.mat} />

      <ConstrainedBall ref={ball3} mat={props.mat} />
      <ConstrainedBall ref={ball4} mat={props.mat} />
      <ConstrainedBall ref={ball5} mat={props.mat} />
    </>
  )
}

export default ConstrainedGroup