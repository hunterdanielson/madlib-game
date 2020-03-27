// get html elements by ids
// need all inputs to get words from user
const noun1Input = document.getElementById('noun-1');
const noun2Input = document.getElementById('noun-2');
const noun3Input = document.getElementById('noun-3');
const noun4Input = document.getElementById('noun-4');

const verb1Input = document.getElementById('verb-1');
const verb2Input = document.getElementById('verb-2');
const verb3Input = document.getElementById('verb-3');
const verb4Input = document.getElementById('verb-4');
const verb5Input = document.getElementById('verb-5');
const verb6Input = document.getElementById('verb-6');
const verb7Input = document.getElementById('verb-7');

const adverb1Input = document.getElementById('adverb-1');

const interjection1Input = document.getElementById('interjection-1');
// needs spans to put words in
const noun1Span = document.getElementById('noun-1-span');
const noun2Span = document.getElementById('noun-2-span');
const noun3Span = document.getElementById('noun-3-span');
const noun4Span = document.getElementById('noun-4-span');

const verb1Span = document.getElementById('verb-1-span');
const verb2Span = document.getElementById('verb-2-span');
const verb3Span = document.getElementById('verb-3-span');
const verb4Span = document.getElementById('verb-4-span');
const verb5Span = document.getElementById('verb-5-span');
const verb6Span = document.getElementById('verb-6-span');
const verb7Span = document.getElementById('verb-7-span');

const adverb1Span = document.getElementById('adverb-1-span');

const interjection1Span = document.getElementById('interjection-1-span');

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
    noun2Span.textContent = noun2Input.value;
    noun3Span.textContent = noun3Input.value;
    noun4Span.textContent = noun4Input.value;

    verb1Span.textContent = verb1Input.value;
    verb2Span.textContent = verb2Input.value;
    verb3Span.textContent = verb3Input.value;
    verb4Span.textContent = verb4Input.value;
    verb5Span.textContent = verb5Input.value;
    verb6Span.textContent = verb6Input.value;
    verb7Span.textContent = verb7Input.value;

    adverb1Span.textContent = adverb1Input.value;

    interjection1Span.textContent = interjection1Input.value;
    // hide input container
    inputContainer.style.display = 'none';
    // reveal mad lib container
    madlibContainer.style.display = 'block';
}

// add event listeners to button click
myButton.addEventListener('click', createMadlib);