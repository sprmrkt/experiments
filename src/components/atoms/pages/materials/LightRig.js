import React, {useRef} from 'react';
import {useFrame} from "@react-three/fiber";
import { useGLTF,TransformControls,Trail} from '@react-three/drei'
import * as THREE from 'three'
import {cicularPosition,degtorad} from "../../cFunctions"//NEW
import { useControls,folder } from 'leva'

export function LightRig({name, ...props }) {
  const ref = useRef()
  const { nodes } = useGLTF('/materials/light.gltf')
  console.log("lifght nodes",new THREE.MeshBasicMaterial);

 useFrame((state) => (
   ref.current.rotation.y = (props.animate?(state.clock.elapsedTime*props.animSpeed):ref.current.rotation.y ),
   ref.current.children[1].lookAt(0, 0, 0)
 ))

var { lighting, showStats }  = useControls(name ,{
  Transformation:folder({
    animate: {
      value: false,
      onChange: (v) => {
        props.animate=v
      }
    },
    animationSpeed: {
          value: 1,
          onChange: (v) => {
            props.animSpeed=v
          }
        },
    height: {
      value: 5,
      onChange: (v) => {
        ref.current.position.y=v
      }
    },
    staticRotation: {
          value: 5,
          onChange: (v) => {
             ref.current.rotation.y=v
          }
        },
    radius: {
      value: 5,
      onChange: (v) => {
      //  ref.current.children[0].scale=[v,v,v]
        ref.current.children[1].position.x=v
        ref.current.children[0].scale.x=v/5
          ref.current.children[0].scale.y=v/5
            ref.current.children[0].scale.z=v/5
      }
    },
  }),
    Lighting:folder({
      type: {
        value: 'PointLight',
        onChange: (v) => {
           ref.current.children[1].children[0].type = v
        }
      },
      color: {
        value: 'red',
        onChange: (v) => {
           ref.current.children[1].children[0].color = new THREE.Color(v)
        }
      },
      distance: {
        value: 0,
        onChange: (v) => {
           ref.current.children[1].children[0].distance = v
        }
      },
      intensity: {
        value: 1,
        onChange: (v) => {
           ref.current.children[1].children[0].intensity =v
        }
      },
      castShadow: {
        value: false,
        onChange: (v) => {
           ref.current.children[1].children[0].castShadow = v
        }
      }
    })
 })

  return (
      <group ref={ref}>
      <mesh name="ring"
          position={[0, 0, 0]}
          rotation={[degtorad(90), 0, 0]}
          material={new THREE.MeshBasicMaterial({color:'rgb(255, 234, 0)',wireframe:false,side:2})}
                >
               <ringBufferGeometry args={[5-0.1, 5, 60]} />
         </mesh>

        <mesh name="lightForm" geometry={nodes.light.geometry} position={[props.radius, 0, 0]} material={new THREE.MeshBasicMaterial({color:'rgb(255, 234, 0)',wireframe:false,wireframeLinewidth:5})} scale={[0.25,0.25,0.25]}>
        <pointLight color="red"/>
      </mesh>
      </group>

  )
}
