import { Route, Routes } from "react-router-dom";

import { MainLayout } from "./layout/MainLayout";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { MyArea } from "./pages/MyArea";
import { Area } from "./pages/Area";

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<Home />} />
				<Route path="/entrar" element={<Login />} />
				<Route path="/cadastrar" element={<Register />} />
				<Route path="/:username/meu-espaco" element={<MyArea />} />
				<Route path="/:username/area/:id" element={<Area />} />
			</Route>
		</Routes>
	);
}
