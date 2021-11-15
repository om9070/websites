console.log("drag drop is js")

const imgbox = document.querySelector('.imgbox');
const whitebox = document.getElementsByClassName('whitebox');

imgbox.addEventListener('dragstart', (e) => {
    console.log("this is  start drag");
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);

})
imgbox.addEventListener('dragend', (e) => {
    console.log("this is  start end");
    e.target.className = 'imgbox';
})

for (key of whitebox) {
    key.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log("this is  dragover");

    });
    key.addEventListener('dragenter', (e) => {
        console.log("this is dragenter");

    });
    key.addEventListener('dragleave', () => {
        console.log("this is dragleave");

    });
    key.addEventListener('drop', (e) => {
        console.log("this is drag");
        e.target.append(imgbox);
    });
}