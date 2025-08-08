import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const DotBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouse = useRef(new THREE.Vector2());

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x1a1826);
    mountRef.current.appendChild(renderer.domElement);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 20000;
    const positions = new Float32Array(particlesCount * 3);

    const gridSpacing = 0.5;
    let particleIndex = 0;
    for (let x = -10; x < 10; x += gridSpacing) {
      for (let y = -10; y < 10; y += gridSpacing) {
        if (particleIndex < particlesCount) {
          positions[particleIndex * 3] = x;
          positions[particleIndex * 3 + 1] = y;
          positions[particleIndex * 3 + 2] = (Math.random() - 0.5) * 0.5; 
          particleIndex++;
        }
      }
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.05,
      sizeAttenuation: false, 
      blending: THREE.AdditiveBlending,
      transparent: true,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    camera.position.z = 10;

    // Mouse Interaction
    const onMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Animate particle movement (downwards and to the left)
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        const x = particlesGeometry.attributes.position.array[i3] as number;
        const y = particlesGeometry.attributes.position.array[i3 + 1] as number;

        // Mouse Repel Effect
        const repelDistance = 2;
        const repelStrength = 0.5;
        const distanceToMouse = Math.sqrt(
          (x - mouse.current.x * 10) ** 2 + (y - mouse.current.y * 10) ** 2
        );

        if (distanceToMouse < repelDistance) {
          const repelX = ((x - mouse.current.x * 10) / distanceToMouse) * repelStrength;
          const repelY = ((y - mouse.current.y * 10) / distanceToMouse) * repelStrength;
          particlesGeometry.attributes.position.array[i3] += repelX;
          particlesGeometry.attributes.position.array[i3 + 1] += repelY;
        }

        // Infinite scroll effect
        particlesGeometry.attributes.position.array[i3] -= 0.005; // Move left
        particlesGeometry.attributes.position.array[i3 + 1] -= 0.005; // Move down

        if (particlesGeometry.attributes.position.array[i3] < -10) {
          particlesGeometry.attributes.position.array[i3] = 10;
        }
        if (particlesGeometry.attributes.position.array[i3 + 1] < -10) {
          particlesGeometry.attributes.position.array[i3 + 1] = 10;
        }
      }

      particlesGeometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };
    animate();

    // Clean up
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
      }}
    />
  );
};

export default DotBackground;
