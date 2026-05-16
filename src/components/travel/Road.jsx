import { useMemo } from "react";
import * as THREE from "three";
import { WAYPOINTS } from "./roadData";

const ROAD_W = 5.5;
const DASH_LEN = 1.2;
const DASH_GAP = 1.8;

function lerp3(a, b, t) {
  return [a[0] + (b[0] - a[0]) * t, 0, a[2] + (b[2] - a[2]) * t];
}

function RoadSegment({ from, to }) {
  const { midX, midZ, len, yaw } = useMemo(() => {
    const dx = to[0] - from[0];
    const dz = to[2] - from[2];
    return {
      midX: (from[0] + to[0]) / 2,
      midZ: (from[2] + to[2]) / 2,
      len: Math.sqrt(dx * dx + dz * dz),
      yaw: Math.atan2(dx, dz),
    };
  }, [from, to]);

  const dashCount = Math.floor(len / (DASH_LEN + DASH_GAP));
  const dashStep = len / dashCount;
  const dashPositions = useMemo(() => {
    const arr = [];
    for (let i = 0; i < dashCount; i++) {
      arr.push(-len / 2 + (i + 0.5) * dashStep);
    }
    return arr;
  }, [dashCount, dashStep, len]);

  return (
    <group position={[midX, 0.008, midZ]} rotation={[0, yaw, 0]}>
      {/* Road surface */}
      <mesh receiveShadow>
        <boxGeometry args={[ROAD_W, 0.015, len]} />
        <meshStandardMaterial color="#0e1825" roughness={1} metalness={0} />
      </mesh>

      {/* Left edge glow */}
      <mesh position={[ROAD_W / 2 - 0.06, 0.01, 0]}>
        <boxGeometry args={[0.08, 0.015, len]} />
        <meshStandardMaterial
          color="#00e5ff"
          emissive="#00e5ff"
          emissiveIntensity={1.8}
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* Right edge glow */}
      <mesh position={[-ROAD_W / 2 + 0.06, 0.01, 0]}>
        <boxGeometry args={[0.08, 0.015, len]} />
        <meshStandardMaterial
          color="#00e5ff"
          emissive="#00e5ff"
          emissiveIntensity={1.8}
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* Dashed center markings */}
      {dashPositions.map((z, i) => (
        <mesh key={i} position={[0, 0.01, z]}>
          <boxGeometry args={[0.1, 0.015, DASH_LEN]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.4}
            opacity={0.4}
            transparent
          />
        </mesh>
      ))}
    </group>
  );
}

// Direction arrow every N units along a segment
function DirectionArrows({ from, to }) {
  const dx = to[0] - from[0];
  const dz = to[2] - from[2];
  const len = Math.sqrt(dx * dx + dz * dz);
  const yaw = Math.atan2(dx, dz);
  const count = Math.max(1, Math.floor(len / 14));

  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const t = (i + 0.5) / count;
        const pos = lerp3(from, to, t);
        return (
          <group key={i} position={[pos[0], 0.02, pos[2]]} rotation={[0, yaw, 0]}>
            {/* Simple arrow: two angled strips */}
            <mesh position={[0.5, 0, 0.5]} rotation={[0, 0, 0]}>
              <boxGeometry args={[0.7, 0.015, 0.1]} />
              <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={1} opacity={0.5} transparent />
            </mesh>
            <mesh position={[-0.5, 0, 0.5]} rotation={[0, 0, 0]}>
              <boxGeometry args={[0.7, 0.015, 0.1]} />
              <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={1} opacity={0.5} transparent />
            </mesh>
          </group>
        );
      })}
    </>
  );
}

export default function Road() {
  const segments = useMemo(
    () => WAYPOINTS.slice(0, -1).map((wp, i) => ({ from: wp, to: WAYPOINTS[i + 1] })),
    []
  );

  return (
    <>
      {segments.map((s, i) => (
        <RoadSegment key={i} from={s.from} to={s.to} />
      ))}
      {segments.map((s, i) => (
        <DirectionArrows key={i} from={s.from} to={s.to} />
      ))}
    </>
  );
}
