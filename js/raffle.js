// raffle code thingie wowie i made this in like 30 seconds (not clickbait)
// TODO: are these comments even necessary?
// NOTE: no. they arent.

// this isnt used but is here for some fricking reason.
// why did i make an alert that screams at you?
// did you CHEAT??!?! IS THIS FOR THE ANTI PIRACY SCREEN?
// no. no. no it isnt what why. why is this here.
function thisisntusedlol() {
    alert("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
}

// so. why am i even putting comments here then?
// becuase its FUNNY.
//
//
// is it really though..?

// win! you win!
// yaY! yipee! you win!!!!
// ...
// no. no. no no nno no no nono no no no no onon onono oh no oh god oh no
function instantwin() {
    // WINER code!! youre winer if you get this!
    document.body.remove();
    alert("youre win!")
}

// okay thats enough fooling around heres the random
// raffle picker. its not special or anything i copied
// code from w3schools lol anyways it picks between 0-99
// and thats it. not very special.

var randval = -7
function randompick() {
    var num = document.getElementById('num');
    randval = Math.floor(Math.random() * 10);
    num.innerHTML = randval;
}

// dont use this this sucks.
// why would i do this? im supposed to be keeping this a secret
// you fool.
// you BUFFOON.
// you IMBECILE. WHY IS THIS EVEN HERE.
function warning() {
    alert("wowie You got the [Correct] number! Number is ")
}

// this is here for older browsers wowie
// if you're using internet explorer in [CURRENT YEAR]
// i'm. im. why are you doing this to yourself? seriously?
// i'm suprised you're even still able to actively use it.
// okay well im a freak and i use old operating systems so
// this is actually here for compatability reasons.
//
//
// okay! yay!!!
if(window.addEventListener){
    window.addEventListener('load', function(){
        randompick();
    });
} else if(window.attachEvent){
    window.attachEvent('onload', function(){
        randompick();
    });
}

// so that was the raffle code. whoop de doooooo..
// look at you reading this. youre a fair bit nosy aint ya?
// so... here's your reward for being so nozy:
//
// the answer you're seeking may or may not be buried here.
// poke around this file and you may be rewarded with the
// thing you desire.
