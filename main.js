var mariojump;
var mariocoin;
var gameover;
var mariokick;
var mariodie

function preload() {
	world_start = loadSound("world_start.wav");
	mariojump=loadSound("jump.wav");
	mariocoin=loadSound("coin.wav");
	gameover=loadSound("gameover.wav");
	mariokick=loadSound("kick.wav");
	mariodie=loadSound("mariodie.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas')
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');
	poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
	game()
}

function modelLoaded() {
	console.log('Model Loaded!');
  }
  
  function gotPoses(results)
  {
	if(results.length > 0)
	{
	  noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;
	}
  }
  





