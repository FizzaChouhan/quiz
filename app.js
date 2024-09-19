
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
]
//question index
var questionIndex = 0;
//removing tags
function escapeHTML(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}
//render question 

function renderQuestion() {
    if (questionIndex >= questions.length) {
        alert('Quiz completed!');
        return;
    }

//writing html
var questionHtml=`<p>${questions[questionIndex].question}</p>`
var optionsHtml =`<label>
<input type="radio" name="option" value="${escapeHTML(questions[questionIndex].option1)}">
${escapeHTML(questions[questionIndex].option1)}
</label><br>
<label>
<input type="radio" name="option" value="${escapeHTML(questions[questionIndex].option2)}">
${escapeHTML(questions[questionIndex].option2)}
</label><br>
<label>
<input type="radio" name="option" value="${escapeHTML(questions[questionIndex].option3)}">
${escapeHTML(questions[questionIndex].option3)}
</label><br>
`;
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

    if (selectedOption.value === escapeHTML(questions[questionIndex].correctOption)) {
        console.log('Correct');
    } else {
        console.log('Incorrect');
    }

    questionIndex++;
    renderQuestion();
});

// Initial render
renderQuestion();
