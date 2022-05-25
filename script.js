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
    disp.textContent = disp.textContent.slice(0, -1);
})


btn.addEventListener('click',e =>{
    lastChar = e.target.textContent;
    
    if (isDigit(lastChar) === true ){
        proceed++;
        if(proceed==2){
            console.log(disp.textContent);
            let x = doMath(disp.textContent);
            disp.textContent = x;
            proceed = 0;  
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