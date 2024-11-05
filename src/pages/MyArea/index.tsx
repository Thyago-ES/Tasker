import { FaPlus, FaArrowRight } from "react-icons/fa";

import { Title } from "../../components/text/Title";
import { useNavigate } from "react-router-dom";

const areaList = [
	{
		id: 1,
		title: "Estudar React",
	},
	{
		id: 2,
		title: "Estudar Node",
	},
	{
		id: 3,
		title: "Estudar Docker",
	},
	{
		id: 4,
		title: "Estudar Java",
	},
];

export function MyArea() {
	const navigate = useNavigate();

	return (
		<main>
			<div>
				<header>
					<Title text="Seja bem-vindo, Thyago!" />
				</header>

				<section>
					<div>
						<h3>Suas áreas de trabalho</h3>

						<button className="btn btn__small btn__secondary">
							<FaPlus />
						</button>
					</div>
					<div>
						{areaList.length === 0 ? (
							<p>Não há áreas. Crie uma nova!</p>
						) : (
							areaList.map((area) => (
								<div key={area.id}>
									<h4>{area.title}</h4>
									<button
										onClick={() =>
											navigate(`/thyago-rafael/area/${area.id}`, {
												state: {
													title: area.title,
												},
											})
										}
									>
										<FaArrowRight />
									</button>
								</div>
							))
						)}
					</div>
				</section>
			</div>
		</main>
	);
}
