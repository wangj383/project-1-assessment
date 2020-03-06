let displayEl = document.getElementById("display")
let buttonPlus = document.getElementById("plus")
let buttonMinus = document.getElementById("minus")
let inputEl = document.querySelector("input")

let render = function(replace,code){
    code.textContent = replace
    // bonus => change color of the display when the number becomes negative
    if (parseInt(displayEl.textContent) < 0) {
        displayEl.style.color = "red"
    } else {
        displayEl.style.color = "black"
    }
}

buttonPlus.addEventListener('click',function(){
    inputEl.value = inputEl.value
    render(parseInt(displayEl.textContent) + parseInt(inputEl.value),displayEl)
})

buttonMinus.addEventListener('click',function(){
    inputEl.value = inputEl.value
    render(parseInt(displayEl.textContent) - parseInt(inputEl.value),displayEl)
})



