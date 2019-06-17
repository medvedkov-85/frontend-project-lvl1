import readlineSync from 'readline-sync';

let name = null;
export const greeting = () => {
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
};

export const welcome = () => {
  console.log('Welcome to the Brain games');
};

export const evenParityCheck = () => {
  let isCorrectAnswers = true;
  for (let i = 0; i < 3; i += 1) {
    const numer = Math.floor(Math.random() * 100);
    console.log(`Question: ${numer}`);
    const answer = readlineSync.question('Your answer: ');
    const answerOrigin = (numer % 2 === 0) ? 'yes' : 'no';
    if (answer !== answerOrigin) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answerOrigin}'`);
      console.log(`Let's try again, ${name}!`);
      isCorrectAnswers = false;
      break;
    }
    console.log('Correct');
  }
  if (isCorrectAnswers) {
    console.log(`Congratulations, ${name}!`);
  }
};
