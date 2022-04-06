
function area(type, length, width){

    if( type == 's'){
        return length * length;
    }else if( type == 'r'){
        return length * width;
    }else if( type == 't'){
        return .5 * length * width; 
    }
}


console.log(area('t', 60, 20));
console.log(area('s', 20, 10));