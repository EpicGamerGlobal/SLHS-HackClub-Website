import React, { useEffect, useRef } from "react"
import WebGLFluid from "webgl-fluid"

interface FluidBackgroundProps {
  pageTrigger?: number
}

const FluidBackground: React.FC<FluidBackgroundProps> = ({ pageTrigger }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      WebGLFluid(canvasRef.current, {
        SIM_RESOLUTION: 128,
        DYE_RESOLUTION: 512,
        DENSITY_DISSIPATION: 0.98,
        VELOCITY_DISSIPATION: 0.99,
        PRESSURE: 0.8,
        SPLAT_RADIUS: 0.25,
        COLORFUL: true,
        COLOR_UPDATE_SPEED: 10
      })

      const resize = () => {
        if (canvasRef.current) {
          canvasRef.current.width = window.innerWidth
          canvasRef.current.height = window.innerHeight
        }
      }
      resize()
      window.addEventListener("resize", resize)
      return () => window.removeEventListener("resize", resize)
    }
  }, [])

  useEffect(() => {
    if (canvasRef.current && pageTrigger !== undefined) {
      const event = new MouseEvent("mousemove", {
        clientX: Math.random() * window.innerWidth,
        clientY: Math.random() * window.innerHeight
      })
      canvasRef.current.dispatchEvent(event)
    }
  }, [pageTrigger])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0
      }}
    />
  )
}

export default FluidBackground
