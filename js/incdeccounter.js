let valueOutput = 0;

const dec = () => {
    let inpt = document.getElementById("output");
    inpt.value = --valueOutput;
    if(inpt.value % 2 == 0){
        inpt.style.color="red";
    } else if(inpt.value % 3 === 0){
        inpt.style.fontStyle="italic";
    } else if(InputEvent.value % 7 ===0){
        inpt.style.fontWeight="bold";
    } else {
        inpt.style.color="black";
        inpt.style.fontStyle="serif";
        inpt.style.fontWeight="normal";
    }
}

const inc = () => {
   let inpt = document.getElementById("output");
   inpt.value = ++valueOutput;
    if(inpt.value % 2 === 0){
        inpt.style.color="red";
    } else if(inpt.value % 3 === 0){
        inpt.style.fontStyle="italic";
    } else if(InputEvent.value % 7 ===0){
        inpt.style.fontWeight="bold";
    } else {
        inpt.style.color="black";
        inpt.style.fontStyle="serif";
        inpt.style.fontWeight="normal";
    }
}