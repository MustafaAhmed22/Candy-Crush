document.addEventListener('DOMContentLoaded',()=>{
    const grid =document.querySelector('.grid')
    const width =8
    const squares =[]
const candyColors =[
    'red',
    'yellow',
    'orange',
    'purple',
    'green',
    'blue'
]
    function createBoard(){
        for(let i =0; i<width*width;i++){
            const square =document.createElement('div')
            square.setAttribute('draggable' ,true)
            square.setAttribute('id',i)
            let randomColor =Math.floor(Math.random()*candyColors.length)
            square.style.background=candyColors[randomColor]
            grid.appendChild(square)
            squares.push(square)
        }
    }
    createBoard()
let colorBeingDragged
squares.forEach(square => square.addEventListener('dragstart',dragstart))
squares.forEach(square => square.addEventListener('dragend',dragend))
squares.forEach(square => square.addEventListener('dragover',dragover))
squares.forEach(square => square.addEventListener('dragenter',dragenter))
squares.forEach(square => square.addEventListener('dragleave',dragleave))
squares.forEach(square => square.addEventListener('drop',drop))

function dragstart(){
    colorBeingDragged =this.style.backgroundColor
    console.log(colorBeingDragged)
    console.log(this.id ,'dragstart')
}
function dragend(){
    console.log(this.id ,'dragend')
}
function dragover(){
    console.log(this.id ,'dragover')
}
function dragenter(){
    console.log(this.id ,'dragenter')
}
function dragleave(){
    console.log(this.id ,'dragleave')
}
function drop(){
    console.log(this.id ,'drop')
}
})

