import { useCallback, useEffect, useState, FC } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

const AiHeader: FC = () => {

    const [ init, setInit ] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) =>{
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container: Container| undefined): Promise<void> => {
        console.log(container);
        return new Promise<void>((resolve, reject) => {})
    };

    return (
        <div className="headerBox">
            { init && <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fullScreen: { enable: false },
                fpsLimit: 144,
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 50,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1.5,
                        straight: false,
                    },
                    number: {
                        value: 20,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "triangle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
            }}
        />
}
            <h1 className="title">
                Evaluate your health with AI!
            </h1>

        </div>
    )
};

export default AiHeader;