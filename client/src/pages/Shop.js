import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Pagination } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import Row from "react-bootstrap/Row";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { fetchBrands, fetchDevices, fetchTypes } from "../http/deviceAPI";
import Pages from "../components/Pages";
const Shop = observer(() => {
	const { device } = useContext(Context);
	const [brand, setBrand] = useState(null);
	const [type, setType] = useState(null);
	useEffect(() => {
		fetchTypes().then((data) => device.setTypes(data));
		fetchBrands().then((data) => device.setBrands(data));
		fetchDevices(null, null, 1, device.limit).then((data) => {
			device.setDevices(data.rows);
			device.setTotalCount(data.count);
		});
	}, []);
	console.log(device.brands);
	useEffect(() => {
		fetchDevices(
			device.selectedType.id,
			device.selectedBrand.id,
			device.page,
			device.limit
		).then((data) => {
			device.setDevices(data.rows);
			device.setTotalCount(data.count);
		});
	}, [device.page, device.selectedType, device.selectedBrand]);
	console.log(!("id" in device.selectedType)); //true not in the selected tye --- false in selected type
	console.log(device.selectedBrand.name);
	return (
		<Container>
			<Row className='mt-3'>
				<Col md={3}>
					<TypeBar />
					<BrandBar />
				</Col>
				<Col md={9}>
					<DeviceList />
					<Pages />
				</Col>
			</Row>
		</Container>
	);
});

export default Shop;
