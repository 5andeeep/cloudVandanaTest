const input = document.getElementById('input');
const buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        // if button is = calculation should be done
        if(e.target.innerHTML == '='){
            if(string == ""){
                input.value = "";
            }
            else{
                string = eval(string);
                input.value = string;
            }
        }
        // if we want do all clear
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        // if we want to add number and operations
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})