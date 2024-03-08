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

    const fieldGeometry = new THREE.PlaneGeometry(300, 300); // Square field
    const fieldMaterial = new THREE.MeshBasicMaterial({ color: 0x228B22 }); // Green field
    const field = new THREE.Mesh(fieldGeometry, fieldMaterial);
    field.rotation.x = -2; // Rotate to lay flat
    field.position.y = -0.5; 
    scene.add(field);
    

    // Ball positioned at the center of the field
    const ballGeometry = new THREE.SphereGeometry(20, 32, 32);
    const ballMaterial = new THREE.MeshBasicMaterial({ color: 0x964B00 });
    const ball = new THREE.Mesh(ballGeometry, ballMaterial);
    ball.scale.set(1, 1, 1); 
    ball.position.set(0, 10, 65);
    scene.add(ball);

   // Significantly larger person positioned at one end of the field
  const personGeometry = new THREE.CylinderGeometry(5, 5, 30, 32); // Increased dimensions
  const personMaterial = new THREE.MeshBasicMaterial({ color: 0xFFD700 });
  const person = new THREE.Mesh(personGeometry, personMaterial);

  // Assuming the initial setup of scene, camera, renderer, person, and ball

  // Ball initial position
  const ballInitialPosition = { x: 0, y: 10, z: 80 };
  ball.position.set(ballInitialPosition.x, ballInitialPosition.y, ballInitialPosition.z);

  // Target (Person) position
  const targetPosition = person.position;

  // Event listener for click/tap to start the animation
  renderer.domElement.addEventListener('click', () => {
    // Reset ball position for repeated clicks
    ball.position.set(ballInitialPosition.x, ballInitialPosition.y, ballInitialPosition.z);

    // Animate the ball towards the person
    const animateBall = () => {
        // Calculate the direction vector from the ball to the person
        const direction = new THREE.Vector3(
            targetPosition.x - ball.position.x,
            targetPosition.y - ball.position.y,
            targetPosition.z - ball.position.z
        ).normalize();
        
        // Speed of the ball movement
        const speed = 0.5;
        
        // Update ball position
        ball.position.x += direction.x * speed;
        ball.position.y += direction.y * speed;
        ball.position.z += direction.z * speed;
        
        // Check if the ball has reached close to the target position
        // Here we use a simple distance check; you might want to adjust the threshold
        if (ball.position.distanceTo(targetPosition) > speed) {
            requestAnimationFrame(animateBall);
        } else {
            // Optionally reset or perform other actions once the ball "hits" the person
            console.log('Hit!');
        }
    };
    
    animateBall();
});


// Adjusting the position so the base of the person is at "ground" level
person.position.set(0, 15, -75); // The Y position is half the height to ensure it sits on the field

scene.add(person);

    camera.position.set(0, 100, 100);
    camera.lookAt(scene.position);
    const light = new THREE.PointLight(0xFFFFFF, 1, 1000);
    light.position.set(0, 100, 100);
    scene.add(light);

    // Animation loop
    const animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Clean up on unmount
    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  // Return null or a placeholder as this component does not render traditional DOM elements
  return null;
}

export default ThreeScene;
