let headingKeyCode = document.querySelector('.heading-keycode'); //storing data in veriable
let mainKeyCode = document.querySelector('.main-keycode');
let keyName = document.querySelector('.key-name');
let body = document.querySelector('body');

function getKeyCode(e) {
    let keyCode = e.which;
    let keyChar = e.key;
    headingKeyCode.innerHTML = keyCode;
    mainKeyCode.innerHTML = keyCode;
    keyName.innerHTML = keyChar;

    // console.log(value);
}

body.addEventListener('keydown', getKeyCode);