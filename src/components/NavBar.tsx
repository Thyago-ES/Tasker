import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { Logo } from "./Logo";
import { formatNameForURL } from "../utils/formatNameforURL";

interface NavBarProps {
	logged: boolean;
}

export function NavBar({ logged }: NavBarProps) {
	const navigate = useNavigate();

	function toNavigate(route: string) {
		navigate(route);
	}

	function userLogout() {
		// Lógica de deslogar o usuário
		toNavigate("/");
	}

	return (
		<header className="header">
			<Logo />
			<nav className="header__nav">
				<Button
					className="btn btn__tertiary"
					text={logged ? "Minhas áreas" : "Entrar"}
					onClickFunc={() =>
						logged
							? toNavigate(`/${formatNameForURL("Thyago Rafael")}/meu-espaco`)
							: toNavigate("/entrar")
					}
				/>
				<Button
					className="btn btn__primary"
					text={logged ? "Sair" : "Cadastrar"}
					onClickFunc={() => (logged ? userLogout : toNavigate("/cadastrar"))}
				/>
			</nav>
		</header>
	);
}
