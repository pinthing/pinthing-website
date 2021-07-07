import { SVGLoader } from './vendor/SVGLoader.js';
Math.TAU = Math.PI*2;

var bitmap_3x5 = {
  ' ':
    ["   ",
     "   ",
     "   ",
     "   ",
     "   "],

  '0':
    ["ooo",
     "o o",
     "o o",
     "o o",
     "ooo"],

  '1':
    ["  o",
     "  o",
     "  o",
     "  o",
     "  o"],

  '2':
    ["ooo",
     "  o",
     "ooo",
     "o  ",
     "ooo"],

  '3':
    ["ooo",
     "  o",
     "ooo",
     "  o",
     "ooo"],

  '4':
    ["o o",
     "o o",
     "ooo",
     "  o",
     "  o"],

  '5':
    ["ooo",
     "o  ",
     "ooo",
     "  o",
     "ooo"],

  '6':
    ["ooo",
     "o  ",
     "ooo",
     "o o",
     "ooo"],

  '7':
    ["ooo",
     "  o",
     "  o",
     "  o",
     "  o"],

  '8':
    ["ooo",
     "o o",
     "ooo",
     "o o",
     "ooo"],

  '9':
    ["ooo",
     "o o",
     "ooo",
     "  o",
     "  o"],

  '01':
    ["ooo o",
     "o o o",
     "o o o",
     "o o o",
     "ooo o"],
  
  '02':
    ["ooo ooo",
     "o o   o",
     "o o ooo",
     "o o o  ",
     "ooo ooo"],
  
  '03':
    ["ooo ooo",
     "o o   o",
     "o o ooo",
     "o o   o",
     "ooo ooo"],   
  
  '04':
    ["ooo o o",
     "o o o o",
     "o o ooo",
     "o o   o",
     "ooo   o"],
  
  '05':
    ["ooo ooo",
     "o o o  ",
     "o o ooo",
     "o o   o",
     "ooo ooo"],   
  
  '06':
    ["ooo ooo",
     "o o o  ",
     "o o ooo",
     "o o o o",
     "ooo ooo"],
  
  '07':
    ["ooo ooo",
     "o o   o",
     "o o   o",
     "o o   o",
     "ooo   o"], 
  
  '08':
    ["ooo ooo",
     "o o o o",
     "o o ooo",
     "o o o o",
     "ooo ooo"],

  '09':
    ["ooo ooo",
     "o o o o",
     "o o ooo",
     "o o   o",
     "ooo   o"],      

  '10':
    ["o ooo",
     "o o o",
     "o o o",
     "o o o",
     "o ooo"],

  '11':
    ["o o",
     "o o",
     "o o",
     "o o",
     "o o"],

  '12':
    ["o ooo",
     "o   o",
     "o ooo",
     "o o  ",
     "o ooo"],

  '13':
    ["o ooo",
     "o   o",
     "o ooo",
     "o   o",
     "o ooo"],

  '14':
    ["o o o",
     "o o o",
     "o ooo",
     "o   o",
     "o   o"],

  '15':
    ["o ooo",
     "o o  ",
     "o ooo",
     "o   o",
     "o ooo"],

  '16':
    ["o ooo",
     "o o  ",
     "o ooo",
     "o o o",
     "o ooo"],

  '17':
    ["o ooo",
     "o   o",
     "o   o",
     "o   o",
     "o   o"],

  '18':
    ["o ooo",
     "o o o",
     "o ooo",
     "o o o",
     "o ooo"],

  '19':
    ["o ooo",
     "o o o",
     "o ooo",
     "o   o",
     "o   o"],   

  '20':
    ["ooo ooo",
     "  o o o",
     "ooo o o",
     "o   o o",
     "ooo ooo"],
  
  '21':
    ["ooo o",
     "  o o",
     "ooo o",
     "o   o",
     "ooo o"],
  
  '22':
    ["ooo ooo",
     "  o   o",
     "ooo ooo",
     "o   o  ",
     "ooo ooo"],  

  '23':
    ["ooo ooo",
     "  o   o",
     "ooo ooo",
     "o     o",
     "ooo ooo"],
  
  '24':
    ["ooo o o",
     "  o o o",
     "ooo ooo",
     "o     o",
     "ooo   o"],

  '25':
    ["ooo ooo",
     "  o o  ",
     "ooo ooo",
     "o     o",
     "ooo ooo"],
  
  '26':
    ["ooo ooo",
     "  o o  ",
     "ooo ooo",
     "o   o o",
     "ooo ooo"],   
  
  '27':
    ["ooo ooo",
     "  o   o",
     "ooo   o",
     "o     o",
     "ooo   o"],   
  
  '28':
    ["ooo ooo",
     "  o o o",
     "ooo ooo",
     "o   o o",
     "ooo ooo"],   
  
  '29':
    ["ooo ooo",
     "  o o o",
     "ooo ooo",
     "o     o",
     "ooo   o"],  
  
  '30':
    ["ooo ooo",
     "  o o o",
     "ooo o o",
     "  o o o",
     "ooo ooo"],
  
  '31':
    ["ooo o",
     "  o o",
     "ooo o",
     "  o o",
     "ooo o"],
  
  '32':
    ["ooo ooo",
     "  o   o",
     "ooo ooo",
     "  o o  ",
     "ooo ooo"],
  
  '33':
    ["ooo ooo",
     "  o   o",
     "ooo ooo",
     "  o   o",
     "ooo ooo"],
  
  '34':
    ["ooo o o",
     "  o o o",
     "ooo ooo",
     "  o   o",
     "ooo   o"],    
  
  '35':
    ["ooo ooo",
     "  o o  ",
     "ooo ooo",
     "  o   o",
     "ooo ooo"],  
  
  '36':
    ["ooo ooo",
     "  o o  ",
     "ooo ooo",
     "  o o o",
     "ooo ooo"],    
    
  '37':
    ["ooo ooo",
     "  o   o",
     "ooo   o",
     "  o   o",
     "ooo   o"],     
    
  '38':
    ["ooo ooo",
     "  o o o",
     "ooo ooo",
     "  o o o",
     "ooo ooo"],    
  
  '39':
    ["ooo ooo",
     "  o o o",
     "ooo ooo",
     "  o   o",
     "ooo   o"],   
   
  '40':
    ["o o ooo",
     "o o o o",
     "ooo o o",
     "  o o o",
     "  o ooo"],    
  
  '41':
    ["o o o",
     "o o o",
     "ooo o",
     "  o o",
     "  o o"],     
  
  '42':
    ["o o ooo",
     "o o   o",
     "ooo ooo",
     "  o o  ",
     "  o ooo"],  
  
  '43':
    ["o o ooo",
     "o o   o",
     "ooo ooo",
     "  o   o",
     "  o ooo"],     
  
  '44':
    ["o o o o",
     "o o o o",
     "ooo ooo",
     "  o   o",
     "  o   o"],   
  
  '45':
    ["o o ooo",
     "o o o  ",
     "ooo ooo",
     "  o   o",
     "  o ooo"],   
  
  '46':
    ["o o ooo",
     "o o o  ",
     "ooo ooo",
     "  o o o",
     "  o ooo"],     
  
  '47':
    ["o o ooo",
     "o o   o",
     "ooo   o",
     "  o   o",
     "  o   o"],  
  
  '48':
    ["o o ooo",
     "o o o o",
     "ooo ooo",
     "  o o o",
     "  o ooo"],  
  
  '49':
    ["o o ooo",
     "o o o o",
     "ooo ooo",
     "  o   o",
     "  o   o"],  
  
  '50':
    ["ooo ooo",
     "o   o o",
     "ooo o o",
     "  o o o",
     "ooo ooo"],

  '51':
    ["ooo o",
     "o   o",
     "ooo o",
     "  o o",
     "ooo o"],
  
  '52':
    ["ooo ooo",
     "o     o",
     "ooo ooo",
     "  o o  ",
     "ooo ooo"],
  
  '53':
    ["ooo ooo",
     "o     o",
     "ooo ooo",
     "  o   o",
     "ooo ooo"],
  
  '54':
    ["ooo o o",
     "o   o o",
     "ooo ooo",
     "  o   o",
     "ooo   o"], 
  
  '55':
    ["ooo ooo",
     "o   o  ",
     "ooo ooo",
     "  o   o",
     "ooo ooo"],
  
  '56':
    ["ooo ooo",
     "o   o  ",
     "ooo ooo",
     "  o o o",
     "ooo ooo"], 
  
  '57':
    ["ooo ooo",
     "o     o",
     "ooo   o",
     "  o   o",
     "ooo   o"],
  
  '58':
    ["ooo ooo",
     "o   o o",
     "ooo ooo",
     "  o o o",
     "ooo ooo"], 
  
  '59':
    ["ooo ooo",
     "o   o o",
     "ooo ooo",
     "  o   o",
     "ooo   o"],     
   
  
  '00':
    ["ooo ooo",
     "o o o o",
     "o o o o",
     "o o o o",
     "ooo ooo"],          

}


String.prototype.reverse = function() { return this.split("").reverse().join("") }

function positions2Array() {
  var pins = scene.getObjectByName('pins').children
  return pins.map(function(i) { return i.position.y == 2.5 ? 1 : 0 }).reverse()
}

function positions2String() {
  var pins = scene.getObjectByName('pins').children
  return pins.map(function(i) { return i.position.y == 2.5 ? 1 : 0 }).reverse().join('')
}

function positions2Number() {
  var pins = scene.getObjectByName('pins').children
  return BigInt('0b' + pins.map(function(i) { return i.position.y == 2.5 ? 1 : 0 }).reverse().join(''))
}

// TODO catch error if char is not in bitmap_3x5
function get_char(char, shift = 0) {
  var width = BigInt(pinthing.size.width)
  var value = BigInt("0b0"+bitmap_3x5[char][0].replace(/ /g,'0').replace(/o/g,'1').reverse()) << width*0n
  value |= BigInt("0b0"+bitmap_3x5[char][1].replace(/ /g,'0').replace(/o/g,'1').reverse()) << width*1n
  value |= BigInt("0b0"+bitmap_3x5[char][2].replace(/ /g,'0').replace(/o/g,'1').reverse()) << width*2n
  value |= BigInt("0b0"+bitmap_3x5[char][3].replace(/ /g,'0').replace(/o/g,'1').reverse()) << width*3n
  value |= BigInt("0b0"+bitmap_3x5[char][4].replace(/ /g,'0').replace(/o/g,'1').reverse()) << width*4n

  if (shift < 0) {
    value >>= BigInt(Math.abs(shift))
  } else if (shift > 0) {
    value <<= BigInt(shift)
  }
  return value
}

// Special Cases
// if hour == 11, shift hour to the right 2
// if minute starts with 1, << 1n
// if minute ends in 1, don't shift,
//  else >> 1n 
// 11:00 
// x1
// 11

function showTime(h = null, m = null) {
  var total_shift = 0n
  var hour_shift = 0n
  var minutes_shift = 0n

  // 15 pins:
  var separator = 2n**21n | 2n**51n
  // 16 pins:
  //var separator = 2n**22n | 2n**54n
  // 17 pins:
  //var separator = 2n**21n | 2n**51n  
  //var separator = 0n  
  
  if (h == null) {
    var date_hours = new Date().getHours() % 12 || 12
  } else {
    var date_hours = h
  }
  if (m == null) {
    var date_minutes = new Date().getMinutes().toString().padStart(2,'0')
  } else {
    var date_minutes = m.toString().padStart(2,'0')
  }

  // A mess of offsets to center the time on the display
  // Maybe it could be simplified?
  if (date_hours == 0) {
    hour_shift += 2n
    total_shift += 1n
  } else if (date_hours == 1) {
    hour_shift += 2n
    total_shift += 2n    
  } else if (date_hours > 1 && date_hours < 10) {
    hour_shift += 2n
    total_shift += 1n     
  } else if (date_hours == 11) {
    hour_shift += 2n
    total_shift += 1n
  } else if (date_hours == 22) {
    var separator = 0n
  }
  
  if (date_minutes[1] == "1") {
    total_shift -= 1n
  }
  if (date_minutes[0] == "1") {
    total_shift -= 1n
  }


  var hours = get_char(date_hours, hour_shift)
  var minutes = get_char(date_minutes, 8)
  // 15 pins:
  //var separator = 2n**21n | 2n**51n
  // 16 pins:
  //var separator = 2n**22n | 2n**54n
  // 17 pins:
  //var separator = 2n**21n | 2n**51n  
  //var separator = 0n
  var time = (hours | minutes | separator) >> total_shift
  // console.log('Time: ' + date_hours + ':' + date_minutes)
  pinthing.set(time)
}

var clock_interval
function startClock() {
  clock_interval = setInterval(function() {
    if (document.visibilityState == "visible") {
      showTime()
    } 
  }, 1000)
}
function stopClock() {
  clearInterval(clock_interval)
}

function loadSVG() {
  // instantiate a loader
  const loader = new SVGLoader();

  // load a SVG resource
  loader.load(
  	// resource URL
  	'../svg/checkbox.svg',
  	// called when the resource is loaded
  	function ( data ) {

  		const paths = data.paths;
  		const group = new THREE.Group();
      group.name = "checkbox"

  		for ( let i = 0; i < paths.length; i ++ ) {

        // console.log(paths[i].userData.id)

  			const path = paths[ i ];

  			const material = new THREE.MeshBasicMaterial( {
  				color: path.color,
  				side: THREE.DoubleSide,
  				depthWrite: true,
          transparent: false
  			} );

  			const shapes = SVGLoader.createShapes( path );

  			for ( let j = 0; j < shapes.length; j ++ ) {

  				const shape = shapes[ j ];
  				const geometry = new THREE.ShapeGeometry( shape );
          geometry.center()
  				const mesh = new THREE.Mesh( geometry, material );
          mesh.name = paths[i].userData.id
  				group.add( mesh );

  			}
        

  		}
      group.children[0].position.z -= .02
  		scene.add( group );
      
      group.applyMatrix4(new THREE.Matrix4().makeScale(-1, 1, 1));
      group.rotation.x = Math.TAU/4
      group.rotation.y = Math.TAU
      group.rotation.z = Math.TAU/2            
      group.position.y = -1
      group.position.x = 5
      group.position.z = 2.5

  	},
  	// called when loading is in progresses
  	function ( xhr ) {

  		// console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

  	},
  	// called when loading has errors
  	function ( error ) {

  		console.log( 'An error happened' );

  	}
  );
}

window.loadSVG = loadSVG
window.showTime = showTime
window.startClock = startClock
window.stopClock = stopClock
window.get_char = get_char
window.bitmap_3x5 = bitmap_3x5
window.positions2Array = positions2Array
window.positions2String = positions2String
window.positions2Number = positions2Number


var createCanvasTexture = function (width, height, text, border = false) {
    var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    //ctx.fillStyle = '#000000';
    ctx.lineWidth = 20;
    //ctx.fillRect(0.5, 0.5, canvas.width - 1, canvas.height - 1);
    if (border) {
      ctx.strokeStyle = '#ff0000';
      ctx.strokeRect(0.5, 0.5, canvas.width - 1, canvas.height - 1);
    }
    ctx.fillStyle = '#ffffff'; 
    ctx.fillStyle = '#000000';       
    ctx.font = "80px Helvetica";    
    ctx.fillText(text, 30*2, 50*2);
        
    var texture = new THREE.Texture(canvas);        
    texture.needsUpdate = true;
    return texture;
}

var createButton = function (name = "button", text = "", width = 0, height = 0, x = 0, z = 0, border = false) {
  var button = new THREE.Mesh(
      new THREE.BoxGeometry(width/25, .001, height/25),
      new THREE.MeshBasicMaterial({
          map: createCanvasTexture(width, height, text, border),
          opacity: 1,
          transparent: true,
      }));
  button.name = name
  button.position.x = x
  button.position.z = z
  button.position.y = -1
    
  button.visible = true
  return button
};

scene.add(createButton("button-label", "Show time: ", 450, 150, -9, 2.5))
// scene.add(createButton("button-label", "Full Screen: ", 525, 150, -7.6, -2.5))

loadSVG()
//startClock()
setTimeout(function() { scene.getObjectByName('checkmark').visible = false }, 200)

// Set Current Time
//pinthing.set(get_char(new Date().getHours()) | get_char(new Date().getMinutes().toString().padStart(2,'0'), 8) | 2n**21n | 2n**51n)


// d = new Date(); d.getHours()+d.getMinutes().toString().padStart(2,'0')
// "1029"
// d = new Date();  Number(d.getHours()+d.getMinutes().toString().padStart(2,'0'))
// 1029

// 9444732965739290427392n

/*
var mask = BigInt(0b000000000111000)
var value = BigInt("0b"+bitmap_3x5["3"].join('').reverse())

var value = bitmap_3x5["3"]
  .join('')           // Convert array to one string
  .replace(/ /g,'0')  // Convert spaces to zeros
  .replace(/o/g,'1')  // Convert "o" to ones
  .reverse()          // Reverse so that least significant bit is at the end

pinthing.set(1n | (value & mask) << 9n)

pinthing.set(BigInt("0b0"+bitmap_3x5[3][0]))
pinthing.set(BigInt("0b0"+bitmap_3x5[3][1].reverse()) << 9n)


pinthing.set(BigInt("0b0"+bitmap_3x5[3][0].reverse()) << 12n*0n)
pinthing.set(BigInt("0b0"+bitmap_3x5[3][1].reverse()) << 12n*1n)
pinthing.set(BigInt("0b0"+bitmap_3x5[3][2].reverse()) << 12n*2n)
pinthing.set(BigInt("0b0"+bitmap_3x5[3][3].reverse()) << 12n*3n)
pinthing.set(BigInt("0b0"+bitmap_3x5[3][4].reverse()) << 12n*4n)

var value = BigInt("0b0"+bitmap_3x5[3][0].reverse()) << 12n*0n
value |= BigInt("0b0"+bitmap_3x5[3][1].reverse()) << 12n*1n
value |= BigInt("0b0"+bitmap_3x5[3][2].reverse()) << 12n*2n
value |= BigInt("0b0"+bitmap_3x5[3][3].reverse()) << 12n*3n
value |= BigInt("0b0"+bitmap_3x5[3][4].reverse()) << 12n*4n

*/

