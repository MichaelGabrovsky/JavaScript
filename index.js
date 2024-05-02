const words = [
    "apple",
    "banana",
    "cherry",
    "grape",
    "orange",
    "pear",
    "strawberry",
    "watermelon",
    "blueberry",
    "kiwi",
    "mango",
    "pineapple",
    "peach",
    "plum",
    "raspberry",
    "blackberry",
    "lemon",
    "lime",
    "coconut",
    "apricot",
    "fig",
    "guava",
    "papaya",
    "passionfruit",
    "lychee",
    "dragonfruit",
    "starfruit",
    "cantaloupe",
    "honeydew",
    "pomegranate",
    "tangerine",
    "cranberry"
  ];
  
  const guessArray = [];
  var correct = false;
  var count = 0;
  const word = words[Math.floor(Math.random() * words.length)];
  const wordArray = word.split("");
  var display = "";
  
  console.log("Wellcome to guess the word! Where you will have to guess the fruit.");
  
  for (let i = 0; i < word.length; i++) {
    display += "_";
  }
  console.log(display);
  
  const rl = require('readline').createInterface({
    input: process.stdin, // keyboard input
    output: process.stdout // console output
  });
  
  waitForUserInput();
  
  function waitForUserInput(){
    rl.question('Guess a letter: ', function (guess) {
      guessArray.push(guess.toLowerCase());
      display = check(word, guessArray);
      console.log(display);
      count++;
      console.log("Times guessed: " + count + "\n");
      if (!(display == word)){
        waitForUserInput();
      }
      else{
        console.log("Congragulations you win with " + count + " guesses!");
        console.log(guessArray);
      }
    });
  }
  
  function check(word, guessArray){
    let blankedOut = "";
    for (let wordLetters = 0; wordLetters < word.length; wordLetters++){
      for (let guesses = 0; guesses < guessArray.length; guesses++){
        if (word[wordLetters] == guessArray[guesses]){
          correct = true;
        }
      }
      if (correct == true){
        blankedOut += word[wordLetters];
      }
      else{
        blankedOut += "_";
      }
      correct = false;
    }
    return blankedOut;
  }