import React from "react";
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";
import star from "../assets/star.png";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device, brands }) => {
	const navigate = useNavigate();
	let device_brand;
	for (const brand of brands) {
		if (brand.id == device.brandId) {
			device_brand = brand.name;
		}
	}

	return (
		<Col
			md={3}
			className='mt-3'
			onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
		>
			<Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
				<Image
					width={150}
					height={150}
					src={process.env.REACT_APP_API_URL + device.img}
					style={{ objectFit: "contain" }}
				/>
				<div className='mt-2 d-flex justify-content-between'>
					<div className='text-black-50'>{device_brand}</div>
					<div className='d-flex align-items-center'>
						<div>{device.rating}</div>
						<Image src={star} width={13} height={13} />
					</div>
				</div>
				<div> {device.name}</div>
			</Card>
		</Col>
	);
};

export default DeviceItem;
