// Configuración básica de Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x303662); // Fondo morado oscuro para contrastar y que sea estetico
document.getElementById('scene-container').appendChild(renderer.domElement);

// Luces
const ambientLight = new THREE.AmbientLight(0xffffff, 2); // Luz ambiental
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 4); // Luz direccional
directionalLight.position.set(1, 1, 1).normalize();
scene.add(directionalLight);

// Cargar el modelo 3D
const loader = new THREE.GLTFLoader();
loader.load(
    'assets/knifes/csgo_karambit_autotronic/scene.gltf', // Ruta al archivo .gltf o .glb
    function (gltf) {
        const model = gltf.scene;
        scene.add(model);

        // Ajustar la cámara para que el modelo sea visible
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        camera.position.copy(center);
        camera.position.x += size.x * 1.5; // Ajusta la posición de la cámara
        camera.position.y += size.y * 1.5;
        camera.position.z += size.z * 1.5;
        camera.lookAt(center);
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% cargado');
    },
    function (error) {
        console.error('Error al cargar el modelo:', error);
        alert('Hubo un error al cargar el modelo 3D. Por favor, inténtalo de nuevo más tarde.');
    }
);

// Agregar OrbitControls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Suaviza los movimientos
controls.dampingFactor = 0.05; // Ajusta la suavidad
controls.screenSpacePanning = false;
controls.minDistance = 1; // Zoom mínimo
controls.maxDistance = 100; // Zoom máximo
controls.maxPolarAngle = Math.PI / 1; // Limita la rotación vertical

let rotationSpeed = 1; // Velocidad de rotación inicial

// Animación
function animate() {
    requestAnimationFrame(animate);
    controls.update(); // Actualiza los controles en cada frame
    if (controls.autoRotate) {
        scene.rotation.y += rotationSpeed * 0.01;
    }
    renderer.render(scene, camera);
}
animate();

// Ajustar el tamaño del renderizador cuando la ventana cambie de tamaño
window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Control del menú
const hamburger = document.querySelector('.hamburger input');
const menu = document.getElementById('menu');

hamburger.addEventListener('change', function() {
    if (this.checked) {
        menu.style.transform = 'translateX(0)';
    } else {
        menu.style.transform = 'translateX(100%)';
    }
});

// Cambiar el color de fondo
const bgColorInput = document.getElementById('bgColor');
bgColorInput.addEventListener('input', function() {
    renderer.setClearColor(this.value);
});

// Cambiar el color y la intensidad de la luz ambiental
const ambientLightColorInput = document.getElementById('ambientLightColor');
const ambientLightIntensityInput = document.getElementById('ambientLightIntensity');

ambientLightColorInput.addEventListener('input', function() {
    ambientLight.color.set(this.value);
});

ambientLightIntensityInput.addEventListener('input', function() {
    ambientLight.intensity = this.value;
});

// Cambiar el color y la intensidad de la luz direccional
const directionalLightColorInput = document.getElementById('directionalLightColor');
const directionalLightIntensityInput = document.getElementById('directionalLightIntensity');

directionalLightColorInput.addEventListener('input', function() {
    directionalLight.color.set(this.value);
});

directionalLightIntensityInput.addEventListener('input', function() {
    directionalLight.intensity = this.value;
});

// Control del zoom
const zoomInput = document.getElementById('zoom');
zoomInput.addEventListener('input', function() {
    const zoomLevel = this.value;
    controls.minDistance = 1;
    controls.maxDistance = zoomLevel;
    camera.position.setLength(zoomLevel);
});

// Rotación automática
const autoRotateInput = document.getElementById('autoRotate');
autoRotateInput.addEventListener('change', function() {
    controls.autoRotate = this.checked;
});

// Velocidad de rotación
const rotationSpeedInput = document.getElementById('rotationSpeed');
rotationSpeedInput.addEventListener('input', function() {
    rotationSpeed = this.value;
});
