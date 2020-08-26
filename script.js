function fibonacciNum(){
    let number = document.getElementById('num').value;
    let num1 = 0;
    let num2 = 1;
    let sum;
    let displayResult;
   if(number.length ==""){
       displayResult = "Please enter your number";
    }else if(number == 0){
        displayResult = 0;
    }else if(number == 1){
        displayResult = 1;
    }else{
        for(let i= 1;i<number;i++){
            sum= num1+num2;
            num1 = num2;
            num2 = sum;
            displayResult = num2;
        }
    }
    document.getElementById('result').innerHTML = `The Fibonacci of ${number} : ${displayResult}`;
}