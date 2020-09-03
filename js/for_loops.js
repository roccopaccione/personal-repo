function showMultiplicationTable(num) {
    var html = ""
    for (i=1; i <= 10; i++){
        console.log( html += num + " x " + i + " = " + (num * i) + "\n")
    }
}
showMultiplicationTable(7)