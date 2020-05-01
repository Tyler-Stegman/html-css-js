let valueOutput = 0;

const dec = () => {
    valueOutput--;
    display(valueOutput);
}

const inc = () => {
    valueOutput++;
   display(valueOutput);
}

const display = (output) => {
    let outputCtrl = document.getElementById("output");
    outputCtrl.value = output;
    // ternary operators in lieu of if/else statements
    outputCtrl.style.color = (output % 2 == 0) ? "red" : "black";
    outputCtrl.style.fontStyle = (output % 3 == 0) ? "italic" : "normal";
    outputCtrl.style.fontWeight = (output % 7 == 0) ? "bold" : "normal";
}

const loaded = () => {
    display(output);
}