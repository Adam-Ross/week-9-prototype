let toDraw = false

function setup() {
    const btn = document.querySelector('#btn')
    const clear = document.querySelector('#clear')
    btn.addEventListener('click', () => {
        toggleDraw()
        
    })

    clear.addEventListener('click', () => {
        clearCanvas()
    })

    createCanvas(windowWidth, 700)
    background('#f4f4f4')
    
}

function draw() {
    if(toDraw) {
            makeShape()
    }
}

function toggleDraw() {
    toDraw ? toDraw = false : toDraw = true
}

function makeShape() {
    const shapes = [makeRect, makeCircle]
    const func = shapes[Math.floor(Math.random()*shapes.length)];
    func()
}

function makeRect() {
    // rect(30, 20, 55, 55);
        const r = random(1, 255)
        const b = random(1, 255)
        const g = random(1, 255)
        fill(r, g, b)
        noStroke()
        rect(random(1, windowWidth), random(1, windowWidth), random(1, windowWidth/8))
}

function makeCircle() {
        const r = random(1, 255)
        const b = random(1, 255)
        const g = random(1, 255)
        fill(r, g, b)
        noStroke()
        circle(random(1, windowWidth), random(1, windowWidth), random(1, windowWidth/8))
} 


function clearCanvas() {
    clear();
    background("#f4f4f4");
  }




  

