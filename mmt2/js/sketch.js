let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson";
let mijnData;
let topMargin = 200;
let leftMargin = 60;
let canvasHeight = 650;
let angle = 0;
let place;


function preload(){
    mijnData = loadJSON(url)
    
}

function setup(){
    createCanvas(800, 800); 
    console.log(mijnData);
}

function draw(){

    background(0);
    stroke(255,150,90);
    strokeWeight(2);
    noFill();
    arc(400,140,100,75,0,PI);
    arc(400,150,150,95,0,PI);
    arc(400,160,200,115,0,PI);
    arc(400,90,100,75,PI,0);
    arc(400,80,150,95,PI,0);
    arc(400,70,200,115,PI,0);


    fill(255,0,0);
    noStroke();

  for (let data = 0; data < mijnData.features.length; data++){
      var mag = mijnData.features[data].properties.mag;
      rect(90 + data * 65, height - 150, 30, mag * 45 *- 1);  
      if(mouseX > 60 && mouseX < width && mouseY > height - 450 && mouseY < height - 180){
        textFont('arial');
        textSize(20);
        text(mag, 105 + data * 65, height - 470); 
      }

  }

  textSize(25);
  textFont('Impact');
  noStroke();
  textAlign(CENTER);
  text('Daily earthquake visualization', width/2, 125);

  stroke(255,255,255);
  strokeWeight(3);
  //horizontaal
  line(60, 650, width, 650);
  //verticaal
  line(60, height - 150, 60, 200); 

  line(leftMargin - 10, topMargin + 10, leftMargin, topMargin);
  line(leftMargin + 10, topMargin + 10, leftMargin, topMargin);
  
  for(let i = 250; i < height-155; i+=44){
    for(let j = 1; j < 10; j++){
      stroke(255,255,255);
      strokeWeight(3);
      line(55,i,65,i);

  }

  for(let j=0; j <=10; j=j+1){
    noStroke();
    fill(255);
    text(j, 25, 655 + j* 44 * -1);
  }
    
  }
  for (let data = 0; data < mijnData.features.length; data++){
    let place = mijnData.features[data].properties.place;
    fill(255);
    textFont('arial');
    textSize(10);
    textAlign(CENTER);
    place = place.split(',')[1]
    text(place, 40+data*70, height-110, 100);
    
  }


  }

function getData(data){
    mijnData = data;
}