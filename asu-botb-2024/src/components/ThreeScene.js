import React, { useEffect } from 'react';
import * as THREE from 'three';
import { TextureLoader } from 'three';

function ThreeScene() {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const fieldGeometry = new THREE.PlaneGeometry(300, 300); 
    const fieldMaterial = new THREE.MeshBasicMaterial({ color: 0x228B22 }); 
    const field = new THREE.Mesh(fieldGeometry, fieldMaterial);
    field.rotation.x = -2; 
    field.position.y = -0.5; 
    scene.add(field);
    
    const ballGeometry = new THREE.SphereGeometry(20, 32, 32);
    const ballMaterial = new THREE.MeshBasicMaterial({ color: 0x964B00 });
    const ball = new THREE.Mesh(ballGeometry, ballMaterial);
    ball.scale.set(1, 1, 1); 
    ball.position.set(0, 10, 65);
    scene.add(ball);

  const personGeometry = new THREE.CylinderGeometry(5, 5, 30, 32); 
  const personMaterial = new THREE.MeshBasicMaterial({ color: 0xFFD700 });
  const person = new THREE.Mesh(personGeometry, personMaterial);

  const ballInitialPosition = { x: 0, y: 10, z: 80 };
  ball.position.set(ballInitialPosition.x, ballInitialPosition.y, ballInitialPosition.z);

  const targetPosition = person.position;

  renderer.domElement.addEventListener('click', () => {
    ball.position.set(ballInitialPosition.x, ballInitialPosition.y, ballInitialPosition.z);

    const animateBall = () => {
        const direction = new THREE.Vector3(
            targetPosition.x - ball.position.x,
            targetPosition.y - ball.position.y,
            targetPosition.z - ball.position.z
        ).normalize();
        

        const speed = 0.5;
        
        ball.position.x += direction.x * speed;
        ball.position.y += direction.y * speed;
        ball.position.z += direction.z * speed;
  
        if (ball.position.distanceTo(targetPosition) > speed) {
            requestAnimationFrame(animateBall);
        } else {
            console.log('Hit!');
        }
    };
    
    animateBall();
});


person.position.set(0, 15, -75); 

scene.add(person);

    camera.position.set(0, 100, 100);
    camera.lookAt(scene.position);
    const light = new THREE.PointLight(0xFFFFFF, 1, 1000);
    light.position.set(0, 100, 100);
    scene.add(light);

    const animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);


  return null;
}

export default ThreeScene;
