let userInput = document.getElementById("inputPlaceHolder");
const addBtn = document.getElementById("add-btn");
const subtractBtn = document.getElementById("subtract-btn");
const multiplyBtn = document.getElementById("multiply-btn");
const divideBtn = document.getElementById("divide-btn");

let currentCalcOutput = document.getElementById("currentCalculation");
let currentResultOutput = document.getElementById("currentResult");

const defaultValue = 0;
let currentResult = defaultValue;

let activityLog = [];
function insertIntoLog(operationPerformed, operatorSign, numberBefore, numberEntered, resultOp){
    let activities = {
        operation : operationPerformed,
        sign : operatorSign,
        numInitial : numberBefore,
        numEntered : numberEntered,
        output : resultOp
    }
    activityLog.push(activities);
    console.log(activityLog);
}

function convertUserInput(){
    return parseInt(userInput.value);
}

function outputResultValues(operator, initialNum, enteredNum, opResult){
    currentCalcOutput.textContent = ` ${initialNum} ${operator} ${enteredNum} `;
    currentResultOutput.textContent = opResult;
}

addBtn.addEventListener("click", add);
function add(){
    initialValue = currentResult;
    enteredNumber = convertUserInput();
    currentResult += enteredNumber;
    outputResultValues('+', initialValue, enteredNumber, currentResult);
    insertIntoLog("ADDITION", " + ", initialValue, enteredNumber, currentResult);
}

subtractBtn.addEventListener("click", subtract);
function subtract(){
    initialValue = currentResult;
    enteredNumber = convertUserInput();
    currentResult -= enteredNumber;
    outputResultValues('-', initialValue, enteredNumber, currentResult);
    insertIntoLog("SUBTRACTION", " - ", initialValue, enteredNumber, currentResult);
}

multiplyBtn.addEventListener("click", multiply);
function multiply(){
    initialValue = currentResult;
    enteredNumber = convertUserInput();
    currentResult *= enteredNumber;
    outputResultValues('*', initialValue, enteredNumber, currentResult);
    insertIntoLog("MULTIPLICATION", " * ", initialValue, enteredNumber, currentResult);
}

divideBtn.addEventListener("click", divide);
function divide(){
    initialValue = currentResult;
    enteredNumber = convertUserInput();
    currentResult /= enteredNumber;
    outputResultValues('/', initialValue, enteredNumber, currentResult);
    insertIntoLog("DIVISION", " / ", initialValue, enteredNumber, currentResult);
}