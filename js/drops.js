class Drop{

    constructor(x, y){
        this.x=x;
        this.y=y;
        this.body = Bodies.circle(this.x, this.y, 10);
        World.add(world, this.body);
    }

    update(){
        if(this.body.position.y>=810){
            World.remove(world, this.body);
        }
    }

    display(){
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y, 10, 10);
    }

}