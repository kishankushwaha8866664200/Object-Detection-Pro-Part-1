img = "";

function preload() {
    img = loadImage('obj2.jpeg');
}
function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 500, 500);

    stroke('#ff0000');
    fill('#ff0000');// to set text color to red
    text("Books", 30, 30);// to display text in canvas
    noFill();// to make fill transparant
    rect(20,10, 450, 480);  

}