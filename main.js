screen_width = 0;
screen_height = 0;
apple = "";
speak_data = "";
to_number = "";
draw_apples = "";

function preload()
{
    apple = loadImage('apple.png');
}

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition() ;

function start() {
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    to_number = Number(content);

    if(Number.isInteger(to_number))
    {
        document.getElementById("status").innerHTML = "Started Drawing Apples";
        draw_apples = "set";   
    }
    else
    {
      document.getElementById("status").innerHTML = "The Speech has not recognised a Number";
    }
}

function setup() 
{

       screen_width = window.innerWidth;
       screen_height = window.innerHeight;
       canvas = createCanvas(screen_width , screen_height-150);

}

function draw()
{

    if(draw_apples == "set")
    {

        for(var i = 1; i <= to_number; i++)
        {
            x = Math.floor(Math.random() * 700);
            y = Math.floor(Math.random() * 400);
            image(apple,x,y,50,50);
        }

    }

    document.getElementById("status").innerHTML = to_number + "Apples Drawn. ";
    speak_data = to_number + "Apples Drawn";
    speak();

}