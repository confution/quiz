

document.querySelector('button').addEventListener('click', generateQuestions)

function generateQuestions(){
    fetch('https://the-trivia-api.com/api/questions?limit=20&difficulty=hard')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(`error ${err}`))
}