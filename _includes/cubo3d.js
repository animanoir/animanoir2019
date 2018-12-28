// Cubito 3D hecho en three.js

// Selecciona el div con el # especificado.
let cubo3d = document.querySelector('#cubo3d')
// Estos valores dependen de los del CSS para que cuadre bien el cubo en su posición.
let CANVAS_WIDTH = 420;
let CANVAS_HEIGHT = 420;

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, (CANVAS_WIDTH / CANVAS_HEIGHT), 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
let geometry = new THREE.CircleGeometry(5, 32);

// Imágenes a cargar en cada lado del cubo.
let cubeMaterials = [
    new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('{{ "/assets/gifs/yo.jpg" }}'),
        side: THREE.DoubleSide
    }),
    new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('{{ "/assets/gifs/yo.jpg" }}'),
        side: THREE.DoubleSide
    })
];
let material = new THREE.MeshFaceMaterial(cubeMaterials);
let cube = new THREE.Mesh(geometry, material);



// Velocidades de rotación
let rotX = 0.008;
let rotY = 0.009;

//Cubo
scene.add(cube);

camera.position.z = 10;



renderer.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);
cubo3d.appendChild(renderer.domElement);

animate();

function animate() {
    cube.rotation.x += rotX;
    cube.rotation.y += rotY;
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
