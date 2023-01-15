function buttonDecider (buttonCalled) {
    // changes button color based on answer and plays sound
    let button = document.getElementById(buttonCalled);
    if (!buttonIsClicked) {
        
        if (button.innerText === currentFootPrintShowing)  {
            playAudio('src/sound/ding.mp3')
            changeAttrebute(buttonCalled, 'style', 'background:lightblue');
            changeAttrebute('animalNameDisplay', 'setText', 'That was correct !');
            changeAttrebute('animalNameDisplay', 'style', 'display:block');
         } else { 
            playAudio('src/sound/fail.mp3')
            changeAttrebute(buttonCalled, 'style', 'background:red'); 
            changeAttrebute('animalNameDisplay', 'setText', 'That was wrong !');
            changeAttrebute('animalNameDisplay', 'style', 'display:block');
            changeAttrebute('animalNameDisplay', 'style', 'background:red');
        }

        buttonIsClicked = true
        setTimeout(() => {
            pickRandomImg();
            buttonIsClicked = false;
            changeAttrebute('animalNameDisplay', 'style', 'display:none');
            changeAttrebute(buttonCalled, 'style', 'background:linear-gradient(to bottom, #c123de 5%, #a20dbd 100%);');
        }, 5000)
    }
    
}

function playAudio(url) {
    new Audio(url).play();
}

function pickRandomImg() {
    // loads in picture and changes values randomly
    const randomNumber = Math.floor(Math.random() * listOfFootPrints.length);
    const randomNumberForButton = Math.floor(Math.random() * 2);
    const randomScaleNumberForDisplay = Math.floor(Math.random() * 5);

    changeAttrebute('imageDisplay', 'src', `src/img/${listOfFootPrints[randomNumber]}.png`);
    changeAttrebute('imageMask', 'src', `src/img/mask.png`);
    changeAttrebute('animalNameDisplay', 'style', 'display:none');
    changeAttrebute('imageMask', 'style', `transform:rotate(90deg);`);
    changeAttrebute('imageMask', 'style', `transform:scale(${randomScaleNumberForDisplay});`);
    changeAttrebute('button1', 'setText', randomNumberForButton === 0 ? listOfFootPrints[randomNumber] : listOfFootPrints[Math.floor(Math.random() * listOfFootPrints.length)])
    changeAttrebute('button2', 'setText', randomNumberForButton === 1 ? listOfFootPrints[randomNumber] : listOfFootPrints[Math.floor(Math.random() * listOfFootPrints.length)])
    changeAttrebute('button3', 'setText', randomNumberForButton === 2 ? listOfFootPrints[randomNumber] : listOfFootPrints[Math.floor(Math.random() * listOfFootPrints.length)])

    currentFootPrintShowing = listOfFootPrints[randomNumber]
}

function addToContainer (objectToCreate, appendTo, objectID) {
    if (!objectToCreate || !appendTo || !objectID) return console.error('Add function does not have correct values');

    const newDomObject = document.createElement(objectToCreate);
    newDomObject.setAttribute('id', objectID);
    appendTo.appendChild(newDomObject);
}

function changeAttrebute (id, setAttributeToChange, value) {
    const item = document.getElementById(id);
    if (!item) return console.error('can not change item. Item does not exit', {id , setAttributeToChange, value});
    if (setAttributeToChange === 'setText') item.innerText = value;
    else item.setAttribute(setAttributeToChange, value);
}