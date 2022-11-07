import React, {useEffect} from 'react';
import {PerspectiveCamera, Plane} from "@react-three/drei";
import {Model as SapaGirlModel} from "./Sapa-girl";
import {Canvas} from "@react-three/fiber";
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'
import {editable as e, SheetProvider} from '@theatre/r3f'
import {getProject} from '@theatre/core'
import demoProjectState from '../../../../assets/sapa-girl/state.json'

studio.initialize()
studio.extend(extension)

const demoSheet = getProject('Demo Project', {state: demoProjectState}).sheet('Demo Sheet')
const EditableCamera = e(PerspectiveCamera, 'perspectiveCamera')


function SapaGirlInner() {
  useEffect(() => {
    demoSheet.project.ready.then(() => demoSheet.sequence.play({iterationCount: Infinity, range: [0, 5]}))
  }, [])

  return (
    <Canvas gl={{preserveDrawingBuffer: true}}>
      <SheetProvider sheet={demoSheet}>
        <EditableCamera theatreKey="Camera" makeDefault position={[0, 0, -5]} fov={75} />
        <axesHelper args={[5]} />
        {/*<OrbitControls />*/}
        <ambientLight intensity={0.5} />
        <e.pointLight theatreKey="Light" intensity={0.5} position={[10, 10, 10]} />
        <SapaGirlModel scale={15} />
        <Plane args={[10, 10]} rotation={[-Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color={'#8c7845'} />
        </Plane>
      </SheetProvider>
    </Canvas>
  )
}

export default SapaGirlInner;