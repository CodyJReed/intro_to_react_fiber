import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function UseLoader() {

    const texture = useLoader(THREE.TextureLoader, './img/1.png')

  return (
    <mesh>
    <OrbitControls/>
      <boxGeometry />
      <meshBasicMaterial side={THREE.DoubleSide} map={texture}/>
    </mesh>
  );
}

export default UseLoader;
