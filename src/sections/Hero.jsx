import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";

import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  const astronautScale = isMobile ? 1.5 : 8;
  const astronautPosition = isMobile ? [0, -9.5, 0] : [0, -12.25, 0];

  return (
    <section className="relative flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText />
      <ParallaxBackground />

      {/* Canvas containing the Astronaut and Lights */}
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [5, 8, 5], fov: 50 }}>
          {/* Lighting setup */}
          <ambientLight intensity={3} />
          <directionalLight
            position={[3, -1.4, 15]}
            intensity={2.35}
            castShadow
          />

          <Suspense fallback={<Loader />}>
            <Astronaut scale={astronautScale} position={astronautPosition} />
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

// Camera movement handler
function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1.5 + state.mouse.y / 10, 5],
      0.4,
      delta
    );
  });
}

export default Hero;
