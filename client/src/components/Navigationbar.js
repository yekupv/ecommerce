import React, { useContext } from "react";
import { Context } from "../index";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";

const Navigationbar = observer(() => {
	const { user } = useContext(Context);
	return (
		<>
			<Navbar bg='dark' variant='dark'>
				<Container>
					<Navbar.Brand href='#home'>STORE</Navbar.Brand>
					{user.isAuth ? (
						<Nav className='ms-auto'>
							<Button>Admin</Button>
							<Button className='ms-2'>Log Out</Button>
						</Nav>
					) : (
						<Nav className='ms-auto'>
							<Button onClick={() => user.setIsAuth(true)}>
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
