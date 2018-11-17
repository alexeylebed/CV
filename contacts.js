let actionbutton = document.getElementById("actionbutton");
let message = document.getElementById("sentmessage");


document.onkeyup = function(input){
    console.log(input);
    var letter = input.key.toLowerCase();
    console.log(letter);
};

actionbutton.onclick = function(){
    message.style.display = 'block';
};

