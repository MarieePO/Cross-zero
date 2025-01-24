import {useGameContext} from "@/shared/store";
import {ICell} from "@/shared/interfaces";

const useCellUseCase = () => {
	// Деструктуризируйте нужные вам элементы для работы
	const 
	{
		setBoard,
		board, 
		currentPlayer, 
		// setWinner, 
		winner, 
		setCurrentPlayer,
		setMoveCount
	} = useGameContext();

	// TODO: Реализовать логику нажатия на ячейку в поле
	const handleCellClick = (cell: ICell): void => {
		if (winner) {
			console.log('Игра завершена');
			return;
		}
		if(cell.player!==null) {
			console.log('Это ячейка занята');
			return;
		}

		const newBoard = [...board];
		newBoard[cell.id] = {...cell, player: currentPlayer};

		setBoard(newBoard);
		setMoveCount(moveCount => moveCount + 1);
		if (currentPlayer === 'X') {
			setCurrentPlayer('O');
		} else {
			setCurrentPlayer('X');
		}
	}


	return {
		handleCellClick
	}
}

export {
	useCellUseCase,
}