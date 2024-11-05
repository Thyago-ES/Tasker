import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";
import { Logo } from "./Logo";
import { formatNameForURL } from "../../utils/formatNameForURL";

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
					colorClass="btn__tertiary"
					onClickFunc={() =>
						logged
							? toNavigate(`/${formatNameForURL("Thyago Rafael")}/meu-espaco`)
							: toNavigate("/entrar")
					}
				>
					{logged ? "Minhas áreas" : "Entrar"}
				</Button>
				<Button
					colorClass="btn__primary"
					onClickFunc={() => (logged ? userLogout : toNavigate("/cadastrar"))}
				>
					{logged ? "Sair" : "Cadastrar"}
				</Button>
			</nav>
		</header>
	);
}
