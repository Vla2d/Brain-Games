import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const engine = (gameTask, getGameData, attemptsCount = 3) => {
	console.log('Welcome to the Brain Games!');
	console.log(`${gameTask}\n`);
	const userName = readlineSync.question('May i have your name? ');
	console.log(`Hello, ${userName}!\n`);
	const iter = (counter) => {
		const gameData = getGameData();
		const gameQuestion = car(gameData);
		console.log(`Question: ${gameQuestion}`);
		const inputAnswer = readlineSync.question('Your answer: ');
		const rightAnswer = cdr(gameData);
		if (rightAnswer === inputAnswer && counter === attemptsCount) {
			console.log(`Congratulations, ${userName}`);
			return undefined;
		}
		if (rightAnswer === inputAnswer) {
			console.log('Correct!');
			return iter(counter + 1);
		}
		console.log(`"${inputAnswer}" is wrong answer. Correct answer was "${rightAnswer}".`);
		console.log(`Let's try again, ${userName}!`);
		return undefined;
	};
	return iter(1);
};
export default engine;
