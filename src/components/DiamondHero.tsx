"use client";

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Octahedron, Environment, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Diamond({ hovered, setHovered }: { hovered: boolean, setHovered: (h: boolean) => void }) {
  const groupRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null);

  useFrame((state) => {
    if (!groupRef.current || !materialRef.current) return;
    
    // Smooth rotation
    groupRef.current.rotation.y += 0.005;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;

    // Mouse parallax
    const { x, y } = state.mouse;
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, x * 0.5, 0.05);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, y * 0.5, 0.05);

    // Hover scale & brightness
    const targetScale = hovered ? 1.1 : 1;
    groupRef.current.scale.setScalar(THREE.MathUtils.lerp(groupRef.current.scale.x, targetScale, 0.1));
    
    const targetEnvIntensity = hovered ? 4 : 2;
    materialRef.current.envMapIntensity = THREE.MathUtils.lerp(materialRef.current.envMapIntensity, targetEnvIntensity, 0.1);
  });

  return (
    <group ref={groupRef}>
      {/* Subtle glow behind the diamond */}
      <mesh scale={hovered ? 1.3 : 1.1}>
        <octahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color="#ff007a" transparent opacity={hovered ? 0.15 : 0.05} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>

      <Octahedron
        args={[1, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshPhysicalMaterial
          ref={materialRef}
          transmission={1}
          ior={2.4}
          roughness={0}
          metalness={0}
          thickness={1.5}
          envMapIntensity={2}
          reflectivity={1}
          clearcoat={1}
          clearcoatRoughness={0}
          color="#ffffff"
        />
      </Octahedron>
    </group>
  );
}

export default function DiamondHero() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-full h-[300px] md:h-[500px]">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Environment preset="city" />
        <Diamond hovered={hovered} setHovered={setHovered} />
        <OrbitControls enableZoom={false} autoRotate={false} />
      </Canvas>
    </div>
  );
}
