
function addPins() {
    for (var x=-50; x<=50; x+=50) {
		for (var z=-100; z<=100; z+=50) {
			pin = new THREE.Mesh( new THREE.CubeGeometry( 48, 50, 48 ),
								  new THREE.MeshLambertMaterial( { color: 0xDF1F1F, wireframe: false, opacity:1 } ) );
			 				      //new THREE.MeshLambertMaterial( { color: 0x908080, wireframe: false, opacity:1 } ) );
			pin.position.set(x,50/2,z);
			pin.name = "pin";
			scene.add( pin );
		}
	}
}

// Add pins
addPins();


for ( var i in scene.children ) {
	var child = scene.children[i];
	if (child.name == "pin") {
		tween = new TWEEN.Tween( { y: 1, pin: child} )
		   .to( { y: .1 }, 1000 )
		   .easing( TWEEN.Easing.Cubic.InOut )
		   .onUpdate( function () {
				this.pin.scale.y = this.y;
				this.pin.position.y = 25*this.y;
				this.pin.material.ambient.r = 1 - this.y;
				this.pin.material.ambient.g = 1 - this.y;
				this.pin.material.ambient.b = 1 - this.y;
		   } ).start()
	}
};
