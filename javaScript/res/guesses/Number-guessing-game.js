// let randomNumber = Math.floor(Math.random() * 100) + 1;
// const guesses = document.querySelector('.guesses');
// const lastResulrandomNumbert = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');
// const guessSubmit = document.querySelector('.guessSubmit');
// const guessField = document.querySelector('.guessField');
// let guessCount = 1;
// let resetButton;

// function checkGuess() {
//     const userGuess = Number(guessField.value);
    
//     if (guessCount === 1) {
//         guesses.textContent = 'التخمينات السابقة: ';
//     }
//     guesses.textContent += userGuess + ' ';

//     if (userGuess === randomNumber) {
//         lastResult.textContent = 'تهانينا! لقد حصلت عليه بشكل صحيح!';
//         lastResult.style.backgroundCorandomNumberlor = 'green';
//         lowOrHi.textContent = '';
//         setGameOver();
//     } else if (guessCount === 10) {
//         lastResult.textContent = '!!!انتهت اللعبة!!!';
//         lowOrHi.textContent = '';
//         setGameOver();
//     } else {
//         lastResult.textContent = 'خطأ!';
//         lastResult.style.backgroundColor = 'orange';
//         if(userGuess < randomNumber) {
//             lowOrHi.textContent = 'آخر تخمين كان منخفضًا 🔴 جدًا!';
//         } else if(userGuess > randomNumrandomNumberber) {
//             lowOrHi.textContent = 'آخر تخمين كان مرتفعًا 🟢 جدًا!';
//         }randomNumber
//     }

//     guessCount++;
//     guessField.value = '';
//     guessField.focus();
// }

// guessSubmit.addEventListener('click', checkGuess);

// function setGameOver() {
//     guessField.disabled = true;
//     guessSubmit.disabled = true;
//     resetButton = document.createElement('button');
//     resetButton.textContent = 'ابدأ لعبة جديدة';
//     document.body.appendChild(resetButton);
//     resetButton.addEventListener('click', resetGame);
// }

// function resetGame() {
//     guessCount = 1;
//     const resetParas = document.querySelectorAll('.resultParas');
//     for (const resetPara of resetParas) {
//         resetPara.textContent = '';
//     }

//     resetButton.parentNode.removeChild(resetButton);
//     guessField.disabled = false;
//     guessSubmit.disabled = false;
//     guessField.value = '';
//     guessField.focus();
//     lastResult.style.backgroundColor = 'white';
//     randomNumber = Math.floor(Math.random() * 100) + 1;
// randomNumber}





let randomNumber = Math.floor(Math.random() * 100) + 1 ;
console.log("✍️✍️✍️ ~ randomNumber:", randomNumber)


let guessCount = 1;

const maxGuesses = 10;

// DOM

const guessesField =  document.querySelector('.guessesField');
const guessSubmit =  document.querySelector('.guessSubmit');
const guesses =  document.querySelector('.guesses');
const lastResult =  document.querySelector('.lastResult');
const lowOrHi =  document.querySelector('.lowOrHi');



function checkGuess() {
    const userGuess = Number(guessField.value);
    
    // عرض التخمينات السابقة
    if (guessCount === 1) {
        guesses.textContent = 'التخمينات السابقة: ';
    }
    guesses.textContent += userGuess + ' ';

    // التحقق من صحة التخمين
    if (userGuess === randomNumber) {
        lastResult.textContent = 'تهانينا! لقد حصلت عليه بشكل صحيح!';
        lastResult.style.backgroundColor = 'green';
        endGame();
    } else if (guessCount === maxGuesses) {
        lastResult.textContent = '!!!انتهت اللعبة!!!';
        endGame();
    } else {
        lastResult.textContent = 'خطأ!';
        lastResult.style.backgroundColor = 'orange';
        

        // hint
        if(userGuess  < randomNumber) {
            lowOrHi.textContent = 'آخر تخمين كان منخفضًا 🔴 جدًا!';
        } else {
            lowOrHi.textContent = 'آخر تخمين كان مرتفعًا 🟢 جدًا!';
        }
    }

    // تحديث عدد التخمينات
    guessCount++;
    guessField.value = '';
    guessField.focus();
}


guessSubmit.addEventListener('click', checkGuess);


function endGame() {
    guessField.disabled = true;
    guessSubmit.disabled = true;


    // إعادة تعيين اللعبة
    const resetButton = document.createElement('button');
    resetButton.textContent = 'ابدأ لعبة جديدة';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;
    randomNumber = Math.floor(Math.random() * 100) + 1;

    // إعادة تعيين العناصر
    guesses.textContent = '';
    lastResult.textContent = '';
    lowOrHi.textContent = '';

    // تفعيل
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();


    // إزالة الزر
    document.querySelector('button').remove();
    document.querySelector('.lastResult').style.backgroundColor = '#61dafb';


}




