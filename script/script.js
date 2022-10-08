console.log("I Write Code")

const textBox = document.querySelector('#textbox')
const char = document.querySelector('.charcount')
const words = document.querySelector('.wordscount')
const copyBtn = document.querySelector('.copy')
const clearBtn = document.querySelector('.clear')
const palindromeWord = document.querySelector('.palindromewords')
const nonPalindromeWord = document.querySelector('.nonpalindromewords')
const checkBox = document.querySelector('#check')

let textBoxValue;
let wordCount ;

// by default change
document.addEventListener('DOMContentLoaded', ()=> {
    checkBox.checked = true
})

// listing to textarea inputs and adding related features
textBox.addEventListener('input', () => {
   // listing input values and removeing extra spaces
    textBoxValue = (textBox.value).replace(/\s+/g,' ').trim()
    char.innerHTML = textBoxValue.length;

  // making input string to get total words
   let wordsArray =  textBoxValue.split(' ')

//    remove empty string from array
    wordCount = wordsArray.filter((Element) => (Element.length != 0))

    // Now getting length of total words and adding 
    words.innerHTML = wordCount.length

    checkBox.checked ? checkPalindromeWords() : false
})



// Copy button 
copyBtn.addEventListener('click', ()=> {
    if (textBoxValue === undefined ){
        textBox.value = 'please write something to copy'
        setTimeout(() => {
        textBox.value = ''
            }, 1000);
    }

    else {
        copyBtn.textContent = 'copied !'
        navigator.clipboard.writeText(textBoxValue);
        textBox.value = ' copied ! '
         setTimeout(() => {
            textBox.value = textBoxValue
            copyBtn.textContent = 'Copy text'
        }, 1000);
    }
})


// clear button 
clearBtn.addEventListener('click' , () => {
    textBox.value = "";
    textBoxValue = undefined;
    char.innerHTML = 0;
    words.innerHTML = 0;
    palindromeWord.textContent = '' 
    nonPalindromeWord.textContent = '';

    if (textBoxValue === undefined ){
        textBox.value = 'canvas is already empty !'
        setTimeout(() => {
        textBox.value = ''
            }, 1000);
    }
})


// cheking for palindrome word
function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }


  // // start checking  palindrome word word
  function checkPalindromeWords(){
    let palindromeWords = []
    let nonPalindromeWords = []

    if (textBoxValue !== undefined){
    wordCount.forEach(element => {
        if(palindrome(element)){
            palindromeWords.push(element)

        } else {
            nonPalindromeWords.push(element)
        }
     });

     palindromeWord.textContent = palindromeWords.join(' , ')
     nonPalindromeWord.textContent = nonPalindromeWords.join(' , ')
    }
    }


//  Checkbox event handle
checkBox.addEventListener('input', (e)=>
{
    if(checkBox.checked){
        checkPalindromeWords()
    }
    else {
        palindromeWord.textContent = '' 
        nonPalindromeWord.textContent = '';
    }
})


// logo link
const myLogo = document.querySelector('.logo-img')
myLogo.addEventListener('click',()=> {
    window.open("https://ashish-nagar.netlify.app/", '_blank');
})