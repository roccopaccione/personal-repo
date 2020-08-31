var sample = "Hello Codeup";
console.log(sample);


console.log(sample.length);

console.log(sample.concat(" Students"))

console.log(sample.indexOf("c"))

console.log(sample.indexOf("C"))

console.log(sample.indexOf("C"), sample.substring())

//
// console.log(sample.toLowerCase())
// console.log(sample.toUpperCase())

function fizzBuzz(){
    for(var i = 0; i <= 50; i++) {
        if (i%15 === 0){
            console.log(i + ' FizzBuzz')
        }else if(i%3 === 0){
            console.log(i + ' Fizz')
//         }else if(i%5 === 0){
//             console.log(i + ' Buzz')
//         }else{
//             console.log(i)
//         }
//     }
// }
// fizzBuzz()