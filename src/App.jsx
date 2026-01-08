import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import PricingPage from "./pages/PricingPage";
import "./index.css";

function App() {
	return (
		<Router>
			<div className="bg-slate-950 text-white min-h-screen flex flex-col">
				<Navigation />
				<main className="flex-1">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/dashboard" element={<DashboardPage />} />
						<Route path="/pricing" element={<PricingPage />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;

// import "./App.css";

// function App() {
// 	return <h1 className="">Hello!</h1>;
// }

// export default App;
