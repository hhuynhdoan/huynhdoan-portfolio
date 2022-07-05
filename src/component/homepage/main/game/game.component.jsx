import './_game.scss';
import styled from "@emotion/styled";
import { Food } from './components/layout.component';
import { Snake } from './components/snake.component';
import { useEffect, useState } from 'react';


// const getRandomFood = () => {
//     let min = 1;
//     let max = 98;
//     let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
//     let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
//     return [x, y];
// }

// const initialState = () => {
//     food: getRandomFood();
//     direction: "RIGHT";
//     speed: 100;
//     route: "menu";
//     snakeDots: [[0, 0], [0, 2]]
// };

const getRandomCoordinates = () => {
	let min = 1;
	let max = 15;
	let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
	let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
	return [x, y];
};

const Button = styled.button`
	position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    background: #FEA55F;
    padding: 7px;
    color: #000;
    border: unset;
    border-radius: 7px;
`;


const Content = styled.div`
	font-size: 30px;
    color: #43D9AD;
    text-align: center;
    background-color: #011627;
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    text-transform: uppercase;
`;
export const Game = () => {
    
    const [snakeDots, setSnakeDots] = useState([[0, 0], [0, 2], [0, 4], [0, 6]]);
	const [foodDot, setFoodDot] = useState(getRandomCoordinates());
	const [direction, setDirection] = useState('RIGHT');
	const [alive, setAlive] = useState(false);
	const [speed, setSpeed] = useState(300);
	const [name, setName] = useState('start-game');
	const [nameStart, setNameStart] = useState('click start game to play!');
	const [point, setPoint] = useState(0);

    useEffect(() => {
		document.onkeydown = onKeyDown;
		checkIfOutOfBorders();
		checkIfCollapsed();
		checkIfEat();

		const run = setInterval(() => {
			moveSnake(alive);
		}, speed);
		return () => clearInterval(run);
	});


    const onKeyDown = (e) => {
        // console.log(e.keyCode);
		switch (e.keyCode) {
			case 38:
				setDirection('UP');
				break;
			case 40:
				setDirection('DOWN');
				break;
			case 37:
				setDirection('LEFT');
				break;
			case 39:
				setDirection('RIGHT');
				break;
			default:
				break;
		}
    }

    const moveSnake = (state) => {
        if (state === true) {
			let dots = [...snakeDots];
			let head = dots[dots.length - 1];

			switch (direction) {
				case 'RIGHT':
					head = [head[0], head[1] + 2];
					break;
				case 'LEFT':
					head = [head[0], head[1] - 2];
					break;
				case 'DOWN':
					head = [head[0] + 2, head[1]];
					break;
				case 'UP':
					head = [head[0] - 2, head[1]];
					break;
				default:
					break;
			}
			dots.push(head);
			dots.shift();
			setSnakeDots(dots);
		}
    }

    

    const checkIfEat = () => {
        let head = snakeDots[snakeDots.length - 1];
		let food = foodDot;
		if (head[0] === food[0] && head[1] === food[1]) {
			setFoodDot(getRandomCoordinates());
			enlargeSnake();
			increaseSpeed();
			setPoint(point + 10);
		}
    }

    const onGameOver = () => {
        setAlive(false);
		setSnakeDots([[0, 0], [0, 2], [0, 4], [0, 6]]);
		setFoodDot([10, 10]);
		setDirection('RIGHT');
    }


    const checkIfOutOfBorders = () => {
        let head = snakeDots[snakeDots.length - 1];
		if (head[0] === 32 || head[1] === 18 || head[0] < 0 || head[1] < 0) {
			onGameOver();
		}
    }


    const checkIfCollapsed = () => {
        // let snake = [...snakeDots];
		// const head = snake[snake.length - 1];
		// snake.pop();
		// snake.forEach((dot, index) => {
		// 	if (head[0] === dot[0] && head[1] === dot[1]) {
		// 		onGameOver();
		// 	}
		// });
    }

    const enlargeSnake = () => {
        let newSnake = [snakeDots[snakeDots.length - 1], ...snakeDots];
		setSnakeDots(newSnake);
    }


    const increaseSpeed = () => {
        if (speed > 10) {
			setSpeed(speed - 10);
		}
    }


    const rePlay = () => {
        setDirection('RIGHT');
		setName('start-again');
        setNameStart('game over !!!');
		setPoint(0);
		setAlive(true);
    }

    return (
        <div className="game-wrapper">
            <div className="game">
                <img src="./img/bg-game.png" className="bg-game"/>
                <div className="game__content">
                    <div className="game__content-left">
                        {/* <div className="gamestart text-uppercase">click start game to play!</div> */}
                        {/* <div className="gameover text-uppercase">game over !!!</div> */}
                        {alive ? (
                            <div className='game-on'>
                                <Snake snakeDots={snakeDots} />
                                <Food foodDot={foodDot} />
                            </div>
                        ) : (
                            <div>
                                <Content>{nameStart}</Content>
                                <Button onClick={rePlay}>{name}</Button>
                            </div>
                        )}
                        {/* <Food />
                        <Snake/>
                        <button className="font-18 font-500">start game</button> */}
                    </div>
                    <div className="game__content-right">
                        <div className="game__content-right--top">
                            <span className="font-18 font-500">
                            // use keyboard <br/>
                            // arrows to play
                            </span>
                            <div className="keyboard-move">
                                <div className="keyboard-move__up">
                                    <button className="">
                                        <img src="./img/up.png"/>
                                    </button>
                                </div>
                                <div className="keyboard-move__items">
                                    <button>
                                        <img src="./img/left.png"/>
                                    </button>
                                    <button>
                                        <img src="./img/down.png"/>
                                    </button>
                                    <button>
                                        <img src="./img/right.png"/>
                                    </button>
                                </div>
                                {/* <Button 
                                    onDown={onDown}
                                    onLeft={onLeft}
                                    onRight={onRight}
                                    onUp={onUp}
                                /> */}
                            </div>
                        </div>
                        <div className="game__content-right--middle">
                            <span className="font-18 font-500">
                            // your core:    
                            </span>
                            {/* <br/> */}
                            {
                                alive ? 
                                <span className="font-32 font-500">
                                {point}
                                </span>
                                :
                                <span className="font-32 font-500">
                                {point}
                                </span>
                            }
                           
                            {/* <div className="food">
                                <img src="./img/food.png" />
                            </div> */}
                        </div>
                        <div className="game__content-right--bottom">
                            {/* <button className="font-18 font-500">skip</button> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}