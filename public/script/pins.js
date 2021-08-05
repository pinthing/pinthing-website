import * as THREE from './vendor/three.module.js'

var plane, group, projector, objectHovered,
  objectFocusAtMouseDown, objectFocusAtMouseUp,
  isMouseDown = false, onMouseDownPosition = {};

var pinthingDefaults = {
  speed: 500,
  width: 15,
  length: 5
}

class PinThing {
  constructor(scene, width, length) {
    this.size = {width: width, length: length}
    this.speed = pinthingDefaults.speed
    this.halfHeight = 0.6
    this.interval = 0

    // Plane
    //plane = new THREE.Mesh( new THREE.PlaneGeometry( width*50, length*50, 32 ),
    plane = new THREE.Mesh( new THREE.BoxGeometry( width*5.0, length*5.0, .1 ),
                            new THREE.MeshBasicMaterial( { color: 0xdddddd,
                              wireframe: false,
                              opacity:1,
                              side: THREE.DoubleSide} ) )
    plane.rotation.x = -Math.PI/2
    plane.position.set(0,-.8,0)
    plane.name = "plane"
    plane.castShadow = false
    scene.add(plane)
    this.plane = plane

    /// Create pin array
    var group = new THREE.Group()
    group.name = "pins"
    var i = 0
    for (var z = 0; z < length * 5.0; z += 5.0) {
      for (var x = 0; x < width * 5.0; x += 5.0) {
        var pin = new THREE.Mesh( new THREE.BoxGeometry( 4.8, 5.0, 4.8 ),
                                  new THREE.MeshLambertMaterial({color: 0xDF1F1F}))
        pin.position.set(x, 5.0/2, z)
        pin.name = "pin-" + i
        i++
        group.add( pin )
      }
    }

    // Reposition pin array to center
    group.position.x = (-1 * width * 5.0 / 2) + 2.5
    group.position.z = (-1 * length * 5.0 / 2) + 2.5
    scene.add( group )
    this.pins = group
    this.random.parent = this
  }

  set(value) {
    if (Array.isArray(value)) {
      value.reverse()
      var pins = this.pins.children
      for (var i in value) {
        if ( i == pins.length) { break }
        if (value[i] == 0) {
          if (pins[i].scale.y == 1) {
            // Go down
            var tween = new TWEEN.Tween( { y: 1, pin: pins[i]} )
              .to( { y: .1 }, this.speed - 10 )
              .easing( TWEEN.Easing.Cubic.InOut )
              .onUpdate( (object) => {
                object.pin.scale.y = object.y
                object.pin.position.y = 2.5 * object.y
              } ).start()
            var tween2 = new TWEEN.Tween( { color: .12, pin: pins[i]} )
              .to( { color: .25 }, this.speed - 10 )
              .easing( TWEEN.Easing.Cubic.InOut )
              .onUpdate( (object) => {
                object.pin.material.color.g = object.color
                object.pin.material.color.b = object.color
              } ).start()
          } else if (pins[i].scale.y > 0.2) {
            this.unHalf(i, 0)
          }
        } else if (value[i] == 1) {
          if (pins[i].scale.y <= .1) {
            // Go up
            var tween = new TWEEN.Tween( { y: .1, pin: pins[i]} )
              .to( { y: 1 }, this.speed - 10 )
              .easing( TWEEN.Easing.Cubic.InOut )
              .onUpdate( (object) => {
                object.pin.scale.y = object.y
                object.pin.position.y = 2.5 * object.y
              } ).start()
            var tween2 = new TWEEN.Tween( { color: .25, pin: pins[i]} )
              .to( { color: .12 }, this.speed - 10 )
              .easing( TWEEN.Easing.Cubic.InOut )
              .onUpdate( (object) => {
                object.pin.material.color.g = object.color
                object.pin.material.color.b = object.color
              } ).start()
          } else if (pins[i].scale.y < 0.9) {
            this.unHalf(i, 1)
          }
        } else if (value[i] == 2) {
          if (i > -1) {this.half(i)}
        }
      }
    } else if (Number.isInteger(value)) {
      this.set(this.number2Array(value, this.size.width * this.size.length))
    } else if (typeof value == "bigint") {
      this.set(this.number2Array(value, this.size.width * this.size.length))
    }
  }

