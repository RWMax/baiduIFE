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
        this.spotlight = new THREE.SpotLight(0x999999, 1, 3000);
        this.spotlight.position.set(0, 1000, 800);
        this.spotlight1 = new THREE.SpotLight(0x999999, 1, 3000);
        this.spotlight1.position.set(0, 1000, -800);
        this.spotlight2 = new THREE.SpotLight(0xffffff, 1, 2000, Math.PI / 8, 0, 0.9);
        this.spotlight2.position.set(100, 1800, 500);
        this.spotlight2.castShadow = true;
        this.spotlight2.shadow.mapSize.width = 2048;
        this.spotlight2.shadow.mapSize.height = 2048;
        this.spotLightHelper = new THREE.SpotLightHelper(this.spotlight2);
        this.scene.add( this.spotLightHelper );
        this.amblight = new THREE.AmbientLight(0x555555);
        this.camera = new THREE.PerspectiveCamera(45, 
            this.canvasWidth / this.canvasHeight, 1, 20000);
        
        this.camera.position.set(500, 1000, 500);
        this.control = new THREE.OrbitControls(this.camera); 
        this.scene.add(this.camera,  this.amblight,this.spotlight2, this.spotlight, this.spotlight1); 
        this.buildCar();  
        this.animation();

    },
    animation:function(){
        this.spotLightHelper.update();
        requestAnimationFrame(this.animation.bind(this));
        this.renderer.render(this.scene, this.camera);
    },
    resizeCanvas: function(){
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.aspect = window.innerWidth/window.innerHeight;
        this.camera.updateProjectionMatrix();
    },
    buildCar: function(){        
        var carBodyMtl = new THREE.MeshLambertMaterial({
            color: 0xeeeeee,
            map: new THREE.TextureLoader().load('img/1.jpg'),
        });

        var carWheelMtl = new THREE.MeshLambertMaterial({
            color: 0xeeeeee,
            map: new THREE.TextureLoader().load('img/2.jpg'),
        });
        var groundMtl = new THREE.MeshLambertMaterial({
            color: 0x779966,
            emissive:0x111111,
            map: new THREE.TextureLoader().load('img/3.jpg'),
        });   
        var carBodyMtls = [
            carWheelMtl,
            carWheelMtl,
            carBodyMtl,
            carBodyMtl,
            carBodyMtl,
            carBodyMtl,
        ]; 
        var ground = new THREE.CubeGeometry(1000 ,2, 1000, 10, 10, 10);
        var meshGround = new THREE.Mesh(ground, groundMtl);
        this.scene.add(meshGround);
        var car = new THREE.Group();
        var body = new THREE.CubeGeometry(500, 200, 200, 10, 10, 10);
        var meshBody = new THREE.Mesh(body, carBodyMtls);

        var wheel = new THREE.TorusGeometry(40, 16, 36, 48);
        var meshWheel = new THREE.Mesh(wheel, carWheelMtl);
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
        this.spotlight2.target = car;
        this.scene.add(car);
    },
};

main.init();
console.log(main.canvasWidth, main.canvasHeight);
window.onresize = function(){
    main.resizeCanvas();
};