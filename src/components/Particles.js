import { OrbitControls } from "@react-three/drei";
import { useLoader, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Particles() {
  const texture = useLoader(THREE.TextureLoader, "./img/snow.jpg");
  const verticesAmount = 2000;
  const positionArray = new Float32Array(verticesAmount * 3);
  const ref = useRef();

  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.1;
    ref.current.rotation.x += delta * 0.1;
  });

  for (let i = 0; i < verticesAmount * 3; i++) {
    positionArray[i] = (Math.random() - 0.5) * 10;
  }

  return (
    <>
      <OrbitControls />

      <points ref={ref}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positionArray, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          alphaMap={texture}
          transparent
          depthTest={false}
        />
      </points>
    </>
  );
}

export default Particles;