  half(n) {
    var pins = this.pins.children
    var h = this.halfHeight
    if (n < pins.length) {
      if (pins[n].scale.y == 1) {
        // Go down
        var tween = new TWEEN.Tween( { y: 1, pin: pins[n]} )
          .to( { y: h }, this.speed - 10 )
          .easing( TWEEN.Easing.Cubic.InOut )
          .onUpdate( (object) => {
            object.pin.scale.y = object.y
            object.pin.position.y = 2.5 * object.y
          } ).start()
        var tween2 = new TWEEN.Tween( { color: .12, pin: pins[n]} )
          .to( { color: .18 }, this.speed - 10 )
          .easing( TWEEN.Easing.Cubic.InOut )
          .onUpdate( (object) => {
            object.pin.material.color.g = object.color
            object.pin.material.color.b = object.color
          } ).start()
      }
      if (pins[n].scale.y <= .1) {
        // Go up
        var tween = new TWEEN.Tween( { y: .1, pin: pins[n]} )
          .to( { y: h }, this.speed - 10 )
          .easing( TWEEN.Easing.Cubic.InOut )
          .onUpdate( (object) => {
            object.pin.scale.y = object.y
            object.pin.position.y = 2.5 * object.y
          } ).start()
        var tween2 = new TWEEN.Tween( { color: .25, pin: pins[n]} )
          .to( { color: .18 }, this.speed - 10 )
          .easing( TWEEN.Easing.Cubic.InOut )
          .onUpdate( (object) => {
            object.pin.material.color.g = object.color
            object.pin.material.color.b = object.color
          } ).start()
      }
    }
  }

  unHalf(n, upOrDown) {
    var pins = this.pins.children
    var h = this.halfHeight
    if (n < pins.length && pins[n].scale.y == h) {
      if (upOrDown == 0) {
        // Go down
        var tween = new TWEEN.Tween( { y: h, pin: pins[n]} )
          .to( { y: .1 }, this.speed - 10 )
          .easing( TWEEN.Easing.Cubic.InOut )
          .onUpdate( (object) => {
            object.pin.scale.y = object.y
            object.pin.position.y = 2.5 * object.y
          } ).start()
        var tween2 = new TWEEN.Tween( { color: .18, pin: pins[n]} )
          .to( { color: .25 }, this.speed - 10 )
          .easing( TWEEN.Easing.Cubic.InOut )
          .onUpdate( (object) => {
            object.pin.material.color.g = object.color
            object.pin.material.color.b = object.color
          } ).start()
      }
      if (upOrDown == 1) {
        // Go up
        var tween = new TWEEN.Tween( { y: h, pin: pins[n]} )
          .to( { y: 1 }, this.speed - 10 )
          .easing( TWEEN.Easing.Cubic.InOut )
          .onUpdate( (object) => {
            object.pin.scale.y = object.y
            object.pin.position.y = 2.5 * object.y
          } ).start()
        var tween2 = new TWEEN.Tween( { color: .18, pin: pins[n]} )
          .to( { color: .12 }, this.speed - 10 )
          .easing( TWEEN.Easing.Cubic.InOut )
          .onUpdate( (object) => {
            object.pin.material.color.g = object.color
            object.pin.material.color.b = object.color
          } ).start()
      }
    }
  }

  up() {
    var total_size = BigInt(this.size.width) * BigInt(this.size.length)
    this.set(2n**total_size-1n)
  }

  down() {
    this.set(0)
  }

  random = {
    set: function() {
      var array = new Array(this.parent.pins.children.length).fill(0)
      for (var i in array) {
        array[i] = Math.round(Math.random())
      }
      this.parent.set(array)
    },
    start: function() {
      this.set()
      this.parent.interval = setInterval(this.set.bind(this), this.parent.speed)
    },
    stop: function() {
      clearInterval(this.parent.interval)
    }
  }

  number2String(num, length = 0) {
    return num.toString(2).padStart(length,'0')
  }

  number2Array(num, length = 0) {
    return this.number2String(num, length).split('').map(Number)
  }

}

function init_pins(width, length) {
  if (scene.getObjectByName('pins') !== undefined) {
    scene.remove(scene.getObjectByName('pins'))
    scene.remove(scene.getObjectByName('plane'))
  }
  var pinthing = new PinThing(scene, width, length)
  window.pinthing = pinthing
  document.addEventListener( 'mousedown', onDocumentMouseDown, false )
}

window.pinthingDefaults = pinthingDefaults
window.init_pins = init_pins
init_pins(pinthingDefaults.width, pinthingDefaults.length)

function onDocumentMouseDown( event ) {
  event.preventDefault()

  isMouseDown = true
  onMouseDownPosition.x = event.clientX
  onMouseDownPosition.y = event.clientY

    // Find mouse position mapped to the 3D scene
    var vector = new THREE.Vector3( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1, 0.5 );
    //projector.unprojectVector( vector, camera );
    vector.unproject(camera);
    var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );

    // Create an array containing all objects in the scene with which the ray intersects
    var intersects = raycaster.intersectObjects( scene.children );

    if ( objectFocusAtMouseDown ) {
        objectFocusAtMouseDown = null;
    }

    // if there is one (or more) intersections
    if ( intersects.length > 0 ) {
        var intersect = intersects[ 0 ];
        if (intersect) {
            if ( intersect.object != plane ) {
                objectFocusAtMouseDown = intersect.object;

            }
        }
    }
    // console.log(objectFocusAtMouseDown)
}