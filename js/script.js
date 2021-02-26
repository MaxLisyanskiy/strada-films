document.addEventListener("DOMContentLoaded", function() {
	let SCENE;
	let CAMERA;
	let RENDERER;
	let LOADING_MANAGER;
	let IMAGE_LOADER;
	let OBJ_LOADER;
	let CONTROLS;
	let MOUSE;
	let RAYCASTER;

	let TEXTURE;
	let OBJECT;

	function initScene() {
		SCENE = new THREE.Scene();

		initLights();
	}

	function initLights() {
		const ambient = new THREE.AmbientLight(0xffffff, 0.7);
		SCENE.add(ambient);

		const directionalLight = new THREE.DirectionalLight(0xffffff);
		directionalLight.position.set(0, 1, 1);
		SCENE.add(directionalLight);
	}

	function initCamera() {
		CAMERA = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
		CAMERA.position.z = 100;
	}

	function initRenderer() {
		RENDERER = new THREE.WebGLRenderer({ alpha: true });
		RENDERER.setPixelRatio(window.devicePixelRatio);
		RENDERER.setSize(window.innerWidth, window.innerHeight);
	}
});