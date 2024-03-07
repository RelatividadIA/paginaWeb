const contenedor = document.getElementById('contenedor-3d');

// Ajustes de cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, contenedor.offsetWidth / contenedor.offsetHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(contenedor.offsetWidth, contenedor.offsetHeight);
contenedor.appendChild(renderer.domElement); // Monta el renderizador dentro del contenedor

// Luz
const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(0, 0, 50).normalize();
scene.add(light);

// Objeto 3D - parámetros que se pueden cambiar
const geometry = new THREE.DodecahedronGeometry(30, 0);
const material = new THREE.MeshPhongMaterial({ color: 0x333333, specular: 0x999999, shininess: 50 });
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

camera.position.z = 80;

// Función de animación
function animate() {
    requestAnimationFrame(animate);

    torusKnot.rotation.x += 0.03;
    torusKnot.rotation.y += 0.03;

    renderer.render(scene, camera);
}

animate();
