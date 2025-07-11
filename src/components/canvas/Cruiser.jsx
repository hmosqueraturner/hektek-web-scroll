/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 ..\public\modelo\cruiser.glb 
Author: VertaScan (https://sketchfab.com/VertaScan)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/supermatic-sky-cruiser-d8e0d3253dfa45479f7637d3cff32c4c
Title: Supermatic Sky Cruiser
*/

import React, { Suspense, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"

import { useGLTF, useAnimations } from '@react-three/drei'
import CanvasLoader from "../Loader";
import { OrbitControls, Preload } from "@react-three/drei";


export function Model(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('./modelo/cruiser.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="supermatic_sky_cruiser001_4" position={[0, 1.098, -0.917]} rotation={[0.194, 0, 0]}>
                <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.stealth_mat} />
                <mesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials.glass} />
                <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.jet_engines} />
                <mesh name="Object_15" geometry={nodes.Object_15.geometry} material={materials.flames} />
                <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.steel} />
                <mesh name="Object_17" geometry={nodes.Object_17.geometry} material={materials.steel_trim} />
                <mesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials.extrude} />
                <mesh name="Object_19" geometry={nodes.Object_19.geometry} material={materials.interior} />
                <mesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials.dashboard_control} />
                <mesh name="Object_21" geometry={nodes.Object_21.geometry} material={materials.side_controls} />
              </group>
              <group name="supermatic_sky_cruiser002_5" position={[0.092, 1.875, -0.136]} rotation={[0.194, 0, 0]}>
                <mesh name="Object_23" geometry={nodes.Object_23.geometry} material={materials.reveal} />
              </group>
              <group name="Object_2_Object_0_0" position={[0.002, 0.95, 0.315]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.leather} />
              </group>
              <group name="Cylinder_1" position={[0.4, 1.38, -1.8]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials['engine-thrusters']} />
              </group>
              <group name="BezierCurve_2" position={[0.74, 1.409, -1.1]} rotation={[0.267, Math.PI / 2, 0]}>
                <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.pipes} />
              </group>
              <group name="Object_2_Object_0001_3" position={[0.002, 1.01, -0.685]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.leather} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./modelo/cruiser.gltf')

const ModeloCanvas = () => {
  return (
    
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
          <Model />
        
      </Suspense>
      
      <Preload all />

     
       </Canvas>
         
  );
};

export default ModeloCanvas;
