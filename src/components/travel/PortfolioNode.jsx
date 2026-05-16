import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Billboard } from "@react-three/drei";
import * as THREE from "three";
import { SECTION_NODES } from "./roadData";

export { SECTION_NODES as NODES };

const PROXIMITY = 7;

const GEO = {
  octahedron: <octahedronGeometry args={[1.1, 0]} />,
  dodecahedron: <dodecahedronGeometry args={[1.05, 0]} />,
  icosahedron: <icosahedronGeometry args={[1.1, 0]} />,
};

function NodeMesh({ node, active }) {
  const meshRef = useRef();
  const ringRef = useRef();
  const glowRef = useRef();
  const t0 = useRef(Math.random() * 100);

  useFrame((s, dt) => {
    const t = s.clock.elapsedTime + t0.current;
    if (meshRef.current) {
      meshRef.current.rotation.y += dt * (active ? 1.1 : 0.45);
      meshRef.current.rotation.x += dt * (active ? 0.55 : 0.22);
      meshRef.current.position.y = Math.sin(t * 0.9) * 0.4 + 1.9;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += dt * (active ? 1.8 : 0.7);
      const sc = 1 + Math.sin(t * 2.2) * 0.07 + (active ? 0.18 : 0);
      ringRef.current.scale.setScalar(sc);
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + Math.sin(t * 1.6) * 0.12 + (active ? 0.35 : 0));
    }
  });

  return (
    <group>
      {/* Outer glow */}
      <mesh ref={glowRef} position={[0, 1.9, 0]}>
        <sphereGeometry args={[1.8, 20, 20]} />
        <meshStandardMaterial
          color={node.color}
          emissive={node.emissive}
          emissiveIntensity={active ? 1.0 : 0.15}
          opacity={0.09}
          transparent
          depthWrite={false}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Orbiting ring */}
      <mesh ref={ringRef} position={[0, 1.9, 0]} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1.5, 0.04, 10, 52]} />
        <meshStandardMaterial
          color={node.color}
          emissive={node.color}
          emissiveIntensity={active ? 4 : 1.2}
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* Crystal core */}
      <mesh ref={meshRef} position={[0, 1.9, 0]} castShadow>
        {GEO[node.shape] || GEO.octahedron}
        <meshPhysicalMaterial
          color={node.color}
          emissive={node.emissive}
          emissiveIntensity={active ? 2.0 : 0.6}
          metalness={0.2}
          roughness={0.04}
          clearcoat={1}
          clearcoatRoughness={0}
          reflectivity={1}
          transmission={0.12}
          transparent
        />
      </mesh>

      {/* Pillar */}
      <mesh position={[0, 0.65, 0]}>
        <cylinderGeometry args={[0.07, 0.07, 1.3, 8]} />
        <meshPhysicalMaterial
          color={node.color}
          emissive={node.emissive}
          emissiveIntensity={active ? 2.5 : 0.8}
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* Ground ring */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.5, 1.95, 52]} />
        <meshStandardMaterial
          color={node.color}
          emissive={node.emissive}
          emissiveIntensity={active ? 3 : 0.6}
          opacity={active ? 0.75 : 0.22}
          transparent
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      {/* Inner base disc */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.5, 48]} />
        <meshStandardMaterial
          color={node.color}
          emissive={node.emissive}
          emissiveIntensity={active ? 0.5 : 0.1}
          opacity={active ? 0.18 : 0.06}
          transparent
          depthWrite={false}
        />
      </mesh>

      {/* Light */}
      <pointLight position={[0, 1.9, 0]} color={node.color} intensity={active ? 10 : 2.5} distance={active ? 18 : 8} />

      {/* Label */}
      <Billboard position={[0, 4.2, 0]}>
        <Text
          fontSize={0.5}
          color={active ? "#ffffff" : node.color}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.03}
          outlineColor="#000000"
          outlineOpacity={0.9}
        >
          {node.emoji}  {node.label}
        </Text>
      </Billboard>

      {/* Sub-label when near */}
      {active && (
        <Billboard position={[0, 3.5, 0]}>
          <Text fontSize={0.28} color="rgba(255,255,255,0.6)" anchorX="center" anchorY="middle">
            Drive close to discover
          </Text>
        </Billboard>
      )}
    </group>
  );
}

export default function PortfolioNode({ node, carSnapshot, onActivate }) {
  const [active, setActive] = useState(false);
  const wasActive = useRef(false);

  useEffect(() => {
    if (!carSnapshot) return;
    const dx = carSnapshot.x - node.position[0];
    const dz = carSnapshot.z - node.position[2];
    const near = dx * dx + dz * dz < PROXIMITY * PROXIMITY;
    setActive(near);
    if (near && !wasActive.current) onActivate(node);
    if (!near && wasActive.current) onActivate(null);
    wasActive.current = near;
  }, [carSnapshot]); // eslint-disable-line

  return (
    <group position={node.position}>
      <NodeMesh node={node} active={active} />
    </group>
  );
}

// Export all nodes for external use
export { SECTION_NODES };
