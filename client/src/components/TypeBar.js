import React, { useContext } from "react";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import ListGroup from "react-bootstrap/ListGroup";

const TypeBar = observer(() => {
	const { device } = useContext(Context);
	const isAllActive = !("id" in device.selectedType);
	return (
		<ListGroup style={{ maxWidth: 200 }}>
			<h5>Types</h5>
			<ListGroup.Item
				style={{ cursor: "pointer" }}
				active={isAllActive}
				onClick={() => {
					device.setSelectedType({});
				}}
			>
				ALL
			</ListGroup.Item>
			{device.types.map((type) => (
				<ListGroup.Item
					style={{ cursor: "pointer" }}
					key={type.id}
					active={type.id === device.selectedType?.id}
					onClick={() => {
						device.setSelectedType(type);
					}}
				>
					{type.name}
				</ListGroup.Item>
			))}
		</ListGroup>
	);
});

export default TypeBar;
