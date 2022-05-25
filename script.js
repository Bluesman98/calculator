const btn = document.querySelector('.numbers');
const disp = document.querySelector('.display');

const clear = document.querySelector('.clear');
clear.addEventListener('click',e =>{
    disp.textContent = '';
})

let lastChar;
let proceed=0;

const del = document.querySelector('.delete');
del.addEventListener('click',e =>{
    let string = disp.textContent.trim();
    if (isDigit(string[string.length-1])===true) {
        disp.textContent = disp.textContent.slice(0, -3);
    } 
    else  disp.textContent = disp.textContent.slice(0, -1);  
    
})

let matrix;
btn.addEventListener('click',e =>{
    lastChar = e.target.textContent;
     
    if (isDigit(lastChar) == true){
        matrix = disp.textContent.split(' ');
        if(matrix.length == 3){
            console.log(disp.textContent);
            if (lastChar == '=') {
                disp.textContent = doMath(disp.textContent)
            }
            else {
                disp.textContent = doMath(disp.textContent) + ' ' + lastChar + ' ';
            }
            
        }
        else disp.textContent +=' ' + e.target.textContent + ' ';
        
    }
    else disp.textContent += e.target.textContent;
    
});

function isDigit(c) {
    if (c == '+' || c == '-' || c == '*' || c == '/' || c == '=') return true;
}

function doMath(string){
   let matrix = string.split(' ');
    switch (matrix[1]){
        case '+':
            console.log(Number(matrix[0]) + Number(matrix[2]));
            return Number(matrix[0]) + Number(matrix[2]);
        case '-':
            console.log(Number(matrix[0]) - Number(matrix[2]));
            return Number(matrix[0]) - Number(matrix[2]);
        case '*':
            console.log(Number(matrix[0]) * Number(matrix[2]));
            return Number(matrix[0]) * Number(matrix[2]);
        case '/':
            console.log(Number(matrix[0]) / Number(matrix[2]));
            return Number(matrix[0]) / Number(matrix[2]);
    }

}