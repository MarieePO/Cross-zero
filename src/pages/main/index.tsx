import {ReactNode} from "react";
import BoardWidget from "@/widget/board";
import styles from './styles.module.scss'
import {useGameContext} from "@/shared/store";
import TaskDescription from "@/widget/task";

const MainPage = (): ReactNode => {
	const {winner} = useGameContext()

	return (
		<main className={styles.page}>
			{winner && (
				<h1 className="font-semibold">
					{winner === 'draw' ? 'Ничья' : `Победил игрок ${winner}`}
				</h1>
				)}

			<BoardWidget />

			{/* Описание задания */}
			<TaskDescription />
		</main>
	);
};

export default MainPage;