let toDraw = false

function setup() {
    frameRate(10);
    loadEventListeners()
    createCanvas(windowWidth, 600)
}

function draw() {
    if(toDraw) {
        makeShape()
    }
}

function loadEventListeners() {
    const btn = document.querySelector('#btn')
    const clear = document.querySelector('#clear')
    btn.addEventListener('click', () => {
        toggleDraw()
    })

    clear.addEventListener('click', () => {
        clearCanvas()
    })
}

function toggleDraw() {
    toDraw ? toDraw = false : toDraw = true
}

function makeShape() {
        const shapes = [makeRect, makeCircle, makeEllipse]
        const func = shapes[Math.floor(Math.random()*shapes.length)];
        func()
}

// shapes class - 

// circle , rect, triange

function makeRect() {
    const shape = new Rectangle
    const {r,g,b,x,y,height,width,test} = shape
    fill(r, g, b)
    noStroke()
    test()
    rect(x, y, height, width)
}

function makeCircle() {
    const shape = new Circle
    const {r,g,b,x,y,height} = shape
    fill(r, g, b)
    noStroke()
    circle(x, y, height)
}

function makeEllipse() {
    const shape = new Ellipse
    const {r,g,b,x,y,height, width} = shape
    fill(r, g, b)
    noStroke()
    ellipse(x, y, height, width)
}


function clearCanvas() {
    clear();
    background("#f4f4f4");
}




  

