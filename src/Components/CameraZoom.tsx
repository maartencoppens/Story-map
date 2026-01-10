import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { gsap } from "gsap";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import type { MutableRefObject } from "react";

type CameraZoomProps = {
  trigger: number;
  target: [number, number, number];
  position: [number, number, number];
  duration?: number;
  controlsRef?: MutableRefObject<OrbitControlsImpl | null>;
};

const CameraZoom = ({
  trigger,
  target,
  position,
  duration = 1.5,
  controlsRef,
}: CameraZoomProps) => {
  const { camera } = useThree();

  useEffect(() => {
    if (!trigger) return;

    const [tx, ty, tz] = target;
    const [px, py, pz] = position;
    const controls = controlsRef?.current ?? null;

    gsap.killTweensOf(camera.position);
    if (controls) {
      gsap.killTweensOf(controls.target);
    }

    const cameraFrom = {
      x: camera.position.x,
      y: camera.position.y,
      z: camera.position.z,
    };

    const cameraTo = { x: px, y: py, z: pz };

    gsap.fromTo(camera.position, cameraFrom, {
      duration,
      ...cameraTo,
      ease: "power2.inOut",
      onStart: () => {
        camera.lookAt(tx, ty, tz);
        camera.updateProjectionMatrix();
      },
      onUpdate: () => {
        camera.lookAt(tx, ty, tz);
        camera.updateProjectionMatrix();
      },
    });

    if (controls) {
      const targetFrom = {
        x: controls.target.x,
        y: controls.target.y,
        z: controls.target.z,
      };

      const targetTo = { x: tx, y: ty, z: tz };

      gsap.fromTo(controls.target, targetFrom, {
        duration,
        ...targetTo,
        ease: "power2.inOut",
        onUpdate: () => controls.update(),
      });
    }
  }, [camera, controlsRef, duration, position, target, trigger]);

  return null;
};

export default CameraZoom;
