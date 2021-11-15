let screen = document.getElementById('screen');
let button = document.querySelectorAll('button');
let screenvalue = "";
for (item of button) {
    item.addEventListener('click', (e) => {
        buttontext = e.target.innerText;
        console.log(buttontext)
        if (buttontext == '*') {
            screenvalue += buttontext;
            screen.value = screenvalue;
        } else if (buttontext == 'c') {
            screenvalue = "";
            screen.value = screenvalue;
        } else if (buttontext == '=') {
            screen.value = eval(screenvalue);
        } else {
            screenvalue += buttontext;
            screen.value = screenvalue;
        }
    })
}