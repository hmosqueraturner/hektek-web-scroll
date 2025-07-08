import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Room = () => {
  const room = useGLTF("./room/scene.glb");

  return (

    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive object={room.scene} />
    </mesh>

  );
};

const RoomCanvas = () => {
  return (
    <Canvas
      shadows
      //frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 50,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense >
        <OrbitControls
          autoRotate={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Room />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default RoomCanvas;
