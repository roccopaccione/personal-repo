function increment(input){
    if(typeof input === "number"){
        return input + 1;
    }else{
        return false;
    }
}

console.log(increment(0));