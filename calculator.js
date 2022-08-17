const lineOne = document.querySelector('.lineOne');
const reset = 0;
let display = "";
let operator = null;
let memory;
let arrayMemory = [{0: "", 1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: ""}];
console.log(arrayMemory)
window.onload= () => {
    let keys = document.querySelectorAll(".Btn")
    for(let key of keys){
        key.addEventListener("click", managementKeys);
    }
}
function managementKeys(){
    let key = this.innerText;
    
    if(parseFloat(key) >= 0 || key === '.'){
        display = (display === 0) ? key.toString() : display + key.toString();
        lineOne.innerText = display;
        console.log(key);
    }else{
        switch(key){
            case "AC":
                display= reset;
                lineOne.innerText = display;
                operator = null;
                break;
            case "C": 
                let createArray = display.split('')
                let newValue = createArray.filter((element, index) => index < createArray.length - 1).join('');
                display = newValue.toString();
                lineOne.innerText = display;             
                break;
            case "M+":
                
                break;
        }
    }
}
