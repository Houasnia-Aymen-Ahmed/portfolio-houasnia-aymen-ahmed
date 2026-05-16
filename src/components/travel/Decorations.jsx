import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

function Tree({ position, scale = 1, variant = 0 }) {
  const colors = ["#1a4a2e", "#0f3320", "#1e5c38"];
  const trunkColor = "#2d1b00";
  const leafColor = colors[variant % colors.length];

  return (
    <group position={position} scale={scale}>
      {/* Trunk */}
      <mesh position={[0, 0.8, 0]} castShadow>
        <cylinderGeometry args={[0.1, 0.16, 1.6, 7]} />
        <meshStandardMaterial color={trunkColor} roughness={1} />
      </mesh>
      {/* Canopy layers */}
      <mesh position={[0, 2.1, 0]} castShadow>
        <coneGeometry args={[0.9, 1.8, 7]} />
        <meshStandardMaterial color={leafColor} roughness={0.9} />
      </mesh>
      <mesh position={[0, 3.1, 0]} castShadow>
        <coneGeometry args={[0.65, 1.5, 7]} />
        <meshStandardMaterial color={leafColor} emissive={leafColor} emissiveIntensity={0.05} roughness={0.9} />
      </mesh>
      <mesh position={[0, 4.0, 0]} castShadow>
        <coneGeometry args={[0.4, 1.1, 6]} />
        <meshStandardMaterial color={leafColor} roughness={0.9} />
      </mesh>
    </group>
  );
}

function NeonPillar({ position, color, height = 4 }) {
  return (
    <group position={position}>
      <mesh castShadow>
        <cylinderGeometry args={[0.1, 0.1, height, 8]} />
        <meshPhysicalMaterial color={color} emissive={color} emissiveIntensity={0.8} metalness={1} roughness={0} />
      </mesh>
      {/* Cap */}
      <mesh position={[0, height / 2 + 0.08, 0]}>
        <sphereGeometry args={[0.18, 8, 8]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={3} />
      </mesh>
      <pointLight position={[0, height / 2, 0]} color={color} intensity={2.5} distance={8} />
    </group>
  );
}

function FloatingRing({ position, color, speed = 1 }) {
  const ref = useRef();
  const offset = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((s) => {
    if (!ref.current) return;
    const t = s.clock.elapsedTime;
    ref.current.rotation.x = t * speed * 0.5 + offset;
    ref.current.rotation.z = t * speed * 0.3 + offset * 0.7;
    ref.current.position.y = position[1] + Math.sin(t * speed + offset) * 0.5;
  });

  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[0.9, 0.06, 10, 36]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2.5} metalness={1} roughness={0} />
    </mesh>
  );
}

function StreetLamp({ position }) {
  return (
    <group position={position}>
      <mesh position={[0, 2.5, 0]} castShadow>
        <cylinderGeometry args={[0.07, 0.09, 5, 6]} />
        <meshStandardMaterial color="#1a2030" metalness={0.8} roughness={0.4} />
      </mesh>
      {/* Arm */}
      <mesh position={[0.6, 5.1, 0]} rotation={[0, 0, -Math.PI / 8]}>
        <cylinderGeometry args={[0.04, 0.04, 1.2, 5]} />
        <meshStandardMaterial color="#1a2030" metalness={0.8} roughness={0.4} />
      </mesh>
      {/* Lamp head */}
      <mesh position={[1.0, 4.8, 0]}>
        <boxGeometry args={[0.22, 0.12, 0.22]} />
        <meshStandardMaterial color="#fff5d0" emissive="#fff5d0" emissiveIntensity={4} />
      </mesh>
      <pointLight position={[1.0, 4.6, 0]} color="#fffce8" intensity={4} distance={12} castShadow={false} />
    </group>
  );
}

const TREES = [
  { pos: [-36, 0, -36], s: 0.85, v: 0 }, { pos: [-31, 0, -40], s: 0.9, v: 1 }, { pos: [-40, 0, -30], s: 0.75, v: 2 },
  { pos: [36, 0, -36], s: 0.9, v: 1 }, { pos: [33, 0, -40], s: 0.8, v: 0 }, { pos: [40, 0, -31], s: 0.85, v: 2 },
  { pos: [-36, 0, 36], s: 0.8, v: 2 }, { pos: [-33, 0, 40], s: 0.9, v: 0 }, { pos: [-40, 0, 31], s: 0.75, v: 1 },
  { pos: [36, 0, 36], s: 0.85, v: 0 }, { pos: [31, 0, 40], s: 0.9, v: 2 }, { pos: [40, 0, 30], s: 0.8, v: 1 },
  { pos: [-42, 0, 0], s: 0.9, v: 0 }, { pos: [-42, 0, 12], s: 0.8, v: 1 }, { pos: [-42, 0, -12], s: 0.85, v: 2 },
  { pos: [42, 0, 0], s: 0.9, v: 1 }, { pos: [42, 0, 12], s: 0.8, v: 0 }, { pos: [42, 0, -12], s: 0.85, v: 2 },
  { pos: [0, 0, -44], s: 0.85, v: 0 }, { pos: [12, 0, -44], s: 0.8, v: 1 }, { pos: [-12, 0, -44], s: 0.9, v: 2 },
  { pos: [0, 0, 44], s: 0.85, v: 1 }, { pos: [12, 0, 44], s: 0.8, v: 0 }, { pos: [-12, 0, 44], s: 0.9, v: 2 },
];

const PILLARS = [
  { pos: [-16, 0, -12], color: "#00e5ff" }, { pos: [16, 0, -11], color: "#a78bfa" },
  { pos: [-15, 0, 13], color: "#f472b6" }, { pos: [17, 0, 12], color: "#34d399" },
  { pos: [0, 0, -24], color: "#fbbf24" }, { pos: [-24, 0, 0], color: "#60a5fa" },
  { pos: [24, 0, 0], color: "#f87171" }, { pos: [0, 0, 24], color: "#818cf8" },
];

const RINGS = [
  { pos: [-12, 4.5, -12], color: "#00e5ff", speed: 0.65 },
  { pos: [12, 5, -12], color: "#a78bfa", speed: 1.0 },
  { pos: [-12, 4.5, 12], color: "#f472b6", speed: 0.8 },
  { pos: [12, 5, 12], color: "#34d399", speed: 0.55 },
];

const LAMPS = [
  [-18, 0, -8], [18, 0, -8], [-18, 0, 8], [18, 0, 8],
  [0, 0, -20], [0, 0, 20], [-25, 0, 0], [25, 0, 0],
];

export default function Decorations() {
  return (
    <>
      {TREES.map((t, i) => <Tree key={i} position={t.pos} scale={t.s} variant={t.v} />)}
      {PILLARS.map((p, i) => <NeonPillar key={i} position={p.pos} color={p.color} height={3 + i * 0.15} />)}
      {RINGS.map((r, i) => <FloatingRing key={i} position={r.pos} color={r.color} speed={r.speed} />)}
      {LAMPS.map((pos, i) => <StreetLamp key={i} position={pos} />)}
    </>
  );
}
