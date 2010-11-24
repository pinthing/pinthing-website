
box = function(width, height, depth, x, y, z){ 
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

Object.prototype.size = function () {
  var len = this.length ? --this.length : -1;
    for (var k in this)
      len++;
  return len;
}


1) Draw pins

var x = 0;
pins = []
for (var i=-700; i<=700; i+=200) {
    for (var j=-400; j<=400; j+=200) {
        var pin = box(50, 300, 50, j, 0, i);
        pins[x] = pin
        scene.addObject( pin );  
        x++;
    }
}



// Raise all pins
for (pin in pins) { pins[pin].position.y = 150 }