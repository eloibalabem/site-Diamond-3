import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

export default function DiamondCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    
    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.z = 2.5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true
    });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // HDRI Loader
    const loader = new RGBELoader();
    loader.load(
      'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_09_1k.hdr',
      (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture;
      }
    );

    // Lights
    const light1 = new THREE.PointLight(0xff4d6d, 0.8);
    light1.position.set(2, 2, 2);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xff0033, 0.6);
    light2.position.set(-2, -1, 2);
    scene.add(light2);

    const ambient = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambient);

    // Geometry
    const geometry = new THREE.OctahedronGeometry(1, 1);

    // Material
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xffccd5,
      metalness: 0,
      roughness: 0,
      transmission: 1,
      thickness: 1,
      ior: 2.4,
      reflectivity: 1,
      clearcoat: 1,
      clearcoatRoughness: 0,
      envMapIntensity: 1.5
    });

    const diamond = new THREE.Mesh(geometry, material);
    scene.add(diamond);

    // Animation
    let animationFrameId: number;
    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      diamond.rotation.y += 0.004;
      diamond.rotation.x += 0.002;
      renderer.render(scene, camera);
    }
    animate();

    // Resize
    const handleResize = () => {
      if (!canvasRef.current) return;
      camera.aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}
