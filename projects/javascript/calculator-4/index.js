function display(values) {
    document.getElementById("result").value +=values
    return values
}


function solve() {
    let x = document.getElementById("result").value
    let y = eval(x);
    document.getElementById("result").value = y
    return y
}

function clearScreen() {
    document.getElementById("result").value = 0;
}



