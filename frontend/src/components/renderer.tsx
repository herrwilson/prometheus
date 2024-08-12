import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Delaunator from 'delaunator';
import '../styles/App.css';
import axios from 'axios';

interface Point {
  x: number;
  y: number;
  z: number;
}

const Renderer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;

    const fetchPoints = async () => {
      try {
        const response = await axios.get('/api/points');  // Ensure this matches the backend endpoint
        const points: Point[] = response.data;

        // Prepare point data for Delaunator (2D projection for simplicity)
        const coords = points.flatMap((p: Point) => [p.x, p.y]);

        // Compute Delaunay triangulation
        const delaunay = new Delaunator(coords);
        const triangles = delaunay.triangles;

        const geometry = new THREE.BufferGeometry();
        const vertices = new Float32Array(points.length * 3);

        points.forEach((point: Point, index: number) => {
          vertices[index * 3] = point.x;
          vertices[index * 3 + 1] = point.y;
          vertices[index * 3 + 2] = point.z;
        });

        geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        const material = new THREE.PointsMaterial({ color: 0xffffff, size: 1 });
        const pointsMesh = new THREE.Points(geometry, material);
        scene.add(pointsMesh);

        // Create a geometry for the triangulation lines
        const lineGeometry = new THREE.BufferGeometry();
        const lineVertices = new Float32Array(triangles.length * 3);

        for (let i = 0; i < triangles.length; i += 3) {
          const p0 = points[triangles[i]];
          const p1 = points[triangles[i + 1]];
          const p2 = points[triangles[i + 2]];

          lineVertices[i * 3] = p0.x;
          lineVertices[i * 3 + 1] = p0.y;
          lineVertices[i * 3 + 2] = p0.z;

          lineVertices[(i + 1) * 3] = p1.x;
          lineVertices[(i + 1) * 3 + 1] = p1.y;
          lineVertices[(i + 1) * 3 + 2] = p1.z;

          lineVertices[(i + 2) * 3] = p2.x;
          lineVertices[(i + 2) * 3 + 1] = p2.y;
          lineVertices[(i + 2) * 3 + 2] = p2.z;
        }

        lineGeometry.setAttribute('position', new THREE.BufferAttribute(lineVertices, 3));
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 });
        const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
        scene.add(lineMesh);

        // Add axes helpers
        const axesHelper = new THREE.AxesHelper(5);
        scene.add(axesHelper);
        camera.position.z = 1000;
        animate();
      } catch (error) {
        console.error('Error fetching points:', error);
      }
    };

    fetchPoints();

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} id="app" />;
};

export default Renderer;
