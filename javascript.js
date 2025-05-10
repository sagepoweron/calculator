const answerText = document.getElementById("answer");
const operatorText = document.getElementById("operator");
const clearButton = document.getElementById("clear");
const signButton = document.getElementById("sign");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const calculateButton = document.getElementById("calculate");
const numberButtons = document.getElementsByClassName("number");

let _operator = null;

for (let i = 0; i < numberButtons.length; i++)
{
    numberButtons[i].addEventListener("click", (event) =>
    {
        appendAnswer(numberButtons[i].innerText);
    });
}

clearButton.addEventListener("click", (event) =>
{
    reset();
});
signButton.addEventListener("click", (event) =>
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
});
calculateButton.addEventListener("click", (event) =>
{
    if (_operator !== null)
    {
        answerText.value = _operator.Calculate(answer.value);
        _operator = null;
        operatorText.innerText = "-";
    }
});

addButton.addEventListener("click", (event) =>
{
    _operator = new AddOperator(answerText.value);
    operatorText.innerText = _operator.GetText();
    answerText.value = "0";
});
subtractButton.addEventListener("click", (event) =>
{
    _operator = new SubtractOperator(answerText.value);
    operatorText.innerText = _operator.GetText();
    answerText.value = "0";
});
multiplyButton.addEventListener("click", (event) =>
{
    _operator = new MultiplyOperator(answerText.value);
    operatorText.innerText = _operator.GetText();
    answerText.value = "0";
});
divideButton.addEventListener("click", (event) =>
{
    _operator = new DivideOperator(answerText.value);
    operatorText.innerText = _operator.GetText();
    answerText.value = "0";
});


function appendAnswer(number)
{
    if (number === ".")
    {
        if (answerText.value.includes("."))
        {
            return;
        }
    }

    if (answerText.value === "0")
    {
        answerText.value = number;
    }
    else
    {
        answerText.value += number;
    }
}

function reset()
{
    _operator = null;
    answerText.value = "0";
    operatorText.innerText = "-";
}




class Operator
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
}