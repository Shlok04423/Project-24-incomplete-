class Ground{
constructor(){
var options={
    isStatic:true
}
this.object=Bodies.rectangle(600,590,1200,15,options)
World.add(world,this.object)

}

display(){
rectMode(CENTER)
fill("yellow")
rect(this.object.position.x,this.object.position.y,1200,15)
}

}