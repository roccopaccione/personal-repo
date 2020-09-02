function increment(input){
    if(typeof input === "number"){
        return input + 1;
    }else{
        return false;
    }
}

console.log(increment(0));

function getHighestNumber(x,y,z) {
    if((x !== isNaN) || (y !== isNaN) || (z !== isNaN)) {
        return false;
    }else{
        console.log(Math.max(x,y,z))
    }
}
getHighestNumber(1, 3, 2)

function add(x,y){
    if((x === isNaN) || (y === isNaN)){
        return false;
    }else{
        console.log(x + y);
    }
}
add(1,2);