const displayContainer = document.getElementById('displayContainer');

let currentFootPrintShowing = '';
let buttonIsClicked = false;

// setting up app
addToContainer('div', displayContainer, 'imageContainer');
addToContainer('img', document.getElementById('imageContainer'), 'imageDisplay');
addToContainer('img', document.getElementById('imageContainer'), 'imageMask');
addToContainer('p', document.getElementById('imageContainer'), 'animalNameDisplay');
addToContainer('div', document.getElementById('imageContainer'), 'buttonContainer');
addToContainer('button',  document.getElementById('buttonContainer'), 'button1');
addToContainer('button',  document.getElementById('buttonContainer'), 'button2');
addToContainer('button',  document.getElementById('buttonContainer'), 'button3');

// button click events
document.getElementById('button1').addEventListener('click', e => buttonDecider('button1'))
document.getElementById('button2').addEventListener('click', e => buttonDecider('button2'))
document.getElementById('button3').addEventListener('click', e => buttonDecider('button3'))

// start app
pickRandomImg()