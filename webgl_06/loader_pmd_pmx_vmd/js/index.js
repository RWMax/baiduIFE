var main = {
    init: function(){
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        this.renderer.setClearColor('#FFF6EF');
        this.renderer.setSize(window.innerWidth,window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
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
        this.camera.position.set(0, 18, 13);

        this.control = new THREE.OrbitControls(this.camera); 
        this.control.enabled = false;
        this.clock = new THREE.Clock();
        this.scene.add(this.camera,  this.amblight,this.spotlight2,this.spotlight,);
        this.addMmdModer();
        //this.addGround();
        this.animation();
    },
    animation:function(){
        if (this.ready) { // && this.mmdHelper
            this.mmdHelper.animate(this.clock.getDelta());
        }
        this.camera.lookAt(0, 16, 0);
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
    addMmdModer: function(){
        _this = this;
        var mmdLoader = new THREE.MMDLoader();
        var mmdHelper = new THREE.MMDHelper();
        var mmdFile = 'model/kizunaai/kizunaai.pmx';
        var AudioFile = 'mp3/Ririri.mp3';
        var vmdFile = [
            'model/vmd/Ririri.vmd'
        ];
        
        var audioParams = { delayTime: 0};

        start = new Date().getTime();
        _this.model = null;
        _this.audio  = null;
        _this.listener = null;

        var progressbar = document.querySelector('.progressbar');
        mmdLoader.load(mmdFile, vmdFile,function(object){
            _this.model = object;
            _callback();
        });      
        mmdLoader.loadAudio( AudioFile, function (audio, listener) {
            _this.audio = audio;
            _this.listener = listener;
            _callback();
        },function(object){
            var num = Math.round(object.loaded / object.total * 100, 2);
            progressbar.innerText = num  + '%';
        });

        function _callback(){
            if (!_this.model || !_this.audio || !_this.listener) {
                return;
            }
            _this.model.position.y = 2;
            mmdHelper.add(_this.model);
            mmdHelper.setAnimation(_this.model);
            mmdHelper.setPhysics(_this.model);
            // add music
            mmdHelper.setAudio(_this.audio, _this.listener, audioParams);
            mmdHelper.unifyAnimationDuration();
            _this.listener.position.z = 1;
            _this.scene.add(_this.model, _this.audio, _this.listener);
            _this.ready = true;
            _this.mmdHelper = mmdHelper;
            _this.control.enabled = true;
            console.log(new Date().getTime() - start);
            progressbar.style.display = 'none';
            // CCDIKHelper
            // ikHelper = new THREE.CCDIKHelper(_this.model);
            // ikHelper.visible = true;
            // _this.scene.add(ikHelper);
            // _this.ikHelper = ikHelper;

            // MMDPhysicsHelper
            // physicsHelper = new THREE.MMDPhysicsHelper(_this.model);
            // physicsHelper.visible = false;
            // _this.scene.add(physicsHelper);
            // _this.physicsHelper = physicsHelper; 
        };
    },
};

main.init();
window.onresize = function(){
    main.resizeCanvas();
};

