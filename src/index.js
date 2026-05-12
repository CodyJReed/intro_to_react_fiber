import ReactDOM from "react-dom/client";
import "./styles.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";
import Custom from "./components/Custom";
import UseLoader from "./components/UseLoader";
import Particles from "./components/Particles";

const root = ReactDOM.createRoot(document.getElementById("root"));

// function createCanvasHandler(state) {
//   console.log("canvas has been created.", state);
//   state.gl.setClearColor("green", 0.34);
// }

root.render(
  <>
    <Canvas
      // orthographic
      gl={{
        // antialias: false
        alpha: true,
      }}
      // camera={{
      //   fov: 75,
      //   near: 0.1,
      //   far: 100,
      //   // zoom: 120,
      //   position: [2, 2, 3],
      // }}
      // onCreated={createCanvasHandler}
    >
      {/* <axesHelper args={[
        3
      ]}/>
      <gridHelper args={[
        10,10, 0xff0000, "cyan"
      ]}/> */}
      {/* <Scene /> */}
      {/* <Custom/> */}
      {/* <UseLoader/> */}
      <Particles/>
    </Canvas>
  </>,
);
