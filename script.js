const newBtn = document.querySelector('.btn--new')
const rollBtn = document.querySelector('.btn--roll')
const holdBtn = document.querySelector('.btn--hold')
const dice = document.querySelector('.dice')

dice.getElementsByClassName.display = 'none'

let currentScore = 0
let activePlayer = 0
let totalScore = [0, 0]
let gameOver = false


rollBtn.addEventListener('click', () => {
    if (!gameOver) {
        const randomNumber = Math.floor(Math.random() * 6) + 1
    dice.src = `./dice-${randomNumber}.png`
    dice.style.display = 'block'

    if (randomNumber != 1) {
        currentScore += randomNumber 
        document.getElementById(
            `current--${activePlayer}`,
        ).textContent = currentScore
    } else {
        switchPlayer ()
    }
    }
})

holdBtn.addEventListener('click', () => {
    if (!gameOver) {
        totalScore[activePlayer] += currentScore
        document.querySelector(`#score--${activePlayer}`).textcontent = 
        totalScore[activePlayer]

        if (totalScore[activePlayer] >= 20){
          gameOver = true
          document.querySelector('.player--0').classList.remove('player--active')
        document.querySelector('.player--1').classList.remove('player--active')
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        } else{
           switchPlayer ()
        }
       }
        
})

function switchPlayer () {
        document.getElementById(`current--${activePlayer}`).textContent = 0
        currentScore = 0
        activePlayer = activePlayer == 0 ? 1 : 0
        document.querySelector('.player--0').classList.toggle('player--active')
        document.querySelector('.player--1').classList.toggle('player--active')
    
}