import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";

export function MainLayout() {
	return (
		<>
			<NavBar logged={false} />
			<Outlet />
			<Footer />
		</>
	);
}
