let time = 0;
let Interval = 0;
let pause = false;

document.getElementsByClassName('start')[0].addEventListener('click',()=>{
    Interval = setInterval(Start,1000);
});
document.getElementsByClassName('stop')[0].addEventListener('click',()=>{
    Stop();
});

document.getElementsByClassName('restart')[0].addEventListener('click',()=>{
    location.reload();
});






function Start(){
    if(!pause)
    time++;
    let hour = Math.floor(time / 3600);
    time %= 3600;
    let minute = Math.floor(time / 60);
    time %= 60;
    hour = hour > 9 ? hour : '0'+hour;
    minute = minute > 9 ? minute : '0'+minute;
    time = time > 9 ? time : '0'+time;
    view = `${hour}:${minute}:${time}`;
    document.getElementsByClassName('time')[0].innerHTML = view;
    document.getElementsByClassName('start')[0].disabled = true;
}

function Stop(){
    let btn = document.getElementsByClassName('stop')[0];
    if(time > 0){
        if(pause){
            btn.textContent = 'STOP';
            pause = false;
        }
        else {
            btn.textContent = 'CONTINUE';
            pause = true;
        }
    }
    
}

