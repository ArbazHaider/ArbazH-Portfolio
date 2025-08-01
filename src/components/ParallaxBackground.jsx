import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import skyworld from "../assets/skyworld.png";
import clouds from "../assets/clouds.png";
import planetClose from "../assets/Planet_close.png";
import marsLayer2 from "../assets/Mars_Layer2.png";
import mountain1 from "../assets/mountain-1.png";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });

  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "60%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        {/* Sky Background */}
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: `url(${skyworld})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        {/* Clouds Layer */}
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: `url(${clouds})`,
            backgroundSize: "cover",
            y: mountain3Y,
          }}
        />
        {/* Planet Layer */}
        <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: `url(${planetClose})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: planetsX,
          }}
        />
        {/* Mars Layer */}
        <motion.div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: `url(${marsLayer2})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain2Y,
          }}
        />
        {/* Foreground Mountain */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${mountain1})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain1Y,
          }}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;
