import {useThree, useFrame, extend } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OrbitControls } from "@react-three/drei";

extend({
  OrbitControls: OrbitControls,
});

function Scene() {
  const cubeRef = useRef();
  const {gl, camera} = useThree()
  // camera.position.x = 5

  useFrame((state, delta) => {
    // state.camera.position.x = Math.sin(state.clock.elapsedTime)
    // cubeRef.current.rotation.x += delta;
    // planeRef.current.rotation.y += delta;
  });

  return (
    <>
     {/* <orbitControls args={[camera, gl.domElement]}/> */}
     <OrbitControls/>
      {/* <mesh position-z={-7}>
        <boxGeometry />
        <meshBasicMaterial color="purple" />
      </mesh> */}
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="yellow" />
      </mesh>
    </>
  );
}

export default Scene;
