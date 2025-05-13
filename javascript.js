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
    let a = Number(answerText.value);
    operator = add(a);
    operatorText.innerText = a + " +";
    answerText.value = "0";
});
subtractButton.addEventListener("click", (event) =>
{
    calculate();
    let a = Number(answerText.value);
    operator = subtract(a);
    operatorText.innerText = a + " -";
    answerText.value = "0";
});
multiplyButton.addEventListener("click", (event) =>
{
    calculate();
    let a = Number(answerText.value);
    operator = multiply(a);
    operatorText.innerText = a + " *";
    answerText.value = "0";
});
divideButton.addEventListener("click", (event) =>
{
    calculate();
    let a = Number(answerText.value);
    operator = divide(a);
    operatorText.innerText = a + " /";
    answerText.value = "0";
});

const add = a => b => Number( (a + b).toFixed(5) );
const subtract = a => b => Number( (a - b).toFixed(5) );
const multiply = a => b => Number( (a * b).toFixed(5) );
const divide = a => b => Number( (a / b).toFixed(5) );
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
    
    let b = Number(answerText.value);
    answerText.value = operator(b);
    operator = null;
    operatorText.innerText = "-";
}

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
/*function toggleSign2()//removes the decimal
{
    answerText.value = -Number(answerText.value);
    fixAnswer();
}*/