import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";

import "./Home.css";

export function Home() {
	const navigate = useNavigate();

	return (
		<>
			<main className="home">
				<div className="home__container">
					<header className="home__header">
						<Title text="Controle sua vida" />

						<h3 className="home__header--description">
							Utilize o TASKER&copy;, tenha mais controle sobre o fluxo da sua
							rotina e veja sua vida mais organizada.
						</h3>
					</header>

					<section className="home__content">
						<ul className="home__content--list">
							<li>Gerencie suas metas.</li>
							<li>Organize sua rotina.</li>
							<li>Conclua suas tarefas.</li>
							<li>Tenha um dia produtivo.</li>
						</ul>

						<div className="home__content--button">
							<Button
								className="btn btn__secondary"
								text="Começar agora"
								onClickFunc={() => navigate("/cadastrar")}
							/>
						</div>
					</section>
				</div>
			</main>
		</>
	);
}