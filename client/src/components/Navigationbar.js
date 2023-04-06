import React, { useContext } from "react";
import { Context } from "../index";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE } from "../utils/consts";

const Navigationbar = observer(() => {
	const navigate = useNavigate();
	const { user } = useContext(Context);
	const logOut = () => {
		user.setUser({});
		user.setIsAuth(false);
		navigate(LOGIN_ROUTE);
	};
	return (
		<>
			<Navbar bg='dark' variant='dark'>
				<Container>
					<Navbar.Brand
						onClick={() => navigate("/")}
						style={{ cursor: "pointer" }}
					>
						STORE
					</Navbar.Brand>
					{user.isAuth ? (
						<Nav
							style={{
								display: "flex",
								color: "white",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<p style={{ marginBottom: 0, marginRight: 10 }}>
								{user.user.email}
							</p>
							<Button onClick={() => navigate(ADMIN_ROUTE)}>
								Admin
							</Button>
							<Button className='ms-2' onClick={() => logOut()}>
								Log Out
							</Button>
						</Nav>
					) : (
						<Nav className='ms-auto'>
							<Button onClick={() => navigate(LOGIN_ROUTE)}>
								Login
							</Button>
						</Nav>
					)}
				</Container>
			</Navbar>
		</>
	);
});

export default Navigationbar;
