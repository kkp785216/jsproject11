let calBtn = document.querySelectorAll('.calBtn');
let display = document.querySelector('.display span');
let myCalculation = '';
Array.from(calBtn).forEach((element) => {
    element.addEventListener('click', (e) => {
        let value = e.target.getAttribute('value');
        let content = e.target.textContent;
        if(value == "="){
            if(myCalculation !== undefined){
                let solved = eval(myCalculation)
                display.textContent = solved;
                myCalculation = solved;
            }
        }
        else if (value == 1 || value == 2 || value == 3 || value == 4 || value == 5 || value == 6 || value == 7 || value == 8 || value == 9 || value == 0 || value == '.') {
            display.textContent += value;
            myCalculation += value;
        }
        else if (value == '+' || value == '-' || value == '*' || value == '/') {
            let regex = /[\+\-\*\/]$/;
            if (regex.test(myCalculation)) {
                display.textContent = display.textContent.replace(display.textContent.slice(-1), content);
                myCalculation = myCalculation.replace(myCalculation.slice(-1), value);
            }
            else {
                display.textContent += content;
                myCalculation += value;
            }
        }
        else if(value == '('){
                display.textContent += value;
                myCalculation += '*(';
        }
        else if(value == ')'){
                display.textContent += value;
                myCalculation += value;
        }
        else if(value == "^"){
            let regex = /[\^]$/;
            if(!regex.test(display.textContent)){
                display.textContent += value;
                myCalculation += value;
            }
        }
        else if(value == "C"){
            display.textContent = '';
            myCalculation = '';
        }
    });
});