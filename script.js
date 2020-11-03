var queiz = document.getElementById("queiz");
var counter = document.getElementById("counter");
var btn = document.getElementById("btn");
var timeKeeper = document.getElementById("timeKeeper");
var iconEl = document.getElementById("icon");
var next 
var answer = document.getElementById("answer");
var scoreEl = document.getElementById("result");
var btnScore = document.getElementById("btnScore");
var currentindex = 0;
var score = 0;
var count = 80;
var alert =document.getElementById("note");
var info = document.getElementById("info");
var allScores = [];
var storedScores = JSON.parse(localStorage.getItem("userData"));
var questions = [
    {
        quiz: "Choose the correct HTML element for the largest heading.",
        choices: ["<head>","<heading>","<h1>", "<h6>"],
        answer : "<h1>"    
    },
    {
        quiz: "Which HTML tag is used to define an internal stylesheet?",
        choices: ["<css>","<link>","<style>", "<script>"],
        answer : "<style>"    
    },
    {
        quiz: "Wich CSS property controls the text size?",
        choices: ["font-size","font-style","text-size", "text-style"],
        answer : "font-size"    
    },
    {
        quiz: "How does FOR loop start? ",
        choices: ["for (i<=i++)","for(i=0; i <=5)","for(i=0 i<=5; i++)","for i=1to 5"],
        answer : "for(i=0 i<=5; i++)"    
    },
    {
        quiz: "Which event occures when the user clicks on an HTML element?",
        choices: ["onmouseclick","onchange","onmouseover", "onclick"],
        answer : "onclick"    
    },
]
btn.addEventListener("click", starQuiz);
function starQuiz(){
    if(storedScores !==null) {
        allScores = storedScores;
    }
    info.classList.add("d-none")
    btn.classList.add("d-none")
    timeKeeper.classList.remove("d-none")
    queiz.classList.remove("d-none")
    next= questions[currentindex]
    console.log(next.quiz)
    
        showEl(next)

    gametime()
}
btnScore.addEventListener("click" , function(){
    let name = document.getElementById("inputScore").value
    end(name, count)
});

function gametime(){

    var timeinterval = setInterval(function(){
        counter.innerText = count
         count--;
        }, 1000);

}

function end(a, b) {

    var userData = {
        inits: a,
        userScore: b
    };
    allScores.push(userData);

    localStorage.setItem("userData", JSON.stringify(allScores));
    location.href = "end.html";
}

function showEl(question){
    iconEl.innerText=question.quiz
    question.choices.forEach(function(element) {
     var button =document.createElement("button")
    button.className="btn-primary btn-block text-left"
    button.innerText=element
    answer.appendChild(button)
    button.addEventListener("click", displaynextQuestion)
    });
}


function displaynextQuestion(e){
    currentindex++
    if(currentindex < questions.length){
        correction(e.target.innerText == next.answer)
        answer.innerHTML=""
        if(currentindex < questions.length){    
            next= questions[currentindex]
            showEl(next)  
        }else {
            currentindex = 0
            showEl(next)  
        }

    }else{
        endgame()
        

    }
    
     
}
function correction(response){
    
    if(response){
        alert.textContent= "Correct!"
        
    }else {
        alert.innerText="Incorrect"
        count = count -10
        counter.textContent = count
        

    }
    setTimeout(function(){
        alert.textContent=""
    
        }, 1000);

}
 function endgame (){
    scoreEl.textContent= count
    addscore.classList.remove("d-none")
    timeKeeper.classList.add("d-none")
    queiz.classList.add("d-none")
    addscore.classList.remove("d-none")


 }
