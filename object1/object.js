var Status;
img = "";

function preload() {
    img = loadImage('obj1.jpeg');
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(img,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}
function draw() {
    image(img, 0, 0, 500, 500);

    stroke('#ff0000');
    fill('#ff0000');// to set text color to red
    text("Trophy", 150, 30);// to display text in canvas
    noFill();// to make fill transparant
    rect(140,10, 250, 480);
}
