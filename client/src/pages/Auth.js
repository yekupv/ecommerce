import React from "react";
import { Card, Container, Form, Button, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
	const location = useLocation();
	const isLogin = location.pathname === LOGIN_ROUTE;
	return (
		<Container
			className='d-flex justify-content align-items-center'
			style={{ height: window.innerHeight - 54 }}
		>
			<Card style={{ width: 600 }} className='p-5'>
				<h2 className='a-auto'>
					{isLogin ? "Authorization" : "Registration"}
				</h2>
				<Form className='d-flex flex-column'>
					<Form.Control
						className='mt-3'
						placeholder='Email...'
					></Form.Control>
					<Form.Control
						className='mt-3'
						placeholder='Password...'
					></Form.Control>
					<div className='d-flex justify-content-between align-items-center flex-row'>
						{isLogin ? (
							<div>
								<NavLink to={REGISTRATION_ROUTE}>
									Sign Up!
								</NavLink>
							</div>
						) : (
							<div>
								Already have an account? ehay
								<NavLink to={LOGIN_ROUTE}>Login!</NavLink>
							</div>
						)}
						<Button
							className='mt-3 align-self-end'
							variant={"outline-success"}
						>
							{isLogin ? "Sign In" : "Sign Up"}
						</Button>
					</div>
				</Form>
			</Card>
		</Container>
	);
};

export default Auth;
