import { Suspense, useRef, useState, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Car from "../components/travel/Car";
import Ground from "../components/travel/Ground";
import Road from "../components/travel/Road";
import Decorations from "../components/travel/Decorations";
import PortfolioNode from "../components/travel/PortfolioNode";
import SmallOrb from "../components/travel/SmallOrb";
import CameraRig from "../components/travel/CameraRig";
import HUD from "../components/travel/HUD";
import LoadingScreen from "../components/travel/LoadingScreen";
import { SECTION_NODES, COLLECTIBLES } from "../components/travel/roadData";

function StateBridge({ carStateRef, onUpdate }) {
  const frame = useRef(0);
  useFrame(() => {
    if (++frame.current % 5 === 0 && carStateRef.current) {
      onUpdate({ ...carStateRef.current });
    }
  });
  return null;
}

export default function Travel() {
  const carStateRef = useRef({ x: 0, z: 0, angle: 0, speed: 0 });
  const [carSnapshot, setCarSnapshot] = useState({ x: 0, z: 0, speed: 0 });
  const [activeNode, setActiveNode] = useState(null);
  const [latestCollect, setLatestCollect] = useState(null);
  const [ready, setReady] = useState(false);

  const handleUpdate = useCallback((snap) => setCarSnapshot(snap), []);
  const handleNode = useCallback((node) => setActiveNode(node), []);
  const handleCollect = useCallback((orb) => setLatestCollect(orb), []);

  return (
    <div className="fixed inset-0 bg-[#04060f]">
      <LoadingScreen onReady={() => setReady(true)} />

      {ready && (
        <>
          <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ fov: 55, near: 0.1, far: 500, position: [0, 4.5, 9] }}
            gl={{
              antialias: true,
              alpha: false,
              toneMapping: 4,        // ACESFilmic
              toneMappingExposure: 1.25,
            }}
          >
            <Suspense fallback={null}>
              <color attach="background" args={["#04060f"]} />
              <fog attach="fog" args={["#04060f", 45, 120]} />
              <Stars radius={90} depth={60} count={4000} factor={4} saturation={0.5} fade speed={0.4} />

              <Environment preset="city" />

              {/* Lighting */}
              <ambientLight intensity={0.25} color="#1a2540" />
              <directionalLight
                position={[-15, 30, 15]}
                intensity={0.9}
                color="#b0c8ff"
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-camera-near={1}
                shadow-camera-far={120}
                shadow-camera-left={-60}
                shadow-camera-right={60}
                shadow-camera-top={60}
                shadow-camera-bottom={-60}
                shadow-bias={-0.0005}
              />
              <directionalLight position={[15, 10, -10]} intensity={0.35} color="#ffd580" />
              <pointLight position={[0, 20, 0]} color="#2040a0" intensity={1} distance={80} />
              <pointLight position={[-25, 5, -25]} color="#5020a0" intensity={2} distance={55} />
              <pointLight position={[25, 5, 25]} color="#004060" intensity={2} distance={55} />
              <pointLight position={[-25, 5, 25]} color="#800040" intensity={1.5} distance={50} />
              <pointLight position={[25, 5, -25]} color="#005030" intensity={1.5} distance={50} />

              {/* World */}
              <Ground />
              <Road />
              <Decorations />

              {/* Section nodes (big orbs) */}
              {SECTION_NODES.map((node) => (
                <PortfolioNode
                  key={node.id}
                  node={node}
                  carSnapshot={carSnapshot}
                  onActivate={handleNode}
                />
              ))}

              {/* Small collectibles */}
              {COLLECTIBLES.map((orb) => (
                <SmallOrb
                  key={orb.id}
                  orb={orb}
                  carSnapshot={carSnapshot}
                  onCollect={handleCollect}
                />
              ))}

              <Car carStateRef={carStateRef} />
              <CameraRig carStateRef={carStateRef} />
              <StateBridge carStateRef={carStateRef} onUpdate={handleUpdate} />

              <EffectComposer>
                <Bloom mipmapBlur luminanceThreshold={0.55} luminanceSmoothing={0.35} intensity={2.0} />
              </EffectComposer>
            </Suspense>
          </Canvas>

          <HUD
            activeNode={activeNode}
            speed={carSnapshot.speed}
            latestCollect={latestCollect}
          />
        </>
      )}
    </div>
  );
}
