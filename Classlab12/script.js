//get the elements with class name "descriptions"
//queryselector only selects the first element 
let desc = document.querySelector('.description')

// queryselectorAll selects all the elements
let desc_all = document.querySelector('.description')

// get the element by id
let t = document.querySelector('#title')

//get the ellements by tag name , 'li'

let list_item = document.querySelectorAll('li')

//example 1
//select the elements
let shape = document.querySelector(".shape")
let btnsquare = document.querySelector(".btnsquare")
let btnrectangle = document.querySelector(".btnrectangle")
let btncircle = document.querySelector(".btncircle")

btncircle.addEventListener("click", function(){
    shape.textContent = "circle".toUpperCase()
    shape.className = "circle"
})

btnsquare.addEventListener("click",function(){
    shape.textContent = "square".toUpperCase()
    shape.className = "square"
    
})

btnrectangle.addEventListener("click", function(){
    shape.textContent = "rectangle".toUpperCase()
    shape.className = "rectangle"
})