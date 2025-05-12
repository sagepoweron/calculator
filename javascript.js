const answerText = document.getElementById("answer");
const operatorText = document.getElementById("operator");
const clearButton = document.getElementById("clear");
const backspaceButton = document.getElementById("backspace");
const signButton = document.getElementById("sign");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const equalsButton = document.getElementById("equals");
const numberButtons = document.getElementsByClassName("number");

for (let i = 0; i < numberButtons.length; i++)
{
    numberButtons[i].addEventListener("click", (event) =>
    {
        appendValue(numberButtons[i].innerText);
    });
}
clearButton.addEventListener("click", (event) =>
{
    clear();
});
backspaceButton.addEventListener("click", (event) =>
{
    backspace();
});
signButton.addEventListener("click", (event) =>
{
    toggleSign();
});
equalsButton.addEventListener("click", (event) =>
{
    calculate();
});
addButton.addEventListener("click", (event) =>
{
    calculate();
    let x = Number(answerText.value);
    operator = add(x);
    operatorText.innerText = x + " +";
    answerText.value = "0";
});
subtractButton.addEventListener("click", (event) =>
{
    calculate();
    let x = Number(answerText.value);
    operator = subtract(x);
    operatorText.innerText = x + " -";
    answerText.value = "0";
});
multiplyButton.addEventListener("click", (event) =>
{
    calculate();
    let x = Number(answerText.value);
    operator = multiply(x);
    operatorText.innerText = x + " *";
    answerText.value = "0";
});
divideButton.addEventListener("click", (event) =>
{
    calculate();
    let x = Number(answerText.value);
    operator = divide(x);
    operatorText.innerText = x + " /";
    answerText.value = "0";
});


const add = x => y => Number( (x + y).toFixed(5) );
const subtract = x => y => Number( (x - y).toFixed(5) );
const multiply = x => y => Number( (x * y).toFixed(5) );
const divide = x => y => Number( (x / y).toFixed(5) );
let operator = null;


function appendValue(string)
{
    if (string === ".")
    {
        if (answerText.value === '0' || !answerText.value.includes("."))
        {
            answerText.value += string;
        }
    }
    else
    {
        if (answerText.value === "0")
        {
            answerText.value = string;
        }
        else
        {
            answerText.value += string;
        }
    }

    fixAnswer();
}


function isNumeric(string)
{
  return !isNaN(string) && !isNaN(parseFloat(string))
}

function fixAnswer()
{
    if (!isNumeric(answerText.value))
    {
        answerText.value = "0";
    }
}

function backspace()
{
    answerText.value = answerText.value.slice(0, -1);

    fixAnswer();
}

function clear()
{
    answerText.value = "0";
    operator = null;
    operatorText.innerText = "-";
}
function calculate()
{
    if (operator === null)
    {
        return;
    }
    
    let y = Number(answerText.value);
    answerText.value = operator(y);
    operator = null;
    operatorText.innerText = "-";
}
/*function toggleSign2()
{
    answerText.value = -Number(answerText.value);
    fixAnswer();
}*/




function toggleSign()
{
    if (answerText.value === "0")
    {
        return;
    }

    if (answerText.value.startsWith('-'))
    {
        answerText.value = answerText.value.substring(1);
    }
    else
    {
        answerText.value = "-" + answerText.value;
    }

    fixAnswer();
}




//operator = new AddOperator(answerText.value);
//operator = new SubtractOperator(answerText.value);
//operator = new MultiplyOperator(answerText.value);
//operator = new DivideOperator(answerText.value);

//operatorText.innerText = operator.GetText();
/*class Operator
{
    Calculate()
    {
        return "null";
    }

    GetText()
    {
        return "null";
    }
}

class AddOperator extends Operator
{
    constructor(number1)
    {
        super();
        this.number1 = number1;
    }

    Calculate(number2)
    {
        return Number(this.number1) + Number(number2);
    }

    GetText()
    {
        return this.number1 + " +";
    }
}
class SubtractOperator extends Operator
{
    constructor(number1)
    {
        super();
        this.number1 = number1;
    }

    Calculate(number2)
    {
        return Number(this.number1) - Number(number2);
    }

    GetText()
    {
        return this.number1 + " -";
    }
}
class MultiplyOperator extends Operator
{
    constructor(number1)
    {
        super();
        this.number1 = number1;
    }

    Calculate(number2)
    {
        return Number(this.number1) * Number(number2);
    }

    GetText()
    {
        return this.number1 + " *";
    }
}
class DivideOperator extends Operator
{
    constructor(number1)
    {
        super();
        this.number1 = number1;
    }

    Calculate(number2)
    {
        return Number(this.number1) / Number(number2);
    }

    GetText()
    {
        return this.number1 + " /";
    }
}*/