import { twMerge } from "tailwind-merge";
import React from "react";

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}) {
  const calculatedDuration = duration / speed;

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="absolute inset-0 pointer-events-none size-full"
        >
          <circle
            className="stroke-1 stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;

        const style = {
          "--duration": `${calculatedDuration}s`,
          "--radius": `${radius}px`,
          "--angle": angle,
          "--icon-size": `${iconSize}px`,
          animation: `orbit var(--duration) linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
          transformOrigin: "center",
        };

        return (
          <div
            style={style}
            className={twMerge(
              "absolute flex size-[var(--icon-size)] transform-gpu items-center justify-center rounded-full",
              className
            )}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}
