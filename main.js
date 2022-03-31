const screen = document.querySelector('canvas')
const c = screen.getContext('2d')
const btn = document.querySelector('.btn')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const inp = document.querySelector('.inp')

screen.width = 500;
screen.height = 500;
let pencilWidth = 1
let pencilHeight = 1
let borderWidth = 5;   
let offset = borderWidth * 2;

btn.addEventListener('click', () => {
    c.fillStyle = inp.value
})
btn1.addEventListener('click', () => {
    console.log(`pencil esta com ${pencilHeight}, ${pencilWidth}`)
    pencilHeight++
    pencilWidth++
})
btn2.addEventListener('click', () => {
    console.log(`pencil esta com ${pencilHeight}, ${pencilWidth}`)
    pencilHeight--
    pencilWidth--
})
btn3.addEventListener('click', (e) => {
    const x = e.clientX
    const y = e.clientY
    c.fillStyle = 'black';
c.fillRect( x - borderWidth, y -borderWidth, 50 + offset, 50 + offset);
c.fillStyle = 'white';
c.fillRect( x, y, 50, 50);
})

let clicks = false;



setTimeout(() => {
    function mouseEvents() {
        screen.addEventListener('mouseup', () => {
            clicks = false
            
        })
        screen.addEventListener('mousedown', () => {
            clicks = true
        })
        
    }
    
    function mouseMoved() {
        addEventListener('mousemove', e => {
            x = e.clientX - 9
            y = e.clientY - 8
            if(clicks === true){
                
                c.fillRect(x,y,pencilWidth,pencilHeight)   
            }
        })
    }
    mouseMoved();
    mouseEvents();
},1)