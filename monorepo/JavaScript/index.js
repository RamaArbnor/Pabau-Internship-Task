let form = document.getElementById("form")

const shuffleButton = document.getElementById("shuffle-button")
const changeButton = document.getElementById("change-button")
const showButton = document.getElementById("show-button")

shuffleButton.addEventListener('click', shuffleValues);
changeButton.addEventListener('click', changeValues);
showButton.addEventListener('click', showValues);

const choices = document.querySelectorAll('input[type="checkbox"]');
const containers = form.children;

const results = document.getElementById("results")



function shuffleValues() {

  for (let i = 0 ; i < choices.length; i++) {
    let r = Math.floor(Math.random() * 4);
    containers[i].style.order = r;
  }
}

function changeValues(){
    
    for (let i = 0 ; i < choices.length; i++) {
        let r = Math.random();
        choices[i].checked = r <= 0.5;
    }
}

function showValues(){
    results.innerHTML = "The Selected are : "
    choices.forEach(choice => {
        if(choice.checked)
            results.innerHTML += choice.name + ' '

    });
}