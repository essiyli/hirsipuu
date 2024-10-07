const input = document.querySelector('input')
const output = document.querySelector('output')
const span = document.querySelector('span')

const words = [
    "programming",
    "javascript",
    "database",
    "markup",
    "framework",
    "variable",
    "stylesheet",
    "library",
    "asynchronous",
    "hypertext"
]

let randomizedWord = ''
let maskedWord = ''
let arvaustenMaara = 0

const newGame = () => {
    arvaustenMaara=0
    span.innerHTML=arvaustenMaara
    const random = Math.floor(Math.random() * 9) + 1
    randomizedWord = words[random]
    maskedWord = "*".repeat(randomizedWord.length)
    output.innerHTML = maskedWord
}

const win = () => {
    alert(`You have guessed right, the word is ${randomizedWord}.`)
    newGame()
}

const wrong = () => {
    alert('You have guessed wrong!')
}



const replaceFoundChars = (guess) => {
    for (let i = 0; i<randomizedWord.length; i++) {
        const char = randomizedWord.substring(i, i+1)
        if (char === guess) {
            let newString = maskedWord.split('')
            newString.splice(i,1,guess)
            newString = newString.join('')
            maskedWord = newString
        }
    }
    output.innerHTML=maskedWord
}

newGame()



input.addEventListener('keypress',(e) => {
    if (e.key==='Enter') {
        e.preventDefault()
        arvaustenMaara++
        span.innerHTML = arvaustenMaara
        const guess = input.value
        if (guess.toLowerCase() === randomizedWord.toLocaleLowerCase()){
            win()
            

        } else if (guess.length === 1) {
            replaceFoundChars(guess)
            if (maskedWord.toLocaleLowerCase()=== randomizedWord.toLocaleLowerCase()){
                win()
                input.value=''
            }

        } else {

            wrong()

        }
        
    input.value=''    

    }
})