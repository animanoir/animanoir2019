// Cubito 3D hecho en three.js

// Selecciona el div con el # especificado.
let cubo3d = document.querySelector('#cubo3d')
// Estos valores dependen de los del CSS para que cuadre bien el cubo en su posición.
let CANVAS_WIDTH = 450;
let CANVAS_HEIGHT = 450;

// Escenario
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, (CANVAS_WIDTH / CANVAS_HEIGHT), 0.1, 1000);
let renderer = new THREE.WebGLRenderer();

// Círculo
let textureLoader = new THREE.TextureLoader();
let texture1 = textureLoader.load('{{ "/assets/gifs/yo.jpg" }}');
let texture2 = textureLoader.load('{{ "/assets/gifs/yo3.jpg" }}');
let texture3 = textureLoader.load('{{ "/assets/gifs/yo2.jpg" }}');
let texture4 = textureLoader.load('{{ "/assets/gifs/qr-con-mi-sex-tape.jpg" }}');
let arrayTexturas = [texture1, texture2, texture3, texture4];

let circleGeom = new THREE.CircleGeometry(6, 32);
let circleMat = new THREE.MeshBasicMaterial({
    map: texture1,
    side: THREE.DoubleSide
});
let circleMesh = new THREE.Mesh(circleGeom, circleMat);
// Velocidades de rotación
let rotX = 0.00001;
let rotY = 0.006;
let swapSpeed = 333; //En ms.

scene.add(circleMesh);

// Función que cambia las texturas.
window.setInterval(swapTextures, swapSpeed);

camera.position.z = 10;
renderer.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);
cubo3d.appendChild(renderer.domElement);

animate();

// Funciones --------------------------------------

function animate() {
    circleMesh.rotation.x += rotX;
    circleMesh.rotation.y += rotY;
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Resize responsivo
window.addEventListener('resize', function () {
    let width = CANVAS_WIDTH;
    let height = CANVAS_HEIGHT;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

function swapTextures() {
    let i = Math.floor(Math.random()*arrayTexturas.length);
    console.log(i);
    circleMat.map = arrayTexturas[i];
    // if (circleMat.map === texture1) {
    //     circleMat.map = texture2;
    // } else {
    //     circleMat.map = texture1;
    // }
}