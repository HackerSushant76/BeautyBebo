function first(){
    document.getElementById("slideimage1").src="https://www.beautybebo.com/pub/media/mega-menu/slider-2.jpg";
}
function second(){
    document.getElementById("slideimage1").src="https://www.beautybebo.com/pub/media/mega-menu/slider-3.jpg";
}
function third(){
    document.getElementById("slideimage1").src="https://www.beautybebo.com/pub/media/mega-menu/slider-1.jpg";
}

setInterval(first,2000);
setInterval(second,4000);
setInterval(third,6000);

document.getElementById("one").addEventListener("click",one)
document.getElementById("two").addEventListener("click",two)
document.getElementById("three").addEventListener("click",three)
function one(){
    document.querySelector("#slideimage1").src="https://www.beautybebo.com/pub/media/mega-menu/slider-1.jpg"
}
function two(){
    document.querySelector("#slideimage1").src="https://www.beautybebo.com/pub/media/mega-menu/slider-2.jpg"
}
function three(){
    document.querySelector("#slideimage1").src="https://www.beautybebo.com/pub/media/mega-menu/slider-3.jpg"
}

document.querySelector('#myaccount').addEventListener('change',Accountfunc)

function Accountfunc(){
    var selected= document.querySelector('#myaccount').value

    if(selected== 'Login'){
        window.location.href= "signIn.html"
    }
    else{
        window.location.href= "signup.html"
    }
}
