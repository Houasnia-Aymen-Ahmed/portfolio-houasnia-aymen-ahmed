import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Billboard, Text } from "@react-three/drei";
import * as THREE from "three";

const COLLECT_R = 3.5;

export default function SmallOrb({ orb, carSnapshot, onCollect }) {
  const [collected, setCollected] = useState(false);
  const meshRef = useRef();
  const glowRef = useRef();
  const timeOff = useRef(Math.random() * 100);

  useEffect(() => {
    if (collected || !carSnapshot) return;
    const dx = carSnapshot.x - orb.position[0];
    const dz = carSnapshot.z - orb.position[2];
    if (dx * dx + dz * dz < COLLECT_R * COLLECT_R) {
      setCollected(true);
      onCollect?.(orb);
    }
  }, [carSnapshot]); // eslint-disable-line

  useFrame((s, dt) => {
    const t = s.clock.elapsedTime + timeOff.current;
    if (meshRef.current) {
      meshRef.current.rotation.y += dt * 1.8;
      meshRef.current.rotation.x += dt * 0.9;
      meshRef.current.position.y = 0.75 + Math.sin(t * 2.2) * 0.22;
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + Math.sin(t * 3) * 0.12);
    }
  });

  if (collected) return null;

  return (
    <group position={orb.position}>
      {/* Outer pulse */}
      <mesh ref={glowRef} position={[0, 0.75, 0]}>
        <sphereGeometry args={[0.55, 10, 10]} />
        <meshStandardMaterial
          color={orb.color}
          emissive={orb.color}
          emissiveIntensity={0.2}
          opacity={0.1}
          transparent
          depthWrite={false}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Crystal */}
      <mesh ref={meshRef} position={[0, 0.75, 0]} castShadow>
        <octahedronGeometry args={[0.32, 0]} />
        <meshPhysicalMaterial
          color={orb.color}
          emissive={orb.color}
          emissiveIntensity={1.2}
          metalness={0.3}
          roughness={0.05}
          clearcoat={1}
          clearcoatRoughness={0}
          transmission={0.2}
          transparent
        />
      </mesh>

      {/* Stem */}
      <mesh position={[0, 0.25, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.5, 5]} />
        <meshStandardMaterial color={orb.color} emissive={orb.color} emissiveIntensity={1} />
      </mesh>

      {/* Base disc */}
      <mesh position={[0, 0.005, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.5, 16]} />
        <meshStandardMaterial
          color={orb.color}
          emissive={orb.color}
          emissiveIntensity={0.6}
          opacity={0.25}
          transparent
          depthWrite={false}
        />
      </mesh>

      <pointLight position={[0, 0.75, 0]} color={orb.color} intensity={1.5} distance={4} />

      {/* Label — always visible */}
      <Billboard position={[0, 1.65, 0]}>
        <Text
          fontSize={0.22}
          color={orb.color}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#000"
        >
          {orb.label}
        </Text>
      </Billboard>
    </group>
  );
}
