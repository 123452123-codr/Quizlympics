function ready()
{
    var name = document.getElementById('name').value;
    var date = document.getElementById('date').value;
    var submit = document.getElementById('submitQuiz');
    var correct = 0;
    var waste = null;
}

submit.addEventListener("click", function(){
    ready();
    firebase.database().ref('Quiz/'+name).set({
        Name : name,
        Date : date,
        CorrectQuestions : correct
    });
});