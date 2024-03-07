const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(600, 400);
document.getElementById('robotContainer').appendChild(renderer.domElement);

// Iluminación
const ambientLight = new THREE.AmbientLight(0x404040, 30);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
scene.add(ambientLight);
scene.add(directionalLight);

// Cargador de modelos
const loader = new THREE.GLTFLoader();

// Variable para mantener la referencia al modelo cargado
let model;

loader.load('robot/scene.gltf', function(gltf) {
    model = gltf.scene; // Asigna el modelo cargado a la variable model
    scene.add(model);
    animate();
}, undefined, function(error) {
    console.error(error);
});

// Posición de la cámara
camera.position.z = 5;

// Rotación del modelo
function animate() {
    requestAnimationFrame(animate);

    // Asegúrate de que model está definido antes de intentar acceder a sus propiedades
    if (model) {
        model.rotation.y += 0.01;
    }

    renderer.render(scene, camera);
}
