class Shape {
    constructor() {
        this.r = random(1, 255)
        this.g = random(1, 255)
        this.b = random(1, 255)
        this.height = random(1, (windowHeight/8))
        this.width = random(1, (windowWidth/8))
        this.x = random(1, windowWidth)
        this.y = random(1, windowHeight)
    }

    pulse() {
        console.log('working from pulse')
    }
}






