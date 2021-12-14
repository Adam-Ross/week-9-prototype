class Rectangle extends Shape {
    constructor(r,g,b,x,y,width,height) {
        super(r,g,b,x,y,width,height)
        this.angle = 0
    }

    test = () => {
        console.log(this.angle)
        
    }
}