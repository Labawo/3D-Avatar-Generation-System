import React, { useEffect, useRef, useState } from 'react';
import * as Three from 'three';

const ThreeScene = ({ texture }) => {
    const canvasRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        let isMounted = true;
        const scene = new Three.Scene();
        const camera = new Three.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        const renderer = new Three.WebGLRenderer({ canvas: canvasRef.current });
        renderer.setSize(450, 450);

        // Enable shadow rendering in the renderer
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = Three.PCFSoftShadowMap; // Optional: soft shadows

        const geometry = new Three.SphereGeometry(1, 32, 32);
        const material = new Three.MeshStandardMaterial({
            map: texture,
            side: Three.DoubleSide,
        });

        const sphere = new Three.Mesh(geometry, material);
        sphere.castShadow = true;
        sphere.receiveShadow = true;
        scene.add(sphere);

        const ambientLight = new Three.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const coneGeometry = new Three.ConeGeometry(0.8, 1, 32);
        const coneMaterial = new Three.MeshStandardMaterial({ color: 0xff0000 });

        const cone = new Three.Mesh(coneGeometry, coneMaterial);
        const coneInitialPosition = new Three.Vector3(0, -1.05, 0);
        cone.position.copy(coneInitialPosition);
        scene.add(cone);

        camera.position.z = 5;

        const sphereRotation = { x: 0, y: 0 };

        const handleMouseDown = () => {
            setIsDragging(true);
        };

        const handleMouseMove = (event) => {
            if (!isDragging) return;

            sphereRotation.x += event.movementY * 0.01;
            sphereRotation.y += event.movementX * 0.01;

            sphere.rotation.x = sphereRotation.x;
            sphere.rotation.y = sphereRotation.y;

            const conePosition = coneInitialPosition.clone();
            conePosition.applyAxisAngle(new Three.Vector3(0, 1, 0), sphereRotation.y);
            conePosition.applyAxisAngle(new Three.Vector3(1, 0, 0), sphereRotation.x);
            cone.position.copy(conePosition);

            cone.rotation.x = sphere.rotation.x;
            cone.rotation.y = sphere.rotation.y;
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        const animate = () => {
            if (!isDragging) {
                sphere.rotation.y += 0.01;
            }
            if (isMounted) {
                renderer.render(scene, camera);
                requestAnimationFrame(animate);
            }
        };

        animate();

        if (canvasRef.current) {
            canvasRef.current.addEventListener('mousedown', handleMouseDown);
        }
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            isMounted = false;
            if (canvasRef.current) {
                canvasRef.current.removeEventListener('mousedown', handleMouseDown);
            }
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

    }, [texture, isDragging]);

    return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }}/>;
};

export default ThreeScene;
