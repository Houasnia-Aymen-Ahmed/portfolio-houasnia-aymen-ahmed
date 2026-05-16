import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function GridLines() {
  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const pts = [];
    const half = 50;
    const step = 5;
    for (let i = -half; i <= half; i += step) {
      pts.push(-half, 0, i, half, 0, i);
      pts.push(i, 0, -half, i, 0, half);
    }
    g.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
    return g;
  }, []);

  return (
    <lineSegments geometry={geo}>
      <lineBasicMaterial color="#1b3a6b" opacity={0.25} transparent />
    </lineSegments>
  );
}

function DotField() {
  const count = 1800;
  const positions = useMemo(() => {
    const a = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      a[i * 3] = (Math.random() - 0.5) * 96;
      a[i * 3 + 1] = 0.015;
      a[i * 3 + 2] = (Math.random() - 0.5) * 96;
    }
    return a;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#4fc3f7" size={0.065} sizeAttenuation transparent opacity={0.55} />
    </points>
  );
}

function AmbientParticles() {
  const ref = useRef();
  const count = 500;
  const positions = useMemo(() => {
    const a = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      a[i * 3] = (Math.random() - 0.5) * 130;
      a[i * 3 + 1] = 1 + Math.random() * 25;
      a[i * 3 + 2] = (Math.random() - 0.5) * 130;
    }
    return a;
  }, []);

  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = s.clock.elapsedTime * 0.008;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#a78bfa" size={0.06} sizeAttenuation transparent opacity={0.35} />
    </points>
  );
}

function Boundary() {
  const wallMat = (
    <meshPhysicalMaterial
      color="#00e5ff"
      emissive="#00e5ff"
      emissiveIntensity={0.4}
      metalness={1}
      roughness={0}
      opacity={0.12}
      transparent
    />
  );
  return (
    <>
      {[
        { pos: [0, 1, -50], rot: [0, 0, 0] },
        { pos: [0, 1, 50], rot: [0, 0, 0] },
        { pos: [-50, 1, 0], rot: [0, Math.PI / 2, 0] },
        { pos: [50, 1, 0], rot: [0, Math.PI / 2, 0] },
      ].map((w, i) => (
        <mesh key={i} position={w.pos} rotation={w.rot}>
          <boxGeometry args={[100, 2, 0.2]} />
          {wallMat}
        </mesh>
      ))}
    </>
  );
}

export default function Ground() {
  return (
    <>
      {/* Base plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[100, 100, 1, 1]} />
        <meshStandardMaterial color="#04060f" roughness={1} metalness={0} />
      </mesh>

      {/* Subtle center glow patch */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, 0]}>
        <circleGeometry args={[20, 64]} />
        <meshStandardMaterial color="#071828" roughness={1} metalness={0} />
      </mesh>

      <GridLines />
      <DotField />
      <AmbientParticles />
      <Boundary />

      {/* Contact shadows for car */}
      <ContactShadows
        position={[0, 0.01, 0]}
        opacity={0.6}
        scale={20}
        blur={2}
        far={10}
        color="#000022"
      />
    </>
  );
}
