console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i = 0; i <= 100; i++) {
    if(i % 2 === 0){
        continue;
    }
    else {
        console.log(i);
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let i = 1; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0)
    {
        console.log(i + "FizzBuzz");
    }
    else if(i % 3 == 0)
    {
        console.log(i + "Fizz");
    }
    else if(i % 5 == 0)
    {
        console.log(i + "Buzz");
    }
    else
    {
        console.log(i);
    }
}

let startingNumber = 1;
do {
    console.log(startingNumber);
    startingNumber++;
    if(startingNumber % 2 != 0){
    console.log(startingNumber);
    continue;
    
    }
}
while(startingNumber <= 100);










let num =1;
do {
    if(num % 3 == 0 && num & 5 == 0){
        console.log("FizzBuzz");
    } else if(num & 3 == 0){
        console.log("Fizz");
    }else if(num % 5 == 0){
        console.log("Buzz");
    }
    else{
        console.log(num);
    }
    num++
    
}
while(num <= 100);












let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);
console.log("Random value:  ");
console.log(value);
console.log("end point");
console.log(n);
console.log("Checking to see if we have the value........");


let i = 0
for(; i < n; i++)
{
    if(i == value) {
        console.log("Found value");
        break;
    }
}
if(i != value){
    console.log("Did not find value");
}








let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

console.log("Fizz divisor:   ");
console.log(fizzDivisor);
console.log("Buzz divisor:   ");
console.log(buzzDivisor);
console.log("Starting number:   ");
console.log(start);
console.log("Ending number:   ");
console.log(end);
console.log("Solution:   ");

for(let i = start; i <= end; i++){
    if(i % fizzDivisor == 0 && i % buzzDivisor == 0){
        console.log(`${i} FizzBuzz`);
    } else if(i % fizzDivisor == 0){
        console.log(`${i} Fizz`);
    }else if(i % buzzDivisor == 0){
        console.log(`${i} Buzz`);
    }
    else{
        console.log(`${i}`);
    }

}

