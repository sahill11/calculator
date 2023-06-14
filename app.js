let display = document.querySelector(".display");
let button = document.querySelectorAll(".button");
let string = "";
Array.from(button).forEach((button)=>{
    button.addEventListener('click', (e)=>{
    if(e.target.value == "AC"){
        string = "";
        display.value= string;
    }
    else if(e.target.value == "DEL"){
        string = string.slice(0,-1);
        display.value = string
    }
    else if(e.target.value == "%"){
        string = string/100;
        display.value = string
    }
    else if(e.target.value == "="){
        try{
            string = eval(string)
            display.value = string
        }
        catch{
            display.value = "ERROR!";
        }
    }
    else{
    string = string + e.target.value;
    display.value = string;
    }
    })
});