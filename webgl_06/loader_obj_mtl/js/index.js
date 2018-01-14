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

        this.spotlight = new THREE.SpotLight(0x999999, 1, 0, Math.PI / 3,2);
        this.spotlight.position.set(0, 1000, 800);
        this.spotlight2 = new THREE.SpotLight(0xffffff, 1, 5000, Math.PI / 6, 1,2);
        this.spotlight2.position.set(0, 3000, 0);
        this.spotlight2.castShadow = true;
        this.spotlight2.shadow.mapSize.width = 2048;
        this.spotlight2.shadow.mapSize.height = 2048;
        this.spotlight2.shadow.camera.far = 3000;
        this.amblight = new THREE.AmbientLight(0x222222);
        this.camera = new THREE.PerspectiveCamera(45, 
            this.canvasWidth / this.canvasHeight, 1, 20000);
        this.camera.position.set(0, 200, 200);
        this.control = new THREE.OrbitControls(this.camera); 
        this.clock = new THREE.Clock();
        this.scene.add(this.camera,  this.amblight,this.spotlight2,this.spotlight,);
        this.addTreeMod();
        this.addGround();
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
    addGround: function(){
        var shape = new THREE.CubeGeometry(100, 2, 100);
        var material = new THREE.MeshPhongMaterial({
            color: 0x779966,
            emissive: 0x333333,
        });
        ground = new THREE.Mesh(shape, material);
        ground.receiveShadow = true;
        this.scene.add(ground);
        this.ground = ground;
    },
    addTreeMod: function(){
        _this = this;
        var mtlLoader = new THREE.MTLLoader();
        mtlLoader.setCrossOrigin(true); 
        var objLoader = new THREE.OBJLoader();
        mtlLoader.load('model/tree/materials.mtl', function(material){
            objLoader.load('model/tree/model.obj',function(object){
                _this.tree = object;
                var children = object.children;
                for (var i = 0; i < children.length; i++) {
                    children[i].castShadow= true;
                    children[i].receiveShadow = true;
                }
                object.scale.set(100, 100, 100);
                object.translateY(32);
                _this.scene.add(object);
            });
            objLoader.setMaterials(material);
        });
    },
};

main.init();
window.onresize = function(){
    main.resizeCanvas();
};

