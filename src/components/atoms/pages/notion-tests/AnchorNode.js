import React, {forwardRef} from 'react'
import {useSphere} from "@react-three/cannon"
import {useFrame} from "@react-three/fiber"
import PropTypes from 'prop-types'
import {useScroll} from "@react-three/drei";
import * as THREE from "three";

const AnchorNode = forwardRef((props, fwdRef) => {
  const [ref, api] = useSphere(() => ({args: [0.05], type: 'Kinematic', ...props}), fwdRef)
  const data = useScroll()
  const cameraY = -2

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const r1 = data.range(0.4, 0.1)
    const r2 = data.range(0.5, 0.1)
    const r3 = data.range(0.6, 0.1)
    const r4 = data.range(0.9, 0.1)

    if (props.hero) {
      const factor = THREE.MathUtils.lerp(4, 20, r3)
      if( r4 === 0 ) {
        api.position.set(Math.sin(t) / factor, Math.cos(t) / factor, Math.cos(t) / factor)
      } else if (r4 < 1) {
        api.position.set(0, THREE.MathUtils.lerp(0, -1 + cameraY, r4), 0)
      }
    } else {
      if (r1 < 1) {
        if (props.secondary) {
          api.position.set(THREE.MathUtils.lerp(0, -5, r1), 0, 0)
        }
        if (props.tertiary) {
          api.position.set(THREE.MathUtils.lerp(0, 5, r1), 0, 0)
        }
      } else if (r2 < 1) {
        if (props.secondary) {
          api.position.set(THREE.MathUtils.lerp(-5, 0, r2), 0, 0)
        }
        if (props.tertiary) {
          api.position.set(THREE.MathUtils.lerp(5, 0, r2), 0, 0)
        }
      } else if (r4 < 1) {
        if (props.secondary) {
          api.position.set(0, THREE.MathUtils.lerp(0, -3 + cameraY, r4), 0)
        }
        if (props.tertiary) {
          api.position.set(0, THREE.MathUtils.lerp(0, -1.95 + cameraY, r4), 0)
        }
      }
    }


  })

  return (
    <mesh ref={ref} material={props.mat} geometry={props.geo} />
  )
})

AnchorNode.propTypes = {
  hero: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
};

AnchorNode.defaultProps = {
  hero: false,
  secondary: false,
  tertiary: false,
};

export default AnchorNode;


