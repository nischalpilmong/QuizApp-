var scoreBoard = document.getElementById('scoreBoard');
var quizBox = document.getElementById('questionBox');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
var ul = document.getElementById('ul');
var btn = document.getElementById('button');

var app = {
     questions: [
                 {
                   q: 'HTML stands for?',
                options: ['Hyper Text Markup Language', 'High Text Markup Language','Hyper Tabular Markup Language','None of these'],
                 answer: 1    
                 },
                 {
                    q: 'Which of the following tag is used to mark a beginning of paragraph?',
                    options: ['TD', 'br','p','TR'],
                     answer: 3    
                 },
                 {
                    q: 'Correct HTML tag for the largest heading is:',
                    options: ['head', 'h6','heading','h1'],
                     answer: 4    
                 }
                ],
       index: 0,         
       load: function(){
                if(this.index <= this.questions.length - 1){
                    quizBox.innerHTML = this.index + 1 + ". " + this.questions[this.index].q;
                    option1.innerHTML = this.questions[this.index].options[0];
                    option2.innerHTML = this.questions[this.index].options[1];
                    option3.innerHTML = this.questions[this.index].options[2];
                    option4.innerHTML = this.questions[this.index].options[3];
                    scoreBoard.innerHTML = this.questions.length + "/" + this.score;
                }else{
                     quizBox.innerHTML = "Quiz is Over......!!!";
                     option1.style.display = "none";
                     option2.style.display = "none";
                     option3.style.display = "none";
                     option4.style.display = "none";
                     btn.style.display = "none";
                }
               
       },
       next: function(){
           this.index++;
           this.load();
       },
       check: function(el){
           var id = el.id.split("");
           if(id[id.length - 1] == this.questions[this.index].answer){
               this.score++;
               el.className = 'correct';
               el.innerHTML = "Correct Answer!!";
               this.scoreBoard();
           }else{
               el.className = 'wrong';
               el.innerHTML = 'Wrong Answer';
           }
       },
       notClickAble: function(){
                 for(let i = 0; i < ul.children.length; i++){
                     ul.children[i].style.pointerEvents = "none";
                 }
       },
       clickAble: function(){
        for(let i = 0; i < ul.children.length; i++){
            ul.children[i].style.pointerEvents = "auto";
            ul.children[i].className = '';
            }
       },
       score: 0,
       scoreBoard: function(){
           scoreBoard.innerHTML = this.questions.length + "/" + this.score;
       }         
}; 

window.onload = app.load();
function button(el){
    app.check(el);
    app.notClickAble();
}
function next(){
    app.next();
    app.clickAble();
}