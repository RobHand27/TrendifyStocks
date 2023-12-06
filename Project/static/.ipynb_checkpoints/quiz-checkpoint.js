/* quiz code:
  - each page will have 8 questions
  - only one will show at a time
  - back/next buttons allow user to cycle through the questions
  - at the end, javascript creates a submit and submit button
  - this submit will send the data to flask which will store it in scores table using sql

  - the page will pass a json string to js with questions and answers upon loading.
*/
let currScore = 0;
let currQuestionNum = 0; // currQuestionNum == 8 => go to submit/submit
let jsonQuestions; // this will be a javascript array of Question objects
let questions; // contains list of question elements on page
let submit; // submit for the end of quiz
let questionsAnswered = []; // this keeps track of how many questions
// user has covered so we can subtract if users go backs and changes their answer to something incorrect
function loadQuiz(jsonString) {
  currScore = 0;
  currQuestionNum = 0;
  jsonQuestions = JSON.parse(jsonString);
  questions = document.getElementsByClassName("question");
  submit = document.getElementsByClassName("submitSlide")[0];
}
// this function has to tally the score and move forward/back
function cycleQuestion(change) {
  // accepts integer -1/+1 for back/next
  if (currQuestionNum + change > 8 || currQuestionNum + change < 0) {
    return;
  }
  // if going forward, tally the score,
  if (change == 1){
    let currQuestion = document.getElementsByClassName("question")[currQuestionNum];
    let choices = currQuestion.childNodes;
    let chosen = getSelected(choices); // value of selected radio button
    let questionObject  = jsonQuestions[currQuestionNum];
    if (chosen != null && chosen == questionObject.CorrectChoice){
      currScore += questionObject.Points;
    } else if (questiosnAnswered.includes(currQuestionNum)) {
      currScore -= questionObject.Points;
    }
    if(chosen != null){
      questionsAnswered.push(currQuestionNum);
    } else if (questionsAnswered.includes(currQuestionNum)) {
      questionsAnswered = removeFromArray(questionsAnswered, currQuestionNum);
    }
    questions[currQuestionNum].style.display = "none";
    questions[currQuestionNum + 1].style.display = "block";
  } else {
    questions[currQuestionNum].style.display = "none";
    questions[currQuestionNum + 1].style.display = "block";
  }
}

function getSelected(radios){
  for (const radio of radios) {
    if (radio.checked) {
      return radio.value;
    }
  }
  return null;
}

function sendScoresFlask(resultsUrl, username){
  fetch(resultsUrl, {
  method: "POST",
  body: `{"user" : ${username}, "score": ${currScore}}`
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
});
}
// removes value from array, returns new array.
function removeFromArray(array, value) {
  let indexToBeRemoved = array.indexOf(value);
  let newArr = [];
  for(var i = 0; i < array.length; i++) {
    if (i != indexToBeRemoved) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}