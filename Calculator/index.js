const number = document.querySelectorAll('[id=number]')
let input_field = document.getElementById('input-box')
const operation = document.querySelectorAll('[id=operator]')
const equals = document.getElementById('equals')
const clear = document.getElementById('clear')
const clear_all = document.getElementById('clear-all')
let evaluated = false

clear.addEventListener('click', function(){
    input_field.value = input_field.value.slice(0,-1)
})

clear_all.addEventListener('click', function(){
    input_field.value = ''
})

number.forEach(button => {
    button.addEventListener('click', function(){
        if (evaluated){
            input_field.value = ''
            evaluated=false
        }
        input_field.value += this.value
    })
})

operation.forEach(button => {
    button.addEventListener('click', function(){
        if(["+", "-", "*", "/"].includes(input_field.value.slice(-1))){
            return
        }
        input_field.value += this.value
        evaluated = false
    })
})

equals.addEventListener('click', function(){
    if(["+", "-", "*", "/"].includes(input_field.value.slice(-1))){
        return
    }
    let exp = input_field.value
    try{
        let result = eval(exp)
        input_field.value = result
        evaluated = true
    }
    catch(error){
        input_field.value = "Enter valid expression"
        evaluated = true
    }
    
})

document.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        if(["+", "-", "*", "/"].includes(input_field.value.slice(-1))){
            return
        }
        event.preventDefault()
        let exp = input_field.value
        try{
            let result = eval(exp)
            input_field.value = result
            evaluated = true
        }
        catch(error){
            input_field.value = "Enter valid expression"
            evaluated = true
        }
        
    }
    else if(event.key === 'Backspace'){
        input_field.value = input_field.value.slice(0,-1)
    }

    else if(input_field.value === "Enter valid expression" || input_field.value === "Infinity"){
        input_field.value = ""
    }

})