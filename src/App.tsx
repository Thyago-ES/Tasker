import { BrowserRouter as Router } from "react-router-dom";

import { AppRoutes } from "./routes";
import { Container } from "./layout/Container";

import "./styles/App.css";

function App() {
	return (
		<Container>
			<Router>
				<AppRoutes />
			</Router>
		</Container>
	);
}

export default App;
