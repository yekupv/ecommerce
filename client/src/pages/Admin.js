import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import CreateBrand from "../components/Modals/CreateBrand";
import CreateDevice from "../components/Modals/CreateDevice";
import CreateType from "../components/Modals/CreateType";

const Admin = () => {
	const [brandVisible, setBrandVisible] = useState(false);
	const [typeVisible, setTypeVisible] = useState(false);
	const [deviceVisible, setDeviceVisible] = useState(false);
	return (
		<Container className='d-flex flex-column'>
			<Button onClick={() => setTypeVisible(true)} className='p-2 mt-3'>
				Add Type
			</Button>
			<Button onClick={() => setBrandVisible(true)} className='p-2 mt-3'>
				Add Brand
			</Button>
			<Button onClick={() => setDeviceVisible(true)} className='p-2 mt-3'>
				Add Device
			</Button>
			<CreateBrand
				show={brandVisible}
				onHide={() => setBrandVisible(false)}
			/>
			<CreateDevice
				show={deviceVisible}
				onHide={() => setDeviceVisible(false)}
			/>
			<CreateType
				show={typeVisible}
				onHide={() => setTypeVisible(false)}
			/>
		</Container>
	);
};

export default Admin;
