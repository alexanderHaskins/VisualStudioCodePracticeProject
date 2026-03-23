function setUp(){
    document.getElementById("p1").innerHTML = "Hello World!";
}

function checkGuess() {
    document.getElementById("p1").innerHTML = "New text!";
}


document.getElementById("submit").addEventListener("click",checkGuess)