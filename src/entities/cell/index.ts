import {useGameContext} from "@/shared/store";
import {ICell} from "@/shared/interfaces";

const useCellUseCase = () => {
	// Деструктуризируйте нужные вам элементы для работы
	useGameContext()

	// TODO: Реализовать логику нажатия на ячейку в поле
	const handleCellClick = (cell: ICell): void => {
		console.log(cell)
	}


	return {
		handleCellClick
	}
}

export {
	useCellUseCase,
}