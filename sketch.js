function setup() {
    createCanvas(700, 700);
    background("red");
  }
  
  function draw() {
    
    stroke("white")
    fill("blue")
    //console.log(mouseIsPressed)
    if(mouseIsPressed) {
        rect(mouseX, mouseY, 20, 35)
    } 
    }