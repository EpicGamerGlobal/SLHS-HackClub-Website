import React, { useEffect, useRef } from "react";
import WebGLFluid from "webgl-fluid";

interface FluidBackgroundProps {
    pageTrigger?: number;
}

const FluidBackground: React.FC<FluidBackgroundProps> = ({ pageTrigger }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const c = canvasRef.current;
        if (!c) return;

        const isSmall = window.innerWidth < 480;

        WebGLFluid(c, {
            SIM_RESOLUTION: isSmall ? 64 : 96,
            DYE_RESOLUTION: isSmall ? 256 : 384,
            DENSITY_DISSIPATION: 0.995,
            VELOCITY_DISSIPATION: 0.995,
            PRESSURE: 0.8,
            SPLAT_RADIUS: 0.25,
            COLORFUL: true,
            COLOR_UPDATE_SPEED: 10,
        });

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            c.width = Math.floor(window.innerWidth * dpr);
            c.height = Math.floor(window.innerHeight * dpr);
            c.style.width = "100%";
            c.style.height = "100%";
        };

        resize();
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);


    useEffect(() => {
        const c = canvasRef.current;
        if (!c || pageTrigger === undefined) return;
        const event = new MouseEvent("mousemove", {
            clientX: Math.random() * window.innerWidth,
            clientY: Math.random() * window.innerHeight,
        });
        c.dispatchEvent(event);
    }, [pageTrigger]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                inset: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
                pointerEvents: "none",
            }}
        />
    );
};

export default FluidBackground;
