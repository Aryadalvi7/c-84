canvas=document.getElementById("myCanvas");
nasa_images_array=["http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG","http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RLB_486265291EDR_F0481570RHAZ00323M_.JPG","http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RRB_486265291EDR_F0481570RHAZ00323M_.JPG","http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631300503690E01_DXXX.jpg","http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631300305227E03_DXXX.jpg","http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631290503689E01_DXXX.jpg","http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631290305226E03_DXXX.jpg","http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631280503688E0B_DXXX.jpg","http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631280305225E03_DXXX.jpg","http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631270503687E03_DXXX.jpg"];
var random_number=Math.floor(Math.random()*8);
ctx=canvas.getContext("2d");

var rover_width=100;
var rover_height=90;
background_image=nasa_images_array[random_number];
rover_image="rover.png";
rover_x=10;
rover_y=10;

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadbackground;
    background_imgTag.src=background_image;
    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=rover_image;
}

function uploadbackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
    
}
function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
    
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    if(keypressed=="37"){
     left();
    }

    if(keypressed=="38"){
        up();
       }

       if(keypressed=="39"){
        right();
       }

       if(keypressed=="40"){
        down();
       }



}

function up(){
    if(rover_y >=0){
        rover_y=rover_y-10;
        uploadbackground();
        uploadrover();
    }
}

function right(){
    if(rover_x <=700){
        rover_x=rover_x+10;
        uploadbackground();
        uploadrover();
    }
}

function left(){
    if(rover_x >=0){
        rover_x=rover_x-10;
        uploadbackground();
        uploadrover();
    }
}

function down(){
    if(rover_y <=500){
        rover_y=rover_y+10;
        uploadbackground();
        uploadrover();
    }
}