var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;

var container;

var camera;
var scene;
var renderer;

var cube, cube2, plane;

var targetRotation = 0;
var targetRotationOnMouseDown = 0;

var mouseX = 0;
var mouseXOnMouseDown = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

init();
setInterval(loop, 5000/60);

function box(width, height, depth, x, y, z){ 
    width = width | 100;
    height = height | 100;
    depth = depth | 100;
    var geo = new Cube( width, height, depth );
    for (var i = 0; i < geo.faces.length; i++) {
            geo.faces[i].color.setRGBA(1,1,1,1 );
    }
    thebox = new THREE.Mesh(geo, new THREE.MeshFaceColorFillMaterial() );
    thebox.position.x = x | 0;
    thebox.position.y = y | 0;
    thebox.position.z = z | 0;
    scene.addObject( thebox );
    return thebox
}

String.prototype.reverse=function(){return this.split("").reverse().join("");}

String.prototype.toCharCode = function(){
    var str = this.split(''), len = str.length, work = new Array(len);
    for (var i = 0; i < len; ++i){
        work[i] = String.charCodeAt(str[i]);
    }
    return work.join(',');
}

function decimalToBinary(d, padding) {
    var bin = Number(d).toString(2);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;
    while (bin.length < padding) {
        bin = "0" + bin;
    }
    bin = bin.reverse().split('');
    var digits = [];
    for (var i=0; i<padding; i++) {
        digits[i] = parseInt(bin[i]);
    }
    return digits;
}

function init_array(initial_value, size){
    // create a new array
    var the_array = []
    for(var i = 0; i < size; i++) {
        the_array[i] = initial_value;
    }
    return the_array;
}   

function get_value() {
    var base=2;
    var total = 0;
    for (var i = 0; i<40; i++) {
        if (pins[i].position.y > 100) {
            total += Math.pow(base,i);
        }
    }
    return total;
}

function get_value_as_list() {
    var base = 2;
    var total = 0;
    var digits = init_array(0,40);
    for (var i=0; i<40; i++) {
        if (pins[i].position.y > 100) {
            digits[i] = 1;
        }
    }
    return digits;
}

animation_counter = 100;
pin_movements = []
pin_move_flag = false;

function set_value(number) {
    var result = init_array(0,40);
    var firstNum = get_value_as_list();
    var secondNum = decimalToBinary(number,40);
    
    for (var x=0; x<40; x++){
        result[x] = secondNum[x] - firstNum[x];
    }
    //console.log(result);
    pin_movements = result;
    pin_move_flag = true;
}    

function show(value) {
    if (typeof(value) == "number") {
        set_value(value);
    } else if (typeof(value) == "string") {
        var result = init_array(0,40);
        var firstNum = get_value_as_list();
        var secondNum = decimalToBinary(bitmap(value), 40);

        for (var x=0; x<40; x++){
            result[x] = secondNum[x] - firstNum[x];
        }
        
        pin_movements = result;
        pin_move_flag = true;
    }
    return '';
}

s = show;

function bitmap(char){
    var asciicode = char.charCodeAt(0).toString();
    var bitmap = fontmap[asciicode];
    return bitmap;
}


function init() {

	container = document.createElement('div');
	container.style.left = 'auto';
	container.style.right = 'auto';
    container.style.textAlign = 'center';
	document.body.appendChild(container);

	var info = document.createElement('div');
	info.style.position = 'absolute';
	info.style.top = '25px';
	info.style.bottom = '1px';
	info.style.width = '100%';
	info.style.textAlign = 'center';
	info.innerHTML = 'PinMachine';
	container.appendChild(info);

	//camera = new THREE.Camera( 70, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000 );
	camera = new THREE.Camera( 50, 1.4, 1, 10000 );
    camera.position.x = -600;
	camera.position.y = 1500;
	camera.position.z = 1300;
	camera.target.position.y = 200;

	scene = new THREE.Scene();

	// Lights
	var ambientLight = new THREE.AmbientLight( 0x909090 );
	scene.addLight( ambientLight );

	var directionalLight = new THREE.DirectionalLight( 0x909090 );
	directionalLight.position.x = 0.62;
	directionalLight.position.y = 0.78;
	directionalLight.position.z = -0.09;
	
    directionalLight.position.normalize();
	scene.addLight( directionalLight );

	var pointLight = new THREE.PointLight( 0xff0000, 1 );
	scene.addLight( pointLight );


    // Pins
    var x = 0;
    pins = []
    for (var i=-600; i<=550; i+=150) {
        for (var j=-350; j<=350; j+=150) {
            var pin = box(10, 300, 10, j, 100, i);
            pins[x] = pin
            scene.addObject( pin );  
            x++;
        }
    }  
    

	renderer = new THREE.CanvasRenderer();
	renderer.setSize( parseInt(SCREEN_WIDTH*.8), parseInt(SCREEN_HEIGHT*.7));
	
	container.appendChild( renderer.domElement );

	document.addEventListener( 'mousedown', onDocumentMouseDown, false );
	document.addEventListener( 'touchstart', onDocumentTouchStart, false );
	document.addEventListener( 'touchmove', onDocumentTouchMove, false );
}

//

function onDocumentMouseDown( event ) {

	event.preventDefault();

	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	document.addEventListener( 'mouseup', onDocumentMouseUp, false );
	document.addEventListener( 'mouseout', onDocumentMouseOut, false );

	mouseXOnMouseDown = event.clientX - windowHalfX;
	targetRotationOnMouseDown = targetRotation;
}

function onDocumentMouseMove( event ) {

	mouseX = event.clientX - windowHalfX;

	targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.02;
}

function onDocumentMouseUp( event ) {

	document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
	document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
	document.removeEventListener( 'mouseout', onDocumentMouseOut, false );
}

function onDocumentMouseOut( event ) {

	document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
	document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
	document.removeEventListener( 'mouseout', onDocumentMouseOut, false );
}

function onDocumentTouchStart( event ) {

	if ( event.touches.length == 1 ) {

		event.preventDefault();

		mouseXOnMouseDown = event.touches[ 0 ].pageX - windowHalfX;
		targetRotationOnMouseDown = targetRotation;

	}
}

function onDocumentTouchMove( event ) {

	if ( event.touches.length == 1 ) {

		event.preventDefault();

		mouseX = event.touches[ 0 ].pageX - windowHalfX;
		targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.05;

	}
}

//
animation_stop = 5;
pin_movements = []
pin_move_flag = false;
animation_counter = 0;

function loop() {

	//plane.rotation.z = cube.rotation.y += ( targetRotation - cube.rotation.y ) * 0.05;
	//cube.rotation.y += ( targetRotation - cube.rotation.y ) * 0.05;
	if (pin_move_flag) {
	    //console.log('Moving!')
        for (var i=0; i<40; i++) {
            pins[i].position.y += 40*pin_movements[i];
        }
        animation_counter += 1;
        if (animation_counter >= animation_stop) {
            //console.log('Stopping!')
            pin_move_flag = false;
            animation_counter = 0;
        }
    }

	renderer.render(scene, camera);
}

