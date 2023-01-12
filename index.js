// Your Code Here
let userName = window.prompt('Please enter a username')
let score = 0
for (let i=0; i< questions.length; i++) {
    let question = questions[i]
    let answer = window.prompt(question.text)
    if(answer === question.correctAnswer){
        console.log('Correct')
        score++
    }

}
window.prompt('You got ' + score + ' out of ' + questions.length + 'questions correct')