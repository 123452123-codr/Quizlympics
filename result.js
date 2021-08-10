function ready()
{
    var scoreDisplay = document.getElementById('resultDisplay');
    var correctDisplay = document.getElementById('correctDisplay');
    var incorrectDisplay = document.getElementById('incorrectDisplay');
}

window.onload = function(){
    let dataextract = localStorage.getItem("Info");
    let importdata = JSON.parse(dataextract);
    var importReady = eval(importdata.readyFunction);
    
    importReady();
    firebase.database().ref(importdata.Name).on("value", function(snapshot){
        var name = snapshot.val().NameOfUser;
        scoreDisplay.innerHTML = snapshot.val().Score;
        var Date = snapshot.val().Date;
    });

    
};