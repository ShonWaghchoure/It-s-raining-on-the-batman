class Umbrella{
    constructor(x, y){
        this.x=x+22;
        this.y=y;
        this.rad=170;
        this.body = Bodies.circle(this.x, this.y, this.rad, {isStatic:true});
        World.add(world, this.body);
    }

    display(){
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y, this.rad*2, this.rad*2);
    }
}