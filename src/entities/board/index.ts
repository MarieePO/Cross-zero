import {useGameContext} from "@/shared/store";
import {useEffect} from "react";
import {IWinner} from "@/shared/interfaces";

const useBoardUseCase = () => {
	const {board, setWinner} = useGameContext()

	// TODO: Реализовать функцию расчета победителя
	const checkWinner = (): IWinner => {
		const winLines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let i = 0; i < winLines.length; i++) {
			const [a, b, c] = winLines[i];
			if (board[a].player && board[a].player === board[b].player && board[a].player === board[c].player) {
				return board[a].player;
			}
		}
		if (board.every((cell)=> cell.player !== null)) { 
			return 'draw';
		}
		return null;
	};

	useEffect(() => {
		const winner = checkWinner();
		setWinner(winner);
	}, [board]);
}

export {
	useBoardUseCase,
}