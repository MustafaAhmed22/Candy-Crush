document.addEventListener('DOMContentLoaded',()=>{
    const grid =document.querySelector('.grid')
    const width =8
    const squares =[]
    let score =0
const candyColors =[
    'url(images/red-candy.png)',
    'url(images/green-candy.png)',
    'url(images/orange-candy.png)',
    'url(images/purple-candy.png)',
    'url(images/blue-candy.png)',
    'url(images/yellow-candy.png)'
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
let colorBeingReplaced
let squareBeingDragged
let squareBeingReplaced

squares.forEach(square => square.addEventListener('dragstart',dragstart))
squares.forEach(square => square.addEventListener('dragend',dragend))
squares.forEach(square => square.addEventListener('dragover',dragover))
squares.forEach(square => square.addEventListener('dragenter',dragenter))
squares.forEach(square => square.addEventListener('dragleave',dragleave))
squares.forEach(square => square.addEventListener('drop',dragdrop))

function dragstart(){
    squareBeingDragged =parseInt(this.id)
    console.log(squareBeingDragged)
    colorBeingDragged =this.style.backgroundImage
    console.log(colorBeingDragged)
    console.log(this.id ,'dragstart')
}
function dragend(){
    console.log(this.id ,'dragend')
    let validMoves =[squareBeingDragged-1 ,
                    squareBeingDragged+1 ,
                    squareBeingDragged-width ,
                    squareBeingDragged+width]
    let validmove =validMoves.includes(squareBeingReplaced)
    if(squareBeingReplaced &&validmove){
        squareBeingReplaced =null
    }else if(squareBeingReplaced && !validmove){
        squares[squareBeingReplaced].style.backgroundImage=colorBeingReplaced
        squares[squareBeingDragged].style.backgroundImage =colorBeingDragged
    }else {
        squares[squareBeingDragged].style.backgroundImage =colorBeingDragged
        
    }
}
function dragover(e){
    e.preventDefault()
    console.log(this.id ,'dragover')
}
function dragenter(){
    console.log(this.id ,'dragenter')
}
function dragleave(){
    console.log(this.id ,'dragleave')
}
function dragdrop(){
    console.log(this.id ,'dragdrop')
    colorBeingReplaced =this.style.backgroundImage
    squareBeingReplaced =parseInt(this.id)
    this.style.backgroundImage=colorBeingDragged
    squares[squareBeingDragged].style.backgroundImage =colorBeingReplaced
}
function checkRowForThree(){
    for(let i =0 ;i<61 ;i++){
        let rowOfThree =[i ,i+1 ,i+2]
        let decidedColor = squares[i].style.background
        let isblank = squares[i].style.backgroundImage === ''

        let notValid =[6,7,14,15,,22,23,30,31,38,39,46,47,54,55]
        if(notValid.includes(i))continue

        if(rowOfThree.every(index =>squares[index].style.backgroundImage===decidedColor && !isblank))
        {
            score +=3
            console.log(score)
            rowOfThree.forEach(index => squares[index].style.backgroundImage='')
        }
    }
}
checkRowForThree()

function checkcolomnForThree(){
    for(let i =0 ;i<47 ;i++){
        let colomnOfThree =[i ,i+width ,i+width*2]
        let decidedColor = squares[i].style.background
        let isblank = squares[i].style.backgroundImage === ''

        if(colomnOfThree.every(index =>squares[index].style.backgroundImage===decidedColor && !isblank))
        {
            score +=3
            console.log(score)
            colomnOfThree.forEach(index => squares[index].style.backgroundImage='')
        }
    }
}
checkcolomnForThree()

function checkRowForFour(){
    for(let i =0 ;i<60 ;i++){
        let rowOfFour =[i ,i+1 ,i+2,i+3]
        let decidedColor = squares[i].style.backgroundImage
        let isblank = squares[i].style.backgroundImage === ''

        let notValid =[5,6,7,13,14,15,21,22,23,29,30,31,37,38,39,45,46,47,53,54,55]
        if(notValid.includes(i))continue

        if(rowOfFour.every(index =>squares[index].style.backgroundImage===decidedColor && !isblank))
        {
            score +=4
            console.log(score)
            rowOfFour.forEach(index => squares[index].style.backgroundImage='')
        }
    }
}
checkRowForFour()

function checkcolomnForFour(){
    for(let i =0 ;i<39 ;i++){
        let colomnOfFour =[i ,i+width ,i+width*2,i+width*3]
        let decidedColor = squares[i].style.backgroundImage
        let isblank = squares[i].style.backgroundImage === ''

        if(colomnOfFour.every(index =>squares[index].style.backgroundImage===decidedColor && !isblank))
        {
            score +=4
            console.log(score)
            colomnOfFour.forEach(index => squares[index].style.backgroundImage='')
        }
    }
}
checkcolomnForFour()


function moveDown(){
    for(let i =0 ;i<55;i++){
        if(squares[i+width].style.background===''){
            squares[i+width].style.background = squares[i].style.background
            squares[i].style.background=''
            const firstRow =[0,1,2,3,4,5,6,7]
            const isFirstRow =firstRow.includes(i)
            if(isFirstRow&&squares[i].style.background===''){
                let randomColor = Math.floor(Math.random()*candyColors.length)
                squares[i].style.background=candyColors[randomColor]
            }
        }
    }
}



window.setInterval(function(){
    checkRowForThree()
    checkcolomnForThree()
    checkRowForFour()
    checkcolomnForFour()
    moveDown()


},100)










})

