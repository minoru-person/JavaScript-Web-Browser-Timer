/*
Used this method describe in this stackoverflow question
http://stackoverflow.com/questions/9419263/playing-audio-with-javascript

Specifically this website mentioned in answer by Shanabus
http://www.storiesinflight.com/html5/audio.html

Note: YourSoundFile.mp4 must be inserted in the same directory as this code.

Used code from w3schools. SetTimeout, ON/OFF.
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_settimeout_cleartimeout2
*/

var c = 0;
var t;
var timer_is_on = 0;

function timedCount() {
    var Timer = document.getElementById("input");
    var TimerValue = Timer.value;
    var TimerText = document.getElementById("txt");

    TimerText.style.color = "red";
    TimerText.value =  TimerValue + " minute timer."

    // When counter reaches specified time. Play Audio File.
    if(c == TimerValue * 60){
        return document.getElementById('audiotag1').play();
    };
   
    if(c % 60 == 0) {
        document.getElementById("minuteElapse").value = c/60;    
    };  

    document.getElementById("secondsElapse").value = c;
    c = c + 1;
    t = setTimeout(function(){ timedCount() }, 1000);
}

function startCount() {    
    if (!timer_is_on) {
        timer_is_on = 1;
        timedCount();
    }    
}

function stopCount() {
    clearTimeout(t);
    timer_is_on = 0;
}

// Prevents timer from running with an invalid number. 
function inputCheck(){    
    var test = document.getElementById("input").value;
    test = test/1; // test would equal NaN if invalid number.

    // testing for NaN in JavaScript.
    // https://stackoverflow.com/questions/30314447/how-do-you-test-for-nan-in-javascript
    if( test !== test){	
       	location.reload(true);	
    } else {
       	startCount(); 
    }
}
