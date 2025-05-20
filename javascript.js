
const answerText = document.getElementById("answer");
const operatorText = document.getElementById("operator");

document.addEventListener("click", (event) =>
{
    validate();

    if (event.target.id === "equals") calculate();
    if (event.target.id === "clear") clear();
    if (event.target.id === "backspace") backspace();
    if (event.target.id === "sign") toggleSign();
    if (event.target.id === "add") add();
    if (event.target.id === "subtract") subtract();
    if (event.target.id === "multiply") multiply();
    if (event.target.id === "divide") divide();
    if (event.target.id === "sqrt") squareroot();
    if (event.target.id === "square") square();
    if (event.target.matches(".number")) appendText(event.target.innerText);

    validate();

    //console.log(event.target.getAttribute("data-value"));
    //const dataValue = event.target.getAttribute("data-value");
    /*switch (event.target.id)
    {
        case "equals":
            calculate();
            break;
        case "sign":
            toggleSign();
            break;
        case "backspace":
            backspace();
            break;
    
        default:
            break;
    }*/
    //console.log(event.target.id)
    //event.target.classList.toggle("highlight");
    /*if (event.target.matches("#equals"))
    {
        calculate();
    }*/
});

document.addEventListener("keydown", (event) =>
{
    validate();

    if (event.key >= 0 && event.key <= 9) appendText(event.key);
    if (event.key === '.') appendText(event.key);
    if (event.key === 'Enter' || event.key === '=') calculate();
    if (event.key === 'Backspace') backspace();
    if (event.key === 'Escape') clear();
    if (event.key === "+") add();
    if (event.key === "-") subtract();
    if (event.key === "*") multiply();
    if (event.key === "/") divide();
});

const addOperator = a => b => a + b;
const subtractOperator = a => b => a - b;
const multiplyOperator = a => b => a * b;
const divideOperator = a => b => a / b;
const squarerootOperator = a => Math.sqrt(a);
const squareOperator = a => a * a;
let operator = null;

function add()
{
    calculate();
    let a = Number(answerText.innerText);
    operator = addOperator(a);
    operatorText.innerText = a + " +";
    answerText.innerText = "0";
}
function subtract()
{
    calculate();
    let a = Number(answerText.innerText);
    operator = subtractOperator(a);
    operatorText.innerText = a + " -";
    answerText.innerText = "0";
}
function multiply()
{
    calculate();
    let a = Number(answerText.innerText);
    operator = multiplyOperator(a);
    operatorText.innerText = a + " *";
    answerText.innerText = "0";
}
function divide()
{
    calculate();
    const a = Number(answerText.innerText);
    operator = divideOperator(a);
    operatorText.innerText = a + " /";
    answerText.innerText = "0";
}
function squareroot()
{
    calculate();
    operator = squarerootOperator;
    calculate();
}
function square()
{
    calculate();
    operator = squareOperator;
    calculate();
}



function appendText(text)
{
    if (text === ".")
    {
        if (answerText.innerText.includes(".")) return;
        
        answerText.innerText += text;
    }
    else
    {
        if (answerText.innerText === "0")
        {
            answerText.innerText = text;
        }
        else
        {
            answerText.innerText += text;
        }
    }
}

function validate()
{
    if (isNaN(answerText.innerText) || answerText.innerText === "")
    {
        answerText.innerText = "0";
    }

    /*if (Number(answerText.innerText) > 9999999999 || Number(answerText.innerText < -9999999999))
    {
        answerText.innerText = "out of range";
        return;
    }*/

    if (answerText.innerText.length > 16)
    {
        answerText.innerText = "out of range";
        return;
    }

    const numbers = answerText.innerText.split(".");
    if (numbers.length > 1)
    {
        numbers[1] = numbers[1].substring(0, 5);
    }
    answerText.innerText = numbers.join(".");
}

function backspace()
{
    answerText.innerText = answerText.innerText.slice(0, -1);
}

function clear()
{
    answerText.innerText = "0";
    operator = null;
    operatorText.innerText = "-";
}
function calculate()
{
    if (operator === null)
    {
        return;
    }

    let b = Number(answerText.innerText);
    
    //answerText.innerText = operator(b);
    answerText.innerText = Number(operator(b).toFixed(5));
    //fixes adding 0.03 to a number
    
    operator = null;
    operatorText.innerText = "-";
}

function toggleSign()
{
    if (answerText.innerText === "0")
    {
        return;
    }

    if (answerText.innerText.startsWith('-'))
    {
        answerText.innerText = answerText.innerText.substring(1);
    }
    else
    {
        answerText.innerText = "-" + answerText.innerText;
    }
}
/*function toggleSign2()//removes the decimal
{
    answerText.value = -Number(answerText.value);
    fixAnswer();
}*/