//returns true if the number is even; else false

const isEven = (nbr) => {
    if(nbr == 0) return true;
    if(nbr == 1) return false;
    return isEven(nbr - 2);
//recursion needs a terminating condition so it stops calling itself over and over.
//recursion uses alot of memory and will blow the stack if there is no terminating condition.
}

const getNbr = () => {
    return Number(document.getElementById("nbr").value);
}

const setMsg = (msg) => {
    document.getElementById("msg").InnerText = msg;
}
const check = () => {
    let nbr = getNbr();
    if(isEven(nbr)){
    setMsg("Even");
    }
    else{
    setMsg("Odd");
    }
}