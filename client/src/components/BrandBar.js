import React, { useContext } from "react";
import { Card, Form } from "react-bootstrap";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import ListGroup from "react-bootstrap/ListGroup";

const BrandBar = observer(() => {
	const { device } = useContext(Context);
	const isAllActive = !("id" in device.selectedBrand);
	return (
		<ListGroup className='mt-3' style={{ maxWidth: 200 }}>
			<h5>Brands</h5>
			<ListGroup.Item
				style={{ cursor: "pointer" }}
				active={isAllActive}
				onClick={() => {
					device.setSelectedBrand({});
				}}
			>
				ALL
			</ListGroup.Item>
			{device.brands.map((brand) => (
				<ListGroup.Item
					style={{ cursor: "pointer" }}
					key={brand.id}
					active={brand.id === device.selectedBrand?.id}
					onClick={() => {
						device.setSelectedBrand(brand);
					}}
				>
					{brand.name}
				</ListGroup.Item>
			))}
		</ListGroup>
		// <Form className='d-flex'>
		// 	{device.brands.map((brand) => (
		// 		<Card
		// 			style={{ cursor: "pointer" }}
		// 			key={brand.id}
		// 			className='p-3 mx-1'
		// 			onClick={() => device.setSelectedBrand(brand)}
		// 			border={
		// 				brand.id === device.selectedBrand.id ? "danger" : "dark"
		// 			}
		// 		>
		// 			{brand.name}
		// 		</Card>
		// 	))}
		// </Form>
	);
});

export default BrandBar;
