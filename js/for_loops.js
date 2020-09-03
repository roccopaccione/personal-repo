function showMultiplicationTable(num) {
    var html = ""
    for (i=1; i <= 10; i++){
        console.log( html += num + " x " + i + " = " + (num * i) + "\n")
    }
}
showMultiplicationTable(7)

var randomNumber = Math.floor(Math.random() * 200) + 20
function random(randomNumber){
    if (randomNumber % 2 === 0){
        console.log(randomNumber + " is Even!")
    }else{
        console.log(randomNumber + " is Odd!")
    }
}
random(randomNumber);