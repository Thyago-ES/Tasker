import { FormButton } from "../../components/ui/FormButton";
import { Title } from "../../components/text/Title";

export function Login() {
	return (
		<main>
			<div>
				<header>
					<Title text="Entre agora" />

					<p>
						Organize as tarefas de hoje, seja produtivo e conclua suas metas.
					</p>
					<p>
						Um pouco de tudo é melhor que muito de nada. Vamos fazer as tarefas
						de hoje.
					</p>
				</header>

				<section>
					<form>
						<div>
							<label htmlFor="email">Email:</label>
							<input type="email" id="email" placeholder="Digite seu email" />
						</div>
						<div>
							<label htmlFor="password">Senha:</label>
							<input
								type="password"
								id="password"
								placeholder="Digite sua senha"
							/>
						</div>

						<FormButton>Entrar</FormButton>
					</form>
				</section>
			</div>
		</main>
	);
}
