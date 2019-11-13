//feels like i should first implement a "Start" button that pushes the question, and make the input visible on click
$('#toggleBtn').click(function(){
	$('#quizDiv').toggle();
	$('#toggleBtn').html('Quit');
	for(var i= 0; 1< quiz.length; i++){
		myH1.innerText= quiz[i].question;
		return;
	 }
	
})

var quiz= [
{
	question: "Link is Male.",
	answer: true
},
{
	question: "Zelda is a princess.",
	answer: true
},
{
	question: "Ganondorf is the king of Hyrule.",
	answer: false
},
{
	question: "Ganondorf rocks.",
	answer: true
}];

var input = document.getElementById("userAnswer");
var myH1 = document.getElementById("headerInput");

function getAnswer() {

	for(var i=0; i< quiz.length; i++) {
		if(input.value == true) {
			myH1.innerText = quiz[i].question;
			return;
		}
		// var myH1.innerText= quiz[i]statement; 
		// trying to change the h1 innertext,
		//innertext input to access the .statement property in
		//my questions variable.

		// console.log("Questions statement: " + questions[i].statement);
		// console.log("questions question: " + questions[i].question);
		// if(questions[i].correct == userAnswer) {
		// 	console.log("Answer is correct!");
		// } else
		// 	console.log("Answer is not correct");
		// }
	};
}

