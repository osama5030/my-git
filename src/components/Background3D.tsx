import { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

interface Background3DProps {
  color?: string;
  type?: "default" | "connect" | "bubble";
}

export default function Background3D({ color = "#4B5563", type = "default" }: Background3DProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const getParticlesConfig = () => {
    if (type === "bubble") {
      return {
        fullScreen: false,
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: color,
          },
          collisions: {
            enable: false,
          },
          move: {
            enable: true,
            direction: "none",
            random: true,
            speed: 2,
            straight: false,
            outModes: {
              default: "bounce",
            },
            path: {
              enable: true,
              delay: {
                value: 0.2
              },
              options: {
                size: 30,
                draw: false,
                increment: 0.002
              }
            },
          },
          number: {
            value: 8,
            density: {
              enable: true,
              area: 800
            }
          },
          opacity: {
            value: 0.4,
            random: true,
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.2,
              sync: false
            }
          },
          shape: {
            type: "circle"
          },
          size: {
            value: { min: 100, max: 200 },
            animation: {
              enable: true,
              speed: 3,
              minimumValue: 80,
              sync: false
            }
          }
        }
      };
    }

    return {};
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={getParticlesConfig()}
      className="absolute inset-0"
    />
  );
}