import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function Satellite({ className = '', style = {}, isDark = false }) {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const animationIdRef = useRef(null);
  const ambientRef = useRef(null);
  const directionalRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    camera.position.set(0, 0, 5);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setClearColor(isDark ? 0x000000 : 0xffffff, 0);
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 0.7 : 1.0);
    ambientRef.current = ambientLight;
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, isDark ? 1.0 : 0.9);
    directionalLight.position.set(5, 5, 5);
    directionalRef.current = directionalLight;
    scene.add(directionalLight);

    const loader = new GLTFLoader();
    let model = null;
    const publicUrl = (process.env.PUBLIC_URL || '').replace(/\/$/, '');
    const modelUrl = `${publicUrl}/satellite.glb`;
    loader.load(
      modelUrl,
      (gltf) => {
        model = gltf.scene;

        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);

        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = false;
            child.receiveShadow = false;
          }
        });
        scene.add(model);
      },
      undefined,
      (error) => {
        // Optionally integrate error reporting here
      }
    );

    const resize = () => {
      const width = 1000;
      const height = 1000;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    resize();

    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      if (model) {
        model.rotation.y += -0.003;
        model.rotation.x += 0.002;
      }
      renderer.render(scene, camera);
    };
    animate();

    const ro = new ResizeObserver(() => resize());
    ro.observe(container);

    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
      ro.disconnect();
      if (renderer) {
        renderer.dispose();
      }
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, [isDark]);

  // React to theme changes without re-creating scene where possible
  useEffect(() => {
    const renderer = rendererRef.current;
    const ambient = ambientRef.current;
    const directional = directionalRef.current;
    if (!renderer || !ambient || !directional) return;
    renderer.setClearColor(isDark ? 0x000000 : 0xffffff, 0);
    ambient.intensity = isDark ? 0.7 : 1.0;
    directional.intensity = isDark ? 1.0 : 0.9;
  }, [isDark]);

  return (
    <div ref={containerRef} className={className} style={style} />
  );
}