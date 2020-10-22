class Rope {
    constructor(body1,body2){
        var options={
            length:50,
            bodyA:body1,
            pointB:body2,
            stiffness:0.01

        }
       
        this.pointB=body2
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
      
    }
    display(){
        var posa=this.chain.bodyA.position;
        var posb=this.pointB;
        strokeWeight(2);
        line (posa.x,posa.y,posb.x,posb.y);
    }  
    fly(){
        this.rope.body2 = null;
    }
}