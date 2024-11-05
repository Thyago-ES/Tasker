import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Logo } from "./Logo";

export function Footer() {
	return (
		<footer className="footer">
			<span>Feito por &lt;/Thyago&gt;</span>

			<div className="footer__links">
				<a
					href="https://github.com/Thyago-ES"
					target="_blank"
					rel="noreferrer noopener"
				>
					<FaGithub size={35} />
				</a>
				<a
					href="https://www.linkedin.com/in/thyago-rafael-287520278"
					target="_blank"
					rel="noreferrer noopener"
				>
					<FaLinkedin size={35} />
				</a>
				<a
					href="mailto:thyagorafael57@gmail.com?subject=Direcionado%20pelo%20projeto%20%22Tasker%22"
					target="_blank"
					rel="noreferrer noopener"
				>
					<MdEmail size={35} />
				</a>
			</div>

			<Logo />
		</footer>
	);
}
