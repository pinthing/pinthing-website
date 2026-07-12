import * as THREE from './vendor/three.module.js'
import { OrbitControls } from './OrbitControls.js'

var scene, camera, renderer, raycaster, pointer, INTERSECTED, pointerDownElement = {name: null}

init_scene()

function init_scene() {
  // Scene
  scene = new THREE.Scene()

  // Camera
  camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.01, 20000 )

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize( window.innerWidth, window.innerHeight )
  document.body.appendChild( renderer.domElement )
  renderer.setClearColor( 0xffffff )

  // Raycaster
  raycaster = new THREE.Raycaster()

  // Pointer
  pointer = new THREE.Vector2();

  // Lights
  var ambientLight = new THREE.AmbientLight( 0x101010 );
  scene.add( ambientLight );

  var directionalLight = new THREE.DirectionalLight( 0xffffff );
  directionalLight.position.x = 1;
  directionalLight.position.y = 1;
  directionalLight.position.z = .75;
  directionalLight.position.normalize();
  scene.add( directionalLight );

  var directionalLight = new THREE.DirectionalLight( 0x808080 );
  directionalLight.position.x = -1;
  directionalLight.position.y = 1;
  directionalLight.position.z = -0.75;
  directionalLight.position.normalize();
  scene.add( directionalLight );

  var directionalLight = new THREE.DirectionalLight( 0xfffff );
  directionalLight.position.x = 1;
  directionalLight.position.y = 800;
  directionalLight.position.z = .75;
  directionalLight.position.normalize();
  scene.add( directionalLight );


  var directionalLight = new THREE.DirectionalLight( 0xffffff );
  directionalLight.position.x = 1;
  directionalLight.position.y = -1;
  directionalLight.position.z = 0;
  directionalLight.position.normalize();
  scene.add( directionalLight );

  // Reposition camera
  camera.position.x = -10.0
  camera.position.z = 50.0
  camera.position.y = 50.0

  // Controls
  var controls = new OrbitControls( camera, renderer.domElement, scene)
  controls.listenToKeyEvents(window)
  controls.autoRotate = false

  window.THREE = THREE
  window.scene = scene
  window.camera = camera

  // Events
  THREEx.WindowResize(renderer, camera)
  document.addEventListener( 'mousemove', onPointerMove, true);
  //document.addEventListener( 'mousedown', onPointerDown, true);
  //document.addEventListener( 'mouseup', onPointerUp, true);
  document.addEventListener( 'touchmove', onPointerMove, true );
  document.addEventListener( 'touchstart', onPointerDown, true);
  document.addEventListener( 'touchend', onPointerUp, true);

  document.addEventListener( 'pointermove', onPointerMove, true);
  document.addEventListener( 'pointerup', onPointerUp, true);
  document.addEventListener( 'pointerdown', onPointerDown, true);
}

function onPointerMove( event ) {
  pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  getIntersections()
  if (INTERSECTED != null) {
    // console.log("PointerMove: " + INTERSECTED.name)
  }
}

function onPointerDown( event ) {
  if (INTERSECTED != null) {
    // console.log("PointerDown: " + INTERSECTED.name)
    pointerDownElement.name = INTERSECTED.name
    pointerDownElement.object = INTERSECTED
  }
}

function onPointerUp( event ) {
  if (INTERSECTED != null) {
    // console.log("PointerUp: " + INTERSECTED.name)
    if (INTERSECTED.name == pointerDownElement.name) {
      if (pointerDownElement.object.parent.name == "checkbox") {
        //console.log("Checkbox!")
        if (pointerDownElement.object.parent.getObjectByName('checkmark').visible) {
          pointerDownElement.object.parent.getObjectByName('checkmark').visible = false
          pinthing.up()
          stopClock()
        } else {
          if (snakeClockRunning == true) {
            snakeGame.startSnake()
          }
          if (snakeGameRunning == true) {
            snakeGame.startGame()
          }
          pointerDownElement.object.parent.getObjectByName('checkmark').visible = true
          startClock()
        }
      }
    }
  }
  pointerDownElement.name = null
}

function getIntersections() {
  var intersect
	raycaster.setFromCamera( pointer, camera );

	const intersects = raycaster.intersectObjects( scene.children, true );

	if ( intersects.length > 0 ) {

		if ( INTERSECTED != intersects[ 0 ].object ) {

  	  INTERSECTED = intersects[ 0 ].object;
      //console.log('Intersected: ' + INTERSECTED.name)

		}

	} else {
		INTERSECTED = null;
	}
}

const animate = function () {
	requestAnimationFrame( animate )
	renderer.render( scene, camera )
  TWEEN.update()
}



animate()

