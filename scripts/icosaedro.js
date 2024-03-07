const contenedor = document.getElementById('contenedor-icosaedro');

// Ajustes de cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, contenedor.offsetWidth / contenedor.offsetHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(contenedor.offsetWidth, contenedor.offsetHeight);
contenedor.appendChild(renderer.domElement); // Monta el renderizador dentro del contenedor

// Luz
const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(10, 0, 50).normalize();
scene.add(light);

// Objeto 3D - parámetros que se pueden cambiar
const geometry = new THREE.IcosahedronGeometry(30, 0);
const material = new THREE.MeshPhongMaterial({ color: 0x555555, specular: 0x999999, shininess: 1 });
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

camera.position.z = 80;

// Función de animación
function animate() {
    requestAnimationFrame(animate);

    torusKnot.rotation.x += 0.01;
    torusKnot.rotation.y += 0.04;

    renderer.render(scene, camera);
}

animate();
