function load_bitmap( the_bitmap ){
    var binary_string, 
        converted = {};
    
    for (var key in the_bitmap) {
        binary_string = the_bitmap[key].join('').replace(/\./g,'0').replace(/o/g,'1');
        converted[key] = convert_to_decimal(binary_string);
    }
    return converted
} 

function convert_to_decimal( the_string ){
    var base=2;
    var total=0;
    for (var i=0; i<the_string.length; i++) {
        if ( parseInt(the_string[i]) == 1) {
            total += Math.pow(base,i);
        }
    }
    return total;
}