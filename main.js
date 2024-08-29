// Task1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Task2
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Task3
let sum = 0;
for (let i = 1; i <= 50; i++) {
    sum += i; //sum of all numbers from 1 through 50
}
console.log(sum);

// Task4
for (let i = 0; i < 10; i += 2) {
    console.log(i); // 5 iterations: increase in even numbers before 10 (not including)
}

// Task5
// Break statement exits loop, even before there are iterations left to be performed. For example:
for (let i = 1; i <= 20; i++) {
    if (i === 10) {
        break;
    }
    console.log(i);
}

// Task6
// Continue statment skips the current itteration and proceeds to the next one in the same loop. For example:
for (let i = 0; i <= 20; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i); //this will only print numbers till 20, that are not divisible by 3
}

// Task7
do {
    randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);
} while (randomNumber !== 27);
console.log('Stopped randomizing!');

// Task8
