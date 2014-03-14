// PinThing - https://github.com/pinthing/pinthing.com
var scene, camera, brush, plane, projector, renderer, controls,
    objectHovered, objectFocusAtMouseDown, objectFocusAtMouseUp,
    isMouseDown = false, onMouseDownPosition;

init();
animate();

function init() {
    onMouseDownPosition = new THREE.Vector2();

    // Scene
    scene = new THREE.Scene();

    // Camera
    var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
    var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
    camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
    scene.add(camera);
    camera.lookAt(scene.position);  
    //camera.position.set(0,150,300);
    camera.position.set(-104,331,263);

    // Brush
    brush = new THREE.Mesh( new THREE.CubeGeometry( 50, 1, 50 ),
                            new THREE.MeshLambertMaterial( { color: 0x303030, wireframe: false, opacity:1 } ) );
    brush.position.set(0,1/2,0);
    brush.name = "brush";
    scene.add( brush );

    // Plane
    var planeW = 3;
    var planeH = 5;
    plane = new THREE.Mesh( new THREE.PlaneGeometry( planeW*50, planeH*50, planeW, planeH ), 
                            new THREE.MeshBasicMaterial( { color: 0x000000, wireframe: true, opacity:.5 } ) );
    plane.rotation.x = -Math.PI/2;
    plane.position.set(0,0,0 );
    plane.name = "plane";
    scene.add(plane);

    // Projector
    projector = new THREE.Projector();

    // Lights
    var ambientLight = new THREE.AmbientLight( 0x404040 );
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

    // Renderer
    if ( Detector.webgl ) 
        renderer = new THREE.WebGLRenderer( {antialias:true} );
    else
        renderer = new THREE.CanvasRenderer(); 

    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    document.body.appendChild( renderer.domElement );

    // Controls
    controls = new THREE.OrbitControls( camera, renderer.domElement );

    // Events
    THREEx.WindowResize(renderer, camera);
    document.addEventListener( 'mousemove', onDocumentMouseMove, false );
    document.addEventListener( 'mouseup', onDocumentMouseUp, false );
    document.addEventListener( 'mousedown', onDocumentMouseDown, false );
    
}

function onDocumentMouseMove( event ) {
    event.preventDefault();

    // Find mouse position mapped to the 3D scene
    var vector = new THREE.Vector3( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1, 0.5 );
    projector.unprojectVector( vector, camera );
    var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );

    // Create an array containing all objects in the scene with which the ray intersects
    intersects = raycaster.intersectObjects( scene.children );
    
    if ( objectHovered ) {
        objectHovered.material.opacity = 1;
        objectHovered = null;
    }
    
    // if there is one (or more) intersections
    if ( intersects.length > 0 ) {
        intersect = intersects[ 0 ].object == brush ? intersects[ 1 ] : intersects[ 0 ];
        if (intersect) {
            brush.visible = true;
            brush.position.x = Math.floor( (intersects[0].point.x + 25) / 50 ) * 50;
            brush.position.z = Math.floor( (intersects[0].point.z + 25) / 50 ) * 50;

            if ( intersect.object != plane ) {
                objectHovered = intersect.object;
                objectHovered.material.opacity = 1;
                brush.visible = false;
            }
        }
    } else {
        brush.visible = false;
    }
}

function onDocumentMouseUp( event ) {
    event.preventDefault();

    // Find mouse position mapped to the 3D scene
    var vector = new THREE.Vector3( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1, 0.5 );
    projector.unprojectVector( vector, camera );
    var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );

    // Create an array containing all objects in the scene with which the ray intersects
    intersects = raycaster.intersectObjects( scene.children );
    
    if ( objectFocusAtMouseUp ) {
        objectFocusAtMouseUp = null;
    }

    // if there is one (or more) intersections
    if ( intersects.length > 0 ) {
        intersect = intersects[ 0 ].object == brush ? intersects[ 1 ] : intersects[ 0 ];
        if (intersect) {
            if ( intersect.object != plane ) {
                objectFocusAtMouseUp = intersect.object;
            }
        }
    }
    if ( objectFocusAtMouseDown && objectFocusAtMouseUp ) {
        if (objectFocusAtMouseDown.uuid === objectFocusAtMouseUp.uuid) {
            if (Math.round(objectFocusAtMouseUp.scale.y * 10) / 10 == 0.1) {
                var tween = new TWEEN.Tween( { y: .1, pin: objectFocusAtMouseUp} )
                   .to( { y: 1 }, 250 )
                   .easing( TWEEN.Easing.Cubic.InOut )
                   .onUpdate( function () {
                        this.pin.scale.y = this.y;
                        this.pin.position.y = 25*this.y;
                        this.pin.material.ambient.r = 1 - this.y;
                        this.pin.material.ambient.g = 1 - this.y;
                        this.pin.material.ambient.b = 1 - this.y;
                    })
                    .onComplete( function() {   
                    }).start();
            } else {
                var tween = new TWEEN.Tween( { y: 1, pin: objectFocusAtMouseUp} )
                   .to( { y: .1 }, 250 )
                   .easing( TWEEN.Easing.Cubic.InOut )
                   .onUpdate( function () {
                        this.pin.scale.y = this.y;
                        this.pin.position.y = 25*this.y;
                        this.pin.material.ambient.r = 1 - this.y;
                        this.pin.material.ambient.g = 1 - this.y;
                        this.pin.material.ambient.b = 1 - this.y;
                    })
                    .onComplete( function() {
                    }).start();
            }
        }
    }
}

function onDocumentMouseDown( event ) {
    event.preventDefault();

    isMouseDown = true;
    onMouseDownPosition.x = event.clientX;
    onMouseDownPosition.y = event.clientY;

    // Find mouse position mapped to the 3D scene
    var vector = new THREE.Vector3( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1, 0.5 );
    projector.unprojectVector( vector, camera );
    var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );

    // Create an array containing all objects in the scene with which the ray intersects
    intersects = raycaster.intersectObjects( scene.children );
    
    if ( objectFocusAtMouseDown ) {
        objectFocusAtMouseDown = null;
    }

    // if there is one (or more) intersections
    if ( intersects.length > 0 ) {
        intersect = intersects[ 0 ].object == brush ? intersects[ 1 ] : intersects[ 0 ];
        if (intersect) {
            if ( intersect.object != plane ) {
                objectFocusAtMouseDown = intersect.object;
            }
        }
    }
}


function animate() {
    requestAnimationFrame( animate );
    controls.update();
    renderer.render( scene, camera );
    TWEEN.update();
}
