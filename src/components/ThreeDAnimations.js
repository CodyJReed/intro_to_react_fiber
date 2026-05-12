import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Dog from "./models/Dog";

function ThreeDAnimations() {
  return (
    <>
      <Suspense
        fallback={
          <mesh>
            <boxGeometry scale-y={2} />
            <meshBasicMaterial wireframe />
          </mesh>
        }
      >
        <Dog />
      </Suspense>

      <ambientLight intensity={3} />
      <OrbitControls />
    </>
  );
}

export default ThreeDAnimations;
