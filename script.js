let burger = document.getElementById("burger");


burger.addEventListener('click' , function(e){
        menu.style.display = 'block';
})


document.addEventListener('click' , function(e){
    console.log(e.target.id)
    if((e.target.id != 'burger')){
        menu.style.display = 'none';
    }
})






