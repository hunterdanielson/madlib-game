// get html elements by ids

// need all inputs to get words from user
const noun1Input = document.getElementById('noun-1');

// needs spans to put words in
const noun1Span = document.getElementById('noun-1-span');

// need container that holds all inputs
const inputContainer = document.getElementById('input-container');

// need container that holds the mad lib
const madlibContainer = document.getElementById('madlib-container');

// need button to add event listener
const myButton = document.getElementById('button');


function createMadlib() {
    // get value of all inputs
    // set values from inputs into the mad lib
    console.log('work', noun1Input.value);
    noun1Span.textContent = noun1Input.value;

    // hide input container
    inputContainer.style.display = 'none';
    // reveal mad lib container
    madlibContainer.style.display = 'block';
}

// add event listeners to button click
myButton.addEventListener('click', createMadlib);