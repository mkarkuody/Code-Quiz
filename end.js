var home = document.getElementById("home");
var remove = document.getElementById("remove");
var local = JSON.parse(localStorage.getItem("userData"));
var listEl = document.getElementById("listEl");


function displayScores() {
    if (local !== null) {
        var scoreList = document.createElement("ol");
        scoreList.className = "scoreListClass";
        for (var i = 0; i < local.length; i++) {
            var initials = local[i].inits;
            var scores = local[i].userScore
            var scoreEntry = document.createElement("li");
            scoreEntry.innerHTML = initials + " - " + scores;
            scoreList.appendChild(scoreEntry);
        }
        listEl.appendChild(scoreList);
    }
};

displayScores();

home.addEventListener("click", function () {
    location.href = "index.html";
});

remove.addEventListener("click", function () {
    listEl.innerHTML = "";
    window.localStorage.clear();

});