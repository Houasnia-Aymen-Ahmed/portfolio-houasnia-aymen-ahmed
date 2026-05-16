import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const CAM_DISTANCE = 9;
const CAM_HEIGHT = 4.5;
const CAM_LOOK_HEIGHT = 0.8;

export default function CameraRig({ carStateRef }) {
  const { camera } = useThree();
  const smoothPos = useRef(new THREE.Vector3(0, CAM_HEIGHT, CAM_DISTANCE));
  const smoothLook = useRef(new THREE.Vector3(0, CAM_LOOK_HEIGHT, 0));

  useFrame((_, delta) => {
    if (!carStateRef?.current) return;
    const { x, z, angle } = carStateRef.current;

    // Camera sits BEHIND the car — negate the forward vector
    const idealX = x - Math.sin(angle) * CAM_DISTANCE;
    const idealZ = z - Math.cos(angle) * CAM_DISTANCE;

    const lerpT = 1 - Math.pow(0.001, delta);
    smoothPos.current.lerp(new THREE.Vector3(idealX, CAM_HEIGHT, idealZ), lerpT);
    smoothLook.current.lerp(new THREE.Vector3(x, CAM_LOOK_HEIGHT, z), lerpT * 1.8);

    camera.position.copy(smoothPos.current);
    camera.lookAt(smoothLook.current);
  });

  return null;
}
