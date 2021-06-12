class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
    
        this.polygon=Bodies.circle(50,200,20);
        World.add(world,this.polygon);
    
        slingShot= new SlingShot(this.polygon,{x:100,y:200});
    
    }

    fly(){
        this.polygon.bodyA = null;
    }

    display(){
    
        if(this.polygon.bodyA){
            var pointA = this.polygon.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(48,22,8)

            if(pointA.x<220){
                strokeWeight(10);
                line(pointA.x-25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-25, pointA.y, pointB.x+30, pointB.y);
                image(this.sling3,pointA.x-30,pointA.y-10,15,30)
            }
            else{
                strokeWeight(6);
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+30, pointB.y);
                image(this.sling3,pointA.x+25,pointA.y-10,15,30)  
            }
           
            pop();
        }
    }
    
}