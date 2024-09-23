
var questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        option1: '<script>',
        option2: '<javascript>',
        option3: '<js>',
        option4: '<scripting>',
        correctOption: '<script>',
    },
    {
        question: 'Where is the correct place to insert a JavaScript?',
        option1: 'The <head> section',
        option2: 'The <body> section',
        option3: 'Both the <head> and "body" section are correct',
        correctOption: 'The <body> section',
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        option1: '<scripr href="xxx.js">',
        option2: '<scripr name="xxx.js">',
        option3: '<scripr src="xxx.js">',
        correctOption: '<scripr src="xxx.js">',
    },
    {
        question: 'The external JavaScript file must contain the <script> tag.',
        option1: 'False',
        option2: 'True',
        correctOption: 'False',
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        option1: 'msg("Hello World");',
        option2: 'alert("Hello World");',
        option3: 'alertBox("Hello World");',
        option4: 'msgBox("Hello World");',
        correctOption: 'alert("Hello World");',
    },
    {
        question: 'How do you create a function in JavaScript?',
        option1: 'function = myFunction()',
        option2: 'function myFunction()',
        option3: 'function:myFunction()',
        correctOption: 'function myFunction()',
    },
    {
        question: 'How do you call a function named "myFunction"?',
        option1: 'call function myFunction()',
        option2: 'myFunction()',
        option3: 'call myFunction()',
        correctOption: 'myFunction()',
    },
    {
        question: 'How to write an IF statement in JavaScript?',
        option1: 'if i = 5',
        option2: 'if(i == 5)',
        option3: 'if i == 5 then',
        option4: 'if i = 5 then',
        correctOption: 'if(i == 5)',
    },
    {
        question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        option1: 'if =! 5 then',
        option2: 'if(i != 5)',
        option3: 'if i <> 5',
        option4: 'if(i <> 5)',
        correctOption: 'if(i != 5)',
    },
    {
        question: 'How does a WHILE loop start?',
        option1: 'while i = 1 to 10',
        option2: 'while (i <= 10; i++)',
        option3: 'while(i <= 10)',
        correctOption: 'while(i <= 10)',
    },
    

]

//question index
var questionIndex = 0;
//value of score
var score=0;
//scoring
function updateScore() {
    var selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption && selectedOption.value === questions[questionIndex].correctOption) {
        score++;  // Increment score if the answer is correct
    }
}
//removing tags
function escapeHTML(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}
//render question 

function renderQuestion() {
    if (questionIndex >= questions.length) {
        alert('Quiz completed! Your score is: ' + score + '/' + questions.length);
        return;
    }

//writing html
var questionHtml=`<p>${questions[questionIndex].question}</p>`
var optionsHtml ="";
//checking number of options in loop
for(var key in questions[questionIndex]){
    if(key.startsWith('option')){
        var optionValue = questions[questionIndex][key];
        optionsHtml += `
            <label>
                <input type="radio" name="option" value="${escapeHTML(optionValue)}">
                ${escapeHTML(optionValue)}
            </label><br>`;
    }
}
console.log(optionsHtml)


//inserting question 
document.getElementById('questionBox').innerHTML = questionHtml
//inserting options
document.getElementById('optionBox').innerHTML = optionsHtml

}
//next btn
document.getElementById('nextBtn').addEventListener('click', function() {
    var selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert('Please select an option.');
        return;
    }

    if (selectedOption.value === questions[questionIndex].correctOption) {
        console.log('Correct');
    } else {
        console.log('Incorrect');
    }
    updateScore();
    questionIndex++;
    renderQuestion();
});

// Initial render
renderQuestion();









console.log(optionsHtml)
