var quizBox = document.getElementById('questionBox');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');

var app = {
     questions: [
                 {
                   q: 'HTML stands for?',
                options: ['Hyper Text Markup Language', 'High Text Markup Language','Hyper Tabular Markup Language','None of these'],
                 answer: 1    
                 },
                 {
                    q: 'Which of the following tag is used to mark a beginning of paragraph?',
                    options: ['<TD>', '<br>','<p>','<TR>'],
                     answer: 3    
                 },
                 {
                    q: 'Correct HTML tag for the largest heading is:',
                    options: ['<head>', '<h6>','<heading>','<h1>'],
                     answer: 4    
                 }
                ],
       index: 0,         
       load: function(){
               quizBox.innerHTML = this.questions[this.index].q;
               option1.innerHTML = this.questions[this.index].options[0];
               option2.innerHTML = this.questions[this.index].options[1];
               option3.innerHTML = this.questions[this.index].options[2];
               option4.innerHTML = this.questions[this.index].options[3];
       }         
}; 

window.onload = app.load();