document.addEventListener("DOMContentLoaded", function() {
    const width = window.innerWidth,
        height = window.innerHeight,
        canvas = document.getElementById('canvas');

    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);

    const renderer = new THREE.WebGLRenderer({canvas: canvas});
    renderer.setClearColor(0x000000);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 5000);
    camera.position.set(0, 0, 1000);

    const light = new THREE.AmbientLight(0xffffff);
    scene.add(light);

    const geometry = new THREE.SphereGeometry(200, 12, 12);
    const material = new THREE.MeshBasicMaterial({color: 0x8b00ff, wireframe: true});
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);


    renderer.render(scene, camera);

});