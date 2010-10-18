characters = {
 '32':["....."
     , "....."
     , "....."
     , "....."
     , "....."
     , "....."
     , "....."
     , "....."]

,'48':[".ooo."
     , "o...o"
     , "o..oo"
     , "o.o.o"
     , "oo..o"
     , "o...o"
     , ".ooo."
     , "....."]

,'49':["..o.."
     , ".oo.."
     , "..o.."
     , "..o.."
     , "..o.."
     , "..o.."
     , ".ooo."
     , "....."]
          
,'50':[".ooo."
     , "o...o"
     , "....o"
     , "...o."
     , "..o.."
     , ".o..."
     , "ooooo"
     , "....."]

,'51':["ooooo"
     , "...o."
     , "..o.."
     , "...o."
     , "....o"
     , "o...o"
     , ".ooo."
     , "....."]
     
,'52':["...o."
     , "..oo."
     , ".o.o."
     , "o..o."
     , "ooooo"
     , "...o."
     , "...o."
     , "....."]

,'53':["ooooo"
     , "o...."
     , "oooo."
     , "....o"
     , "....o"
     , "o...o"
     , ".ooo."
     , "....."]

,'54':["..oo."
     , ".o..."
     , "o...."
     , "oooo."
     , "o...o"
     , "o...o"
     , ".ooo."
     , "....."]

,'55':["ooooo"
     , "....o"
     , "...o."
     , "..o.."
     , ".o..."
     , ".o..."
     , ".o..."
     , "....."]

,'56':[".ooo."
     , "o...o"
     , "o...o"
     , ".ooo."
     , "o...o"
     , "o...o"
     , ".ooo."
     , "....."]

,'57':[".ooo."
     , "o...o"
     , "o...o"
     , ".oooo"
     , "....o"
     , "...o."
     , ".oo.."
     , "....."] 
}
    
function  convert_to_decimal(binstring){
    var base=2;
    var total=0;
    for (var i=0; i<40; i++) {
        if ( parseInt(binstring[i]) == 1) {
            total += Math.pow(base,i);
        }
    }
    return total;
}
    
function load_characters (){
    var binary_value = ""
    var decimal_value = 0
    var converted_characters = {}
    
    for (var key in characters) {
        binary_value = characters[key].join('').replace(/\./g,'0').replace(/o/g,'1')
        decimal_value = convert_to_decimal(binary_value);
        converted_characters[key] = decimal_value
    }
    return converted_characters
}    

fontmap = load_characters()
    