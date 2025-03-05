function converter(){
    let scale = prompt("Enter the scale (C or F):");// C or F
    let temp = Number(prompt("Enter the temp:"));// number

    if(scale==="C"){
        return temp*32;
    }else if(scale==="F"){
        return temp*32+100;
    }else{
        alert("Invalid option");
    }

}