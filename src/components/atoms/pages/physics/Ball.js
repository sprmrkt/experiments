import React, {useEffect, useMemo} from 'react';
import {Sphere} from "@react-three/drei";
import {useSphere} from "@react-three/cannon";
import {useFrame} from "@react-three/fiber";
import PropTypes from "prop-types";

function Ball(props) {
  const sound = useMemo(() => new Audio('/physics/hit.mp3'), [])
  const playAudio = (collision) => {
    // console.log(collision.contact.impactVelocity)
    if(collision.contact.impactVelocity > 1.5) {
      sound.currentTime = 0
      sound.play((sound.volume = props.radius / 5))
    }
  }
  const [sphereRef, sphereApi] = useSphere(() => ({ mass: 1, position: props.position, args: [props.radius], onCollide: playAudio }))

  // useEffect(() => {
  //   sphereApi.applyLocalForce([150,0,0], [0,0,0])
  // });

  // useFrame(({ clock }) => {
  //   sphereApi.applyLocalForce([-1,0,0], [0,0,0])
  // })

  return (
    <Sphere ref={sphereRef} args={[props.radius,32,32]} castShadow>
      <meshStandardMaterial metalness={0.3} roughness={0.4}  color={props.color}/>
    </Sphere>
  )
}

Ball.propTypes = {
  position: PropTypes.array.isRequired,
  radius: PropTypes.number.isRequired,
};

export default Ball;