console.log("this is tut54");
const alarmsubmit = document.getElementById('alarmsubmit');
alarmsubmit.addEventListener('click', setalarm);
// var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');//it can change any audio

// function ringbell() {
//     Audio.play();
// }

function setalarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmdate = new Date(alarm.value);
    console.log(`setting alarm...${alarmdate}`);
    now = new Date();

    let timetoalarm = alarmdate - now;
    console.log(timetoalarm);
    if (timetoalarm >= 0) {
        setTimeout(() => {
            console.log("rining now")
                // ringbell();
        }, timetoalarm);
    }
}