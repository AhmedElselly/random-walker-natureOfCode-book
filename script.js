let walker;
function setup(){
    createCanvas(500, 500);
    walker = new Walker(width / 2, height / 2);
}

function draw(){
    background(0);

    walker.update();

    walker.show();
}