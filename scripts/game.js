let position = 350;
let character = document.getElementById("character");

function moveLeft(){
    setInterval(()=>{
    if(position>0){
        position=position-5;
        character.style.left=position+"px";
    }
    console.log(position)},100);
}

function moveRight(){

}



