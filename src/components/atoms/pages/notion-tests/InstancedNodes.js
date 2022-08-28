import React, {useRef} from 'react';
import {useSphere, useSpring} from "@react-three/cannon";

function InstancedNodes(props) {
  const [ref] = useSphere(
    () => ({
      args: [0.25],
      mass: 1,
      position: [(Math.random() - 0.5) * props.restLength, Math.random() - 0.5 * props.restLength, 0],
    }),
    useRef(null),
  )

  useSpring(ref, props.ballRef, {
    damping: 1,
    restLength: props.restLength,
    stiffness: 50,
  }, [ref])

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, props.number]}>
      <sphereBufferGeometry args={[0.25, 16, 16]}/>
      <meshNormalMaterial/>
    </instancedMesh>
  )
}

export default InstancedNodes;