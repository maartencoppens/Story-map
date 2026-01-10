import { useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect } from "react";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { useMapStore } from "../Store/useMapStore";

export function CameraRig() {
  const { camera } = useThree();
  const controls = useThree(
    (state) => state.controls as OrbitControlsImpl | null
  );
  const goal = useMapStore((s) => s.cameraGoal);
  const setZoomed = useMapStore((s) => s.setZoomed);
  const setZooming = useMapStore((s) => s.setZooming);
  const activePOIId = useMapStore((s) => s.activePOIId);
  const clearCameraGoal = useMapStore((s) => s.clearCameraGoal);

  useEffect(() => {
    if (!goal) return;

    const [gx, gy, gz] = goal.pos;
    const [tx, ty, tz] = goal.target;

    gsap.killTweensOf(camera.position);
    if (controls) {
      gsap.killTweensOf(controls.target);
    }

    const tween = gsap.to(camera.position, {
      x: gx,
      y: gy,
      z: gz,
      duration: 1.2,
      ease: "power2.inOut",
      onStart: () => {
        setZooming(true);
        camera.lookAt(tx, ty, tz);
      },
      onUpdate: () => camera.lookAt(tx, ty, tz),
      onComplete: () => {
        setZooming(false);
        if (activePOIId) {
          setZoomed(true);
        } else {
          setZoomed(false);
          clearCameraGoal();
        }
      },
    });

    const targetTween = controls
      ? gsap.to(controls.target, {
          x: tx,
          y: ty,
          z: tz,
          duration: 1.2,
          ease: "power2.inOut",
          onUpdate: () => controls.update(),
        })
      : null;

    return () => {
      tween.kill();
      targetTween?.kill();
      setZooming(false);
    };
  }, [
    activePOIId,
    camera,
    clearCameraGoal,
    controls,
    goal,
    setZoomed,
    setZooming,
  ]);

  return null;
}
