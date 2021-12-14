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

// class Shape {
//     constructor() {
//         // this.r = Math.floor(Math.random(1, 255) * (255 - 1) + 1)
//         // this.g = Math.floor(Math.random(1, 255) * (255 - 1) + 1)
//         // this.b = Math.floor(Math.random(1, 255) * (255 - 1) + 1)
//         // this.height = Math.floor(Math.random(1, window.innerHeight / 8) * 100)
//         // this.width = Math.floor(Math.random(1, window.innerWidth / 8) * 100)
//         // this.x = Math.floor(Math.random(1, window.innerWidth) * 100)
//         // this.y = Math.floor(Math.random(1, window.innerHeight) * 100)
//         this.test = true
//     }
// }

// class Rectangle extends Shape {
//     constructor(r,g,b,x,y,width,height) {
//         super(r,g,b,x,y,width,height)
//     }
// }





