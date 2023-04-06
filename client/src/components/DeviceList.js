import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import { Context } from "..";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
	const { device } = useContext(Context);
	return (
		<Row className='d-flex'>
			{device.devices.map((currentDevice) => (
				<DeviceItem
					key={currentDevice.id}
					device={currentDevice}
					brands={device.brands}
				/>
			))}
		</Row>
	);
});

export default DeviceList;
