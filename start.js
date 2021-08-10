function ready(){
    var name = document.getElementById('name');
    var date = document.getElementById('date');
    var submit = document.getElementById('submitQuiz');
    var correct = 0;
    var waste = null;
}

submit.addEventListener("click", function(){
    {
        if(document.getElementById('a1').checked)
        {
            correct++;
        }
        else
        {
            waste++;
        }
    }
    {
        if(document.getElementById('a2').checked)
        {
            correct++;
        }
        else
        {
            waste = 1;
        }
    }
    {
        if(document.getElementById('a3').checked)
        {
            correct++;
        }
        else
        {
            waste = 1;
        }
    }
    {
        if(document.getElementById('a4').checked)
        {
            correct++;
        }
        else
        {
            waste = 1;
        }
    }
    {
        if(document.getElementById('a5').checked)
        {
            correct++;
        }
        else
        {
            waste = 1;
        }
    }
    
    ready();
    firebase.database().ref(name).set({
        NameOfUser : name,
        Date : date,
        Score : correct
    });

    const text = {Name: name, Date: date, readyFunction: ready()};
    const usedata = JSON.stringify(text);
    localStorage.setItem("Info", usedata);
    var checker = 1;
    window.open("result.html","_self");
});

window.onload = function(){
    if(checker == 1)
    {
        window.open("result.html","_self");
    }
};