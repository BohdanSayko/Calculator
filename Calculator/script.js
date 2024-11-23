let firstNumber = '';
let firstNumberLength;
let secondNumber = '';
let sign = '';
let outputHTML = document.querySelector('#output');
let output = '';

let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        console.log('button');
        if (output !== '') {
            let isFindSign = output.split('').some(signCheck);

            if (signCheck(this.innerHTML) && !isFindSign && output !== '') {
                sign = this.innerHTML;
                output += sign;
                outputHTML.innerHTML = output;

                firstNumberLength = output.indexOf(sign);
                firstNumber = parseInt(output.slice(0, firstNumberLength));
            }
        }

        if (!isNaN(Number(this.innerHTML))) {
            output += this.innerHTML;
            outputHTML.innerHTML = output;
            console.log(output);
        }

        if (this.innerHTML === 'C') {
            clearAll();
        }

        if (this.innerHTML === '=') {
            if (sign) {
                secondNumber = parseInt(output.slice(firstNumberLength + 1));
                if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
                    const resultValue = result(sign, firstNumber, secondNumber);
                    outputHTML.innerHTML = resultValue;
                    output = resultValue.toString();
                    firstNumber = resultValue;
                    secondNumber = '';
                    sign = '';
                } else {
                    outputHTML.innerHTML = 'Error!';
                }
            }
        }
    });
});

function signCheck(element) {
    return ['%', '*', '-', '+'].includes(element);
}

function addition(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtraction(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiplication(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function division(firstNumber, secondNumber) {
    return secondNumber !== 0 ? firstNumber / secondNumber : 'Error: Division by zero';
}

function result(sign, firstNumber, secondNumber) {
    if(sign === '+') {
        return addition(firstNumber, secondNumber);
    }

    if(sign === '-') {
        return subtraction(firstNumber, secondNumber);
    }

    if(sign === '*') {
        return multiplication(firstNumber, secondNumber);
    }

    if(sign === '%') {
        return secondNumber !== 0 ? firstNumber / secondNumber : 'Error: Division by zero';
    }

    return 'Error!';
}

function clearAll() {
    firstNumber = '';
    secondNumber = '';
    sign = '';
    output = '';
    outputHTML.innerHTML = '';
}