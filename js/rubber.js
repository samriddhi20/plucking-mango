class Chain{
    constructor(body1,point2){
    var options={
    bodyA:body1,
    pointB:point2,
    stiffness:0.04,
    length:20
    }
    this.chain=Constraint.create(options)
    World.add (world,this.chain);
    this.pointB=point2
    }
   
    display(){
    if(this.chain.bodyA){
        fill ("black")
        textSize(20)
        text("drag the mouse to shoot the stone",100,50)
    strokeWeight(4)
    var pointA = this.chain.bodyA.position
    var pointB = this.pointB
    line(pointA.x,pointA.y,pointB.x,pointB.y)

}
    }
attach(body){
    this.chain.bodyA = body;
    
}
fly(){
    this.chain.bodyA = null;
 
}
}
