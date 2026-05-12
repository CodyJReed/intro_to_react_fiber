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
  const planeRef = useRef();
  const {gl, camera} = useThree()

  useFrame((_, delta) => {
    // cubeRef.current.rotation.x += delta;
    // planeRef.current.rotation.y += delta;
  });

  return (
    <>
     {/* <orbitControls args={[camera, gl.domElement]}/> */}
     <OrbitControls/>
      <mesh ref={planeRef} position-x={-2}>
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial color="orange" side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={cubeRef} position-x={2}>
        <boxGeometry />
        <meshBasicMaterial color="yellow" />
      </mesh>
    </>
  );
}

export default Scene;
