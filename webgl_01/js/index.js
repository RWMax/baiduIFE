var main = {
    init: function(){
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        this.renderer.setClearColor(0x333333);
        this.renderer.setSize(window.innerWidth,window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.canvas = this.renderer.domElement;
        document.body.appendChild(this.canvas);
        this.canvasHeight = this.canvas.clientHeight;
        this.canvasWidth = this.canvas.clientWidth;        
        this.scene  = new THREE.Scene();
        this.amblight = new THREE.AmbientLight(0xaaaaaa);
        this.camera = new THREE.PerspectiveCamera(45, 
            this.canvasWidth / this.canvasHeight, 1, 20000);
        
        this.camera.position.set(500, 1000, 500);
        this.control = new THREE.OrbitControls(this.camera); 
        this.scene.add(this.camera,  this.amblight); 
        this.buildCar();  
        this.animation();

    },
    animation:function(){
        requestAnimationFrame(this.animation.bind(this));
        this.renderer.render(this.scene, this.camera);
    },
    resizeCanvas: function(){
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.aspect = window.innerWidth/window.innerHeight;
        this.camera.updateProjectionMatrix();
    },
    buildCar: function(){        
        var material = new THREE.MeshLambertMaterial({
            color: 0xeeeeee,
        });
        var lambertMaterial = new THREE.MeshLambertMaterial({
            color: 0x779966,
        });        
        var ground = new THREE.CubeGeometry(1000 ,2, 1000, 10, 10, 10);
        var meshGround = new THREE.Mesh(ground, lambertMaterial);
        this.scene.add(meshGround);

        var car = new THREE.Group();
        var body = new THREE.CubeGeometry(500, 200, 200, 10, 10, 10);
        var meshBody = new THREE.Mesh(body, material);

        var wheel = new THREE.TorusGeometry(40, 16, 36, 48);
        var meshWheel = new THREE.Mesh(wheel, material);
        var meshWheel1 = meshWheel.clone();
        var meshWheel2 = meshWheel.clone();
        var meshWheel3 = meshWheel.clone();
        meshWheel.position.set(-150, -90, 100);
        meshWheel1.position.set(-150, -90, -100);
        meshWheel2.position.set(150, -90, 100);
        meshWheel3.position.set(150, -90, -100);

        meshBody.castShadow = true;
        meshBody.receiveShadow = true;
        meshWheel.castShadow = true;
        meshWheel1.castShadow = true;
        meshWheel2.castShadow = true;
        meshWheel3.castShadow = true;
        meshGround.receiveShadow = true;
        car.add(meshBody, meshWheel, meshWheel1, meshWheel2, meshWheel3);
        car.position.y = 144;
        car.position.x = 100;
        this.scene.add(car);
    }
};

main.init();
console.log(main.canvasWidth, main.canvasHeight);
window.onresize = function(){
    main.resizeCanvas();
};