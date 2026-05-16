import { useRef, useCallback } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useCarControls } from "./useCarControls";
import { OBSTACLES } from "./roadData";

const MAX_SPEED = 0.16;
const ACCELERATION = 0.007;
const DECELERATION = 0.006;
const BRAKE_FORCE = 0.025;
const TURN_SPEED = 0.042;
const WORLD_BOUNDARY = 47;
const CAR_RADIUS = 0.85;

function collidesWithObstacle(nx, nz) {
  for (const [ox, oz, or_] of OBSTACLES) {
    const dx = nx - ox;
    const dz = nz - oz;
    const minD = CAR_RADIUS + or_;
    if (dx * dx + dz * dz < minD * minD) return true;
  }
  return false;
}

export default function Car({ carStateRef }) {
  const bodyRef = useRef();
  const velocity = useRef(0);
  const angle = useRef(0);
  const steerAngle = useRef(0);
  const wheelFLRef = useRef();
  const wheelFRRef = useRef();
  const wheelBLRef = useRef();
  const wheelBRRef = useRef();
  const keys = useCarControls();

  useFrame((_, delta) => {
    const dt = Math.min(delta, 0.05);
    const car = bodyRef.current;
    if (!car) return;

    const { forward, backward, left, right, brake } = keys.current;

    // Speed
    if (brake) {
      velocity.current *= 1 - BRAKE_FORCE * 60 * dt;
    } else if (forward) {
      velocity.current = Math.min(velocity.current + ACCELERATION * 60 * dt, MAX_SPEED);
    } else if (backward) {
      velocity.current = Math.max(velocity.current - ACCELERATION * 60 * dt, -MAX_SPEED * 0.55);
    } else {
      velocity.current *= Math.pow(1 - DECELERATION * 10, 60 * dt);
      if (Math.abs(velocity.current) < 0.0004) velocity.current = 0;
    }

    // Steering — A = left (INCREASE angle), D = right (DECREASE angle)
    let targetSteer = 0;
    if (Math.abs(velocity.current) > 0.001) {
      const dir = velocity.current > 0 ? 1 : -1;
      if (left) {
        angle.current += TURN_SPEED * dir * 60 * dt;
        targetSteer = Math.PI / 5.5;
      } else if (right) {
        angle.current -= TURN_SPEED * dir * 60 * dt;
        targetSteer = -Math.PI / 5.5;
      }
    }
    steerAngle.current = THREE.MathUtils.lerp(steerAngle.current, targetSteer, 0.18);

    // Candidate position
    const nx = car.position.x + Math.sin(angle.current) * velocity.current * 60 * dt;
    const nz = car.position.z + Math.cos(angle.current) * velocity.current * 60 * dt;

    // Boundary clamp
    const bx = Math.max(-WORLD_BOUNDARY, Math.min(WORLD_BOUNDARY, nx));
    const bz = Math.max(-WORLD_BOUNDARY, Math.min(WORLD_BOUNDARY, nz));
    const hitBoundary = bx !== nx || bz !== nz;

    // Obstacle collision
    const hitObstacle = collidesWithObstacle(bx, bz);

    if (hitBoundary || hitObstacle) {
      // Bounce back
      velocity.current *= -0.28;
    } else {
      car.position.x = bx;
      car.position.z = bz;
    }

    car.rotation.y = angle.current;
    car.rotation.z = THREE.MathUtils.lerp(
      car.rotation.z,
      left ? 0.03 : right ? -0.03 : 0,
      0.06
    );

    // Wheel steering
    [wheelFLRef, wheelFRRef].forEach((r) => {
      if (r.current) r.current.rotation.y = steerAngle.current;
    });

    // Rear wheel spin
    const spin = velocity.current * 60 * dt * 3;
    [wheelBLRef, wheelBRRef, wheelFLRef, wheelFRRef].forEach((r) => {
      if (r.current?.children[0]) r.current.children[0].rotation.x -= spin;
    });

    // Write shared state
    if (carStateRef) {
      carStateRef.current.x = car.position.x;
      carStateRef.current.z = car.position.z;
      carStateRef.current.angle = angle.current;
      carStateRef.current.speed = velocity.current;
    }
  });

  const bodyMat = (
    <meshPhysicalMaterial
      color="#0d1b2a"
      metalness={0.9}
      roughness={0.15}
      clearcoat={1}
      clearcoatRoughness={0.05}
      reflectivity={1}
    />
  );

  const glassMat = (
    <meshPhysicalMaterial
      color="#88ccff"
      metalness={0}
      roughness={0}
      transmission={0.85}
      transparent
      opacity={0.55}
      ior={1.5}
    />
  );

  return (
    <group ref={bodyRef} position={[0, 0.38, 0]}>
      {/* Lower body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.15, 0.32, 2.3]} />
        {bodyMat}
      </mesh>
      {/* Cabin */}
      <mesh castShadow position={[0, 0.33, -0.08]}>
        <boxGeometry args={[0.92, 0.32, 1.18]} />
        {bodyMat}
      </mesh>
      {/* Roof */}
      <mesh castShadow position={[0, 0.5, -0.08]}>
        <boxGeometry args={[0.9, 0.06, 1.15]} />
        <meshPhysicalMaterial color="#081015" metalness={1} roughness={0.1} />
      </mesh>
      {/* Windshields */}
      <mesh position={[0, 0.365, 0.52]} rotation={[0.22, 0, 0]}>
        <boxGeometry args={[0.86, 0.3, 0.04]} />
        {glassMat}
      </mesh>
      <mesh position={[0, 0.365, -0.67]} rotation={[-0.22, 0, 0]}>
        <boxGeometry args={[0.86, 0.28, 0.04]} />
        {glassMat}
      </mesh>
      {/* Side windows */}
      <mesh position={[0.465, 0.355, -0.08]}>
        <boxGeometry args={[0.03, 0.24, 0.82]} />
        {glassMat}
      </mesh>
      <mesh position={[-0.465, 0.355, -0.08]}>
        <boxGeometry args={[0.03, 0.24, 0.82]} />
        {glassMat}
      </mesh>
      {/* Neon undercarriage */}
      <mesh position={[0, -0.17, 0]}>
        <boxGeometry args={[1.17, 0.03, 2.32]} />
        <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={2.5} metalness={1} roughness={0} />
      </mesh>
      {/* Side accents */}
      <mesh position={[0.578, 0, 0]}>
        <boxGeometry args={[0.01, 0.06, 2.2]} />
        <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={3} />
      </mesh>
      <mesh position={[-0.578, 0, 0]}>
        <boxGeometry args={[0.01, 0.06, 2.2]} />
        <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={3} />
      </mesh>
      {/* Front bumper */}
      <mesh position={[0, -0.06, 1.18]}>
        <boxGeometry args={[0.9, 0.14, 0.06]} />
        <meshPhysicalMaterial color="#0a1520" metalness={0.9} roughness={0.2} />
      </mesh>
      {/* Headlights */}
      <Headlight position={[0.32, 0.06, 1.18]} />
      <Headlight position={[-0.32, 0.06, 1.18]} />
      {/* Taillights */}
      <Taillight position={[0.38, 0.04, -1.18]} />
      <Taillight position={[-0.38, 0.04, -1.18]} />

      {/* Front steerable wheels */}
      <group ref={wheelFLRef} position={[0.66, -0.2, 0.78]}>
        <WheelMesh />
      </group>
      <group ref={wheelFRRef} position={[-0.66, -0.2, 0.78]}>
        <WheelMesh />
      </group>
      {/* Rear wheels */}
      <group ref={wheelBLRef} position={[0.66, -0.2, -0.78]}>
        <WheelMesh />
      </group>
      <group ref={wheelBRRef} position={[-0.66, -0.2, -0.78]}>
        <WheelMesh />
      </group>

      {/* Undercarriage glow */}
      <pointLight position={[0, -0.25, 0]} color="#00e5ff" intensity={2} distance={3} />
      {/* Headlight beam */}
      <spotLight
        position={[0, 0.2, 1.4]}
        target-position={[0, -0.3, 8]}
        color="#fffce8"
        intensity={20}
        angle={0.35}
        penumbra={0.5}
        distance={18}
        castShadow={false}
      />
    </group>
  );
}

function Headlight({ position }) {
  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={[0.2, 0.1, 0.04]} />
        <meshStandardMaterial color="#fff5d0" emissive="#fff5d0" emissiveIntensity={5} />
      </mesh>
      <mesh position={[0, 0, 0.03]}>
        <boxGeometry args={[0.18, 0.08, 0.02]} />
        <meshPhysicalMaterial color="#ffffff" transmission={0.9} transparent opacity={0.4} roughness={0} />
      </mesh>
    </group>
  );
}

function Taillight({ position }) {
  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={[0.17, 0.08, 0.04]} />
        <meshStandardMaterial color="#ff1a1a" emissive="#ff0000" emissiveIntensity={3} />
      </mesh>
    </group>
  );
}

function WheelMesh() {
  const ref = useRef();
  return (
    <group ref={ref}>
      <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.23, 0.23, 0.2, 16]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.95} metalness={0} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.14, 0.14, 0.22, 8]} />
        <meshPhysicalMaterial color="#c0c0c0" metalness={1} roughness={0.05} clearcoat={1} clearcoatRoughness={0} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.07, 0.07, 0.24, 6]} />
        <meshPhysicalMaterial color="#888" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}
