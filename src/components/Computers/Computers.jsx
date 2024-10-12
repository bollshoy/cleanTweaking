import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import './_Computers.scss';

const Computers = ({ isMobile }) => {
    const computer = useGLTF("./desktop_pc/scene.gltf");

    return (
        <mesh>
            {/* Общая освещенность */}
            <ambientLight intensity={0.3} />
            <hemisphereLight intensity={0.15} groundColor="black" />
            <spotLight
                position={[-20, 70, 10]}
                angle={1.7}
                penumbra={1}
                intensity={5}
                castShadow
                shadow-mapSize={1024}
            />
            <pointLight intensity={10} />
            <primitive
                object={computer.scene}
                scale={isMobile ? 0.7 : 0.75}
                position={isMobile ? [0, 0, -2.2] : [0, 0, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    );
};

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            frameloop='demand'
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 11, 2], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}>
            <Suspense>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers isMobile={isMobile} />
                <EffectComposer>
                    <Bloom intensity={0.5} />
                </EffectComposer>
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default ComputersCanvas;
