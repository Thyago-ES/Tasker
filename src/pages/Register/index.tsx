import { FormButton } from "../../components/ui/FormButton";
import { Title } from "../../components/text/Title";

export function Register() {
	return (
		<main>
			<div>
				<header>
					<Title text="Cadastre-se já" />

					<p>Comece a usar o TASKER&copy;.</p>
					<p>Veja seu dia mais produtivo.</p>
					<p>Alcance suas metas mais rápido com organização.</p>
				</header>

				<section>
					<form>
						<div>
							<label htmlFor="name">Nome:</label>
							<input
								type="text"
								id="name"
								placeholder="Digite seu nome completo"
							/>
						</div>
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
						<div>
							<label htmlFor="confirmPassword">Confirme sua senha:</label>
							<input
								type="password"
								id="confirmPassword"
								placeholder="Digite sua senha novamente"
							/>
						</div>

						<FormButton>Cadastrar</FormButton>
					</form>
				</section>
			</div>
		</main>
	);
}
