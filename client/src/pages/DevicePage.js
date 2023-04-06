import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import bigStar from "../assets/bigStar.png";
import Image from "react-bootstrap/Image";
import { useParams } from "react-router-dom";
import { fetchOneDevice } from "../http/deviceAPI";
const DevicePage = () => {
	const [device, setDevice] = useState({ device_infos: [] });
	const { id } = useParams();
	useEffect(() => {
		fetchOneDevice(id).then((data) => {
			setDevice(data);
			console.log(data);
		});
	}, []);

	return (
		<Container>
			<Row>
				<Col md={4}>
					<Image
						width={300}
						height={300}
						src={process.env.REACT_APP_API_URL + device.img}
						style={{ objectFit: "contain" }}
					/>
				</Col>
				<Col md={4}>
					<Row className='d-flex flex-column align-items-center'>
						<h2>{device.name}</h2>
						<div
							className='d-flex justify-content-center align-items-center'
							style={{
								background: `url(${bigStar}) no-repeat center center`,
								width: "240px",
								height: "240px",
								backgroundSize: "cover",
								fontSize: 64,
							}}
						>
							{device.rating}
						</div>
					</Row>
				</Col>
				<Col md={4}>
					<Card
						className='d-flex flex-column align-items-center justify-content-around'
						style={{
							width: 300,
							height: 300,
							fontsize: 42,
							border: "5px solid lightgray",
						}}
					>
						<h3>{device.price}</h3>
						<Button variant={"outline-dark"}>Add to Cart</Button>
					</Card>
				</Col>
			</Row>
			<Row className='d-flex flex-column m-3'>
				<h1>Technical Characteristics</h1>
				{device.device_infos &&
					device.device_infos.map((info, index) => (
						<Row
							key={info.id}
							style={{
								background:
									index % 2 === 0
										? "lightgray"
										: "transparent",
								padding: 10,
							}}
						>
							{info.title} : {info.description}
						</Row>
					))}
			</Row>
		</Container>
	);
};

export default DevicePage;
