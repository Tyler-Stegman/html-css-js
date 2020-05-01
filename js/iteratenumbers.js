let numbers = [];

const loaded = () => {
    let ulCtrl = document.getElementById("numbers");
    let total = 0;
    let count = 0;
    for(let i=1; i<=50; i++){
        if(i % 3 || i % 5 === 0){
        numbers.push(i);
        total += i;
        count++;
        let para = "<p>" + numbers + "<p>";
        ulCtrl.innerHTML += para;
    }
    }

    let divCtrl = document.getElementById("sum");
    var sum = numbers.reduce(function(a,b){
        return a + b;
    },0);
    divCtrl.innerHTML += sum;

}

