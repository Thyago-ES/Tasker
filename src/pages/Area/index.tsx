import { MdDelete } from "react-icons/md";
import { useLocation } from "react-router-dom";

const todoList = [
	{
		id: 1,
		title: "Estudar React hooks",
	},
	{
		id: 2,
		title: "Estudar React router",
	},
	{
		id: 3,
		title: "Estudar React icons",
	},
];

export function Area() {
	const location = useLocation();

	const { title } = location.state;

	return (
		<main>
			<div>
				<header>
					<h1>{title}</h1>
				</header>
				<section>
					<input type="text" placeholder="Qual a próxima tarefa?" />
					<ul>
						{todoList.map((todo) => (
							<li key={todo.id}>
								<span>{todo.title}</span>
								<button>
									<MdDelete />
								</button>
							</li>
						))}
					</ul>
				</section>
			</div>
		</main>
	);
}
