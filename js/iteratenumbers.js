let numbers = [];
const loaded = () => {
    let ulCtrl = document.getElementById("numbers");
    for(let i=1; i<51; i++){
        if((i % 3 || i % 5) === 0){
        numbers.push(i);
        let para = "<p>" + numbers + "<p>";
        ulCtrl.innerHTML += para;
    }
    }

    let divCtrl = document.getElementById("sum");
    var sum = numbers.reduce(function(a,b){
        return a +b;
    },0);
    divCtrl.innerHTML += sum;

}

