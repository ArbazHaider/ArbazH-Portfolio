import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center className="text-xl font-normal text-center">
      {progress}% Loaded , Hang in there !
    </Html>
  );
};

export default Loader;