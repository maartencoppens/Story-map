import { useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, type FC } from "react";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { useMapStore } from "../Store/useMapStore";
import type { CameraGoal, Position } from "../types/types";

export const CameraRig: FC = () => {
  const { camera } = useThree();
  const orbitControls = useThree(
    (state) => state.controls as OrbitControlsImpl | null
  );
  const goal: CameraGoal | null = useMapStore((s) => s.cameraGoal);
  const activePOIId: string | null = useMapStore((s) => s.activePOIId);
  const setZoomed = useMapStore((s) => s.setZoomed);
  const setZooming = useMapStore((s) => s.setZooming);
  const clearCameraGoal = useMapStore((s) => s.clearCameraGoal);

  const initialMinDistance = 6;
  const initialMaxDistance = 13;
  useEffect(() => {
    if (!goal) return;

    const [gx, gy, gz]: Position = goal.pos;
    const [tx, ty, tz]: Position = goal.target;

    gsap.killTweensOf(camera.position);
    if (orbitControls) {
      gsap.killTweensOf(orbitControls.target);
    }

    const tween: GSAPTween = gsap.to(camera.position, {
      x: gx,
      y: gy,
      z: gz,
      duration: 1.2,
      ease: "power2.inOut",
      onStart: () => {
        setZooming(true);
        if (orbitControls) {
          orbitControls.enabled = false;
          orbitControls.minDistance = 0;
          orbitControls.maxDistance = Infinity;
        }
        camera.lookAt(tx, ty, tz);
      },
      onUpdate: () => camera.lookAt(tx, ty, tz),
      onComplete: () => {
        if (!activePOIId && orbitControls) {
          orbitControls.enabled = true;
          orbitControls.minDistance = initialMinDistance;
          orbitControls.maxDistance = initialMaxDistance;
        }
        setZooming(false);
        if (activePOIId) {
          setZoomed(true);
        } else {
          setZoomed(false);
          clearCameraGoal();
        }
      },
    });

    const targetTween: GSAPTween | null = orbitControls
      ? gsap.to(orbitControls.target, {
          x: tx,
          y: ty,
          z: tz,
          duration: 1.2,
          ease: "power2.inOut",
          onUpdate: () => orbitControls.update(),
        })
      : null;

    return () => {
      tween.kill();
      targetTween?.kill();
      if (!activePOIId && orbitControls) {
        orbitControls.enabled = true;
        orbitControls.minDistance = initialMinDistance;
        orbitControls.maxDistance = initialMaxDistance;
      }
      setZooming(false);
    };
  }, [
    activePOIId,
    camera,
    clearCameraGoal,
    goal,
    orbitControls,
    setZoomed,
    setZooming,
  ]);

  return null;
};
