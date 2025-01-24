import styles from "./styles.module.scss";
import {FC, HTMLAttributes} from "react";
import {makeClassname} from "@/shared/utils";
import {CellComponent} from "@/shared/components";
import {useGameContext} from "@/shared/store";
import {useCellUseCase} from "@/entities/cell";
import {useBoardUseCase} from "@/entities/board";
import {Button} from "@/shared/components/button";

type IBoardWidgetProps = HTMLAttributes<HTMLDivElement>;

const BoardWidget: FC<IBoardWidgetProps> = ({className, ...props}) => {
	const {board,moveCount,resetGame,winner} = useGameContext()
	const { handleCellClick } = useCellUseCase()
	useBoardUseCase()


	return (
		<div className={makeClassname(styles.gameBoard, className)} {...props}>
			{board.map(cell => (
				<CellComponent onClick={handleCellClick} cell={cell} key={cell.id}/>

			))}
			<Button onClick={resetGame} disabled={!winner}> 
				Новая игра
			</Button>
			<div></div>
			<div>
				Количество ходов: {moveCount}
			</div>
			
		</div>

	);
};

export default BoardWidget