console.log("this is clocking");

function updatetime() {
    let currenttime = new Date();
    let currenthour = currenttime.getHours();
    let currentminutes = currenttime.getMinutes();
    let currentsecond = currenttime.getSeconds();

    currenthour = (currenthour < 10 ? "0" : "") + currenthour;
    currentminutes = (currentminutes < 10 ? "0" : "") + currentminutes;
    currentsecond = (currentsecond < 10 ? "0" : "") + currentsecond;


    currenthour = (currenthour > 12) ? currenthour - 12 : currenthour;
    currenthour = (currenthour == 0) ? 12 : currenthour;

    let timeofday = (currenttime < 12) ? "am" : "pm";
    let currenttimestr = currenthour + ":" + currentminutes + ":" + currentsecond + ":" + timeofday;
    document.getElementById('clock').innerHTML = currenttimestr;
}
setInterval(() => {
    updatetime();
}, 1000);