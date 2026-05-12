import { useGLTF } from "@react-three/drei";
// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/Addons.js";

function Dog() {
    // Using useLoader/GLTF...
    // const model = useLoader(GLTFLoader, "./model/dog.glb");

    // Using drei hook
    const model = useGLTF("./model/dog.glb")

  return (
    <primitive object={model.scene} position-y={-0.4} />
  )
}

// Loading and 'showing' a model are two different things
// using the below method always for a model to be preload prior to 'show'
useGLTF.preload("./model/dog.glb")

export default Dog