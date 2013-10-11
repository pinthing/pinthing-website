// create pins & lower them
(function() {
    var i = 0;
    for (var z=-100; z<=100; z+=50) {
        for (var x=-50; x<=50; x+=50) {
            pin = new THREE.Mesh( new THREE.CubeGeometry( 48, 50, 48 ),
                                  new THREE.MeshLambertMaterial( { color: 0xDF1F1F, wireframe: false, opacity:1 } ) );
                                  //new THREE.MeshLambertMaterial( { color: 0x908080, wireframe: false, opacity:1 } ) );
            pin.position.set(x,50/2,z);
            pin.name = "pin";
            pin.index = i;
            i++;
            scene.add( pin );
        }
    }
    
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
    }

})();

// create_pins();

get_pins = function() {
    var pins = {};
    for ( var i in scene.children ) {
        var child = scene.children[i];
        if (child.name == "pin") {
            pins[parseInt(child.index)] = child;
        }
    }
    return pins;
}

pins = get_pins();

    
function show(char) {
    movements = set_display(bitmap_3x5[char]);

    for (var i in movements) {
        if (movements[i] == 1) {
            var tween = new TWEEN.Tween( { y: .1, pin: pins[i]} )
               .to( { y: 1 }, 500 )
               .easing( TWEEN.Easing.Cubic.InOut )
               .onUpdate( function () {
                    this.pin.scale.y = this.y;
                    this.pin.position.y = 25*this.y;
                    this.pin.material.ambient.r = 1 - this.y;
                    this.pin.material.ambient.g = 1 - this.y;
                    this.pin.material.ambient.b = 1 - this.y;
               } ).start()
        } else if (movements[i] == -1) {
            var tween = new TWEEN.Tween( { y: 1, pin: pins[i]} )
               .to( { y: .1 }, 500 )
               .easing( TWEEN.Easing.Cubic.InOut )
               .onUpdate( function () {
                    this.pin.scale.y = this.y;
                    this.pin.position.y = 25*this.y;
                    this.pin.material.ambient.r = 1 - this.y;
                    this.pin.material.ambient.g = 1 - this.y;
                    this.pin.material.ambient.b = 1 - this.y;
               } ).start()
        }
    }
}

function init_array(initial_value, size){
    // create a new array
    var the_array = []
    for(var i = 0; i < size; i++) {
        the_array[i] = initial_value;
    }
    return the_array;
}

function set_display(number) {
    var current_state = get_current_display_as_list();
    var desired_state = decimal_to_binary(number,15);
    var difference = init_array(0,15);
        
    for (var x=0; x<15; x++){
        difference[x] = desired_state[x] - current_state[x];
    }
    return difference;
} 

function get_current_display_as_list() {
    var base = 2;
    var total = 0;
    var digits = init_array(0,15);
    for ( var i in scene.children ) {    
        var child = scene.children[i];
        if (child.name == "pin") {    
            if (Math.round(child.scale.y * 10) / 10 == 1) {
                digits[child.index] = 1;
            }
        }
    }
    return digits;
}

String.prototype.reverse=function(){return this.split("").reverse().join("");}

function decimal_to_binary(d, padding) {
    var bin = Number(d).toString(2);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 15 : padding;
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