var main = {
    init: function() {
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        this.renderer.setClearColor('#fff');
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.canvas = this.renderer.domElement;
        document.body.appendChild(this.canvas);
        this.canvasHeight = this.canvas.clientHeight;
        this.canvasWidth = this.canvas.clientWidth;
        this.scene = new THREE.Scene();
        //light
        this.spotlight = new THREE.SpotLight(0x999999, 1, 300);
        this.spotlight.position.set(0, 100, 80);
        this.spotlight2 = new THREE.SpotLight(0xffffff, 1, 400, Math.PI / 8, 1, 0.5);
        this.spotlight2.position.set(200, 200, 200);
        this.spotlight2.castShadow = true;
        this.spotlight2.shadow.mapSize.width = 2048;
        this.spotlight2.shadow.mapSize.height = 2048;
        //this.spotLightHelper = new THREE.SpotLightHelper(this.spotlight2);
        //this.scene.add(this.spotLightHelper);
        this.amblight = new THREE.AmbientLight(0xaaaaaa);
        //camera
        this.camera = new THREE.PerspectiveCamera(45,
            this.canvasWidth / this.canvasHeight, 1, 20000);
        this.camera.position.set(0, 30, 50);
        //control
        this.control = new THREE.OrbitControls(this.camera);

        this.scene.add(this.camera, this.amblight, this.spotlight2, this.spotlight);
        this.addCube();
        this.animation();

    },
    animation: function() {
        this.teapot.rotation.x += 0.01;
        this.teapot.rotation.y += 0.01;
        //this.spotLightHelper.update();
        requestAnimationFrame(this.animation.bind(this));
        this.renderer.render(this.scene, this.camera);
    },
    getMouseSite: function() {

    },
    render: function() {
        this.spotLightHelper.update();
        this.renderer.render(this.scene, this.camera);
    },
    resizeCanvas: function() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
    },
    addCube: function() {
        _this = this;
        var lambertMaterial = new THREE.MeshLambertMaterial({
            color: 0x779966,
        });

        shaderMaterial = new THREE.ShaderMaterial({
            vertexShader: document.getElementById('vs').textContent,
            fragmentShader: document.getElementById('fs').textContent,
            uniforms: {
                ucolor: {
                    type: 'v3',
                    value: new THREE.Color('#cca4e3')
                },
                ulight: {
                    type: 'v3',
                    value: this.spotlight2.position
                }
            },

        });
        var teapotGeo = new THREE.TeapotBufferGeometry(10, 20);
        var teapot = new THREE.Mesh(teapotGeo, shaderMaterial);
        teapot.material.side = THREE.DoubleSide;
        this.scene.add(teapot);
        this.teapot = teapot;
    }
};

main.init();
console.log(main.canvasWidth, main.canvasHeight);
window.onresize = function() {
    main.resizeCanvas();
};