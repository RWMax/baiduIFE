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

        this.spotlight = new THREE.SpotLight(0x999999, 1, 0, Math.PI / 2);
        this.spotlight.position.set(0, 1000, 800);
        this.spotlight2 = new THREE.SpotLight(0xffffff, 1, 5000, Math.PI / 6, 1, 2);
        this.spotlight2.position.set(0, 3000, 0);
        this.spotlight2.castShadow = true;
        this.spotlight2.shadow.mapSize.width = 2048;
        this.spotlight2.shadow.mapSize.height = 2048;
        this.spotlight2.shadow.camera.far = 3000;
        this.spotLightHelper = new THREE.SpotLightHelper(this.spotlight2);
        this.scene.add( this.spotLightHelper );

        this.amblight = new THREE.AmbientLight(0x222222);
        this.camera = new THREE.PerspectiveCamera(45, 
            this.canvasWidth / this.canvasHeight, 1, 20000);
        
        this.camera.position.set(2000, 5000, 4000);
        this.control = new THREE.OrbitControls(this.camera); 
        this.scene.add(this.camera,  this.amblight,this.spotlight2,this.spotlight,);
        this.buildCar();  
        this.animation();

    },
    animation:function(){
        this.carUpdate();
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
        var material = new THREE.MeshLambertMaterial({
            color: 0xeeeeee,
        });
        var lambertMaterial = new THREE.MeshPhongMaterial({
            color: 0x779966,
            emissive: 0x333333,
        });        
        var ground = new THREE.CubeGeometry(5000 ,2, 4000, 10, 10, 10);
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
        car.position.y = 146;
        car.position.x = 100;
        car.rotation.y = 1;
        this.spotlight2.target = car;
        this.scene.add(car);
        this.car = car;
    },
    isKeyDown: {
        87: false, // w
        83: false, // s
        65: false, // a
        68: false, // d
    },
    keyControl: function(){
        _this = this;
        window.onkeydown = function(event){
            _this.isKeyDown[event.which] = true;
        };
        window.onkeyup = function(event){
            _this.isKeyDown[event.which] = false;
        };
    },
    carUpdate: function(){
        if (this.isKeyDown[87] === true){this.carGo()};
        if (this.isKeyDown[83] === true){this.carBack()};
        if (this.isKeyDown[65] === true){this.carTurnL()};
        if (this.isKeyDown[68] === true){this.carTurnR()};
    },
    carGo: function(){
        var radian = this.car.rotation.y % (Math.PI * 2);
        var speed = 40;
        var distanceX = this.car.position.x + Math.cos(radian) * speed;
        var distanceZ = this.car.position.z - Math.sin(radian) * speed;
        this.car.position.x = distanceX;
        this.car.position.z = distanceZ;
    },
    carBack: function(){
        var radian = this.car.rotation.y;
        var speed = 40;
        var distanceX = this.car.position.x - Math.cos(radian) * speed;
        var distanceZ = this.car.position.z + Math.sin(radian) * speed;
        this.car.position.x = distanceX;
        this.car.position.z = distanceZ;
    },
    carTurnL: function(){
        this.car.rotation.y += 0.1;
    },
    carTurnR: function(){
        this.car.rotation.y -= 0.1;
    }
};

main.init();
main.keyControl();
window.onresize = function(){
    main.resizeCanvas();
};

