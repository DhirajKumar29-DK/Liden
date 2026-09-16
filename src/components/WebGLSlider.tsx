"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

interface WebGLSliderProps {
  images: string[];
  activeIndex?: number;
}

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D texture1;
  uniform sampler2D texture2;
  uniform float dispFactor;
  uniform float effectFactor;

  void main() {
    vec2 uv = vUv;
    vec4 text1 = texture2D(texture1, vec2(uv.x, uv.y + dispFactor * (1.0 - effectFactor)));
    vec4 text2 = texture2D(texture2, vec2(uv.x, uv.y - (1.0 - dispFactor) * (1.0 - effectFactor)));
    vec4 finalColor = mix(text1, text2, dispFactor);
    gl_FragColor = finalColor;
  }
`;

export default function WebGLSlider({ images, activeIndex = 0 }: WebGLSliderProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const texturesRef = useRef<THREE.Texture[]>([]);
  const currentIndexRef = useRef(activeIndex);

  useEffect(() => {
    if (!mountRef.current || images.length === 0) return;

    const width = mountRef.current.clientWidth || window.innerWidth;
    const height = mountRef.current.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      width / -2,
      width / 2,
      height / 2,
      height / -2,
      1,
      1000
    );
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    mountRef.current.appendChild(renderer.domElement);

    const loader = new THREE.TextureLoader();
    const loadedTextures = images.map((img) => loader.load(img));
    texturesRef.current = loadedTextures;

    const mat = new THREE.ShaderMaterial({
      uniforms: {
        dispFactor: { value: 0.0 },
        effectFactor: { value: 0.5 },
        texture1: { value: loadedTextures[0] || null },
        texture2: { value: loadedTextures[1] || loadedTextures[0] || null },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
    });
    materialRef.current = mat;

    const geometry = new THREE.PlaneGeometry(width, height);
    const mesh = new THREE.Mesh(geometry, mat);
    scene.add(mesh);

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      const newW = mountRef.current.clientWidth || window.innerWidth;
      const newH = mountRef.current.clientHeight || window.innerHeight;

      camera.left = newW / -2;
      camera.right = newW / 2;
      camera.top = newH / 2;
      camera.bottom = newH / -2;
      camera.updateProjectionMatrix();

      renderer.setSize(newW, newH);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (renderer.domElement && mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [images]);

  useEffect(() => {
    if (!materialRef.current || texturesRef.current.length <= 1) return;
    if (activeIndex === currentIndexRef.current) return;

    const nextTex = texturesRef.current[activeIndex];
    const currTex = texturesRef.current[currentIndexRef.current];

    if (!nextTex || !currTex) return;

    materialRef.current.uniforms.texture1.value = currTex;
    materialRef.current.uniforms.texture2.value = nextTex;
    materialRef.current.uniforms.dispFactor.value = 0;

    gsap.to(materialRef.current.uniforms.dispFactor, {
      value: 1,
      duration: 1.2,
      ease: "power2.inOut",
      onComplete: () => {
        currentIndexRef.current = activeIndex;
      },
    });
  }, [activeIndex]);

  return (
    <div
      ref={mountRef}
      className="webgl-canvas-container"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
