import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import { AppRoutes } from "./routes";
import { Container } from "./layout/Container";

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
