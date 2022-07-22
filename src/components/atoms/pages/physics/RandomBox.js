import React, {useMemo} from 'react';
import {Box} from "@react-three/drei";
import {useBox} from "@react-three/cannon";
import PropTypes from "prop-types";

function RandomBox(props) {
  const sound = useMemo(() => new Audio('/physics/hit.mp3'), [])
  const playAudio = (collision) => {
    // console.log(collision.contact.impactVelocity)
    if (collision.contact.impactVelocity > 1.5) {
      sound.currentTime = 0
      sound.play((sound.volume = 0.2))
    }
  }
  const [boxRef] = useBox(() => ({mass: 1, position: props.position, onCollide: playAudio}))

  return (
    <Box ref={boxRef} castShadow>
      <meshStandardMaterial metalness={0.3} roughness={0.4} color={props.color} />
    </Box>
  )
}

RandomBox.propTypes = {
  position: PropTypes.array.isRequired,
};

export default RandomBox;