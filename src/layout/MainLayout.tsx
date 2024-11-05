import { Outlet } from "react-router-dom";
import { Footer } from "../components/mainLayout/Footer";
import { NavBar } from "../components/mainLayout/NavBar";

export function MainLayout() {
	return (
		<>
			<NavBar logged={false} />
			<Outlet />
			<Footer />
		</>
	);
}
