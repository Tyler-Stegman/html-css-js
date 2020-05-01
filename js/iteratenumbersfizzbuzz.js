const numbers = () => {
    let ulCtrl = document.getElementById("output");
    for(let i = 1; i <= 50;i++){
        if(i % 3 === 0 && i % 5 === 0){
            let para = "<p>" + " FizzBuzz" + "</p>";
            ulCtrl.innerHTML += para;
        } else if(i % 3 == 0){
            let para = "<p>" + " Fizz" + "</p>";
            ulCtrl.innerHTML += para;
        } else if(i % 5 == 0){
            let para = "<p>" + " Buzz" + "</p>";
            ulCtrl.innerHTML += para;
        } else {
            let para = "<p>" + i + "</p>";
            ulCtrl.innerHTML += para;
        }
    }
}