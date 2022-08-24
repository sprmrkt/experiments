import React from 'react';
import {useBox, useSpring} from "@react-three/cannon";
import {Instance, Instances} from "@react-three/drei";
import Box from "./Box";

const Boxes = (props) => {
  // const args = [0.5, 0.5, 0.5]
  // const [ref] = useBox(
  //   () => ({
  //     args,
  //     linearDamping: 0.7,
  //     mass: 1,
  //   })
  // )
  //
  // console.log(ref)

  // useSpring(ref, props.ballRef, {
  //   damping: 1,
  //   restLength: 2,
  //   stiffness: 100,
  // })

  const boxes = [];
  for (let i = 0; i < props.count; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    boxes.push(<Box ballRef={props.ballRef} key={i}  restLength={props.restLength}/>);
  }
  return (
    <Instances range={props.count} material={props.mat} geometry={props.geo}>
      {boxes}
    </Instances>
    // <Instances
    //   limit={1000} // Optional: max amount of items (for calculating buffer size)
    //   range={1000} // Optional: draw-range
    // >
    //   {/*<mesh ref={ref} material={props.mat} geometry={props.geo}/>*/}
    //   {/*<instancedMesh ref={ref} args={[props.geo, props.mat, 20]} >*/}
    //   {/*</instancedMesh>*/}
    //   <meshNormalMaterial/>
    //   <boxGeometry args={args}/>
    //   <Instance ref={ref}/>
    // </Instances>
  )
}

export default Boxes