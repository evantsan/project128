song1 = '';
song2 = '';
leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;
function preload()
{
    song1 = loadSound('music.mp3');
    song2 = loadSound('music2.mp3');
}
function draw()
{
    image(video,0,0,700,500)
}
function setup()
{
    canvas = createCanvas(700,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    pn = poseNet(video,modelLoaded)
    pn.on('pose',gotPoses)
}
function modelLoaded()
{
    console.log('model has been loaded')
}
function gotPoses(results)
{
    if(results.length>0)
    {
    console.log(results)
    leftwristX = results[0].pose.leftWrist.x;
    leftwristY = results[0].pose.leftWrist.y;
    rightwristX = results[0].pose.rightWrist.x;
    rightwristY = results[0].pose.rightWrist.y;
    }
    
}