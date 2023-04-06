import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navigationbar";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from ".";
import { Spinner } from "react-bootstrap";
import { check } from "./http/userAPI";
const App = observer(() => {
	const { user } = useContext(Context);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		check()
			.then((data) => {
				user.setUser(data);
				user.setIsAuth(true);
				console.log("User: ", data);
			})
			.finally(() => setLoading(false));
	}, []);
	if (loading) return <Spinner animation={"grow"} />;
	return (
		<BrowserRouter>
			<Navbar />
			<AppRouter />
		</BrowserRouter>
	);
});

export default App;
