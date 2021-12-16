function salvarFeedback(){
    var email = document.getElementById("exampleFormControlInput1").value;
    var opiniao = document.getElementById("exampleFormControlTextarea1").value;
    localStorage.setItem(email, opiniao);
}


