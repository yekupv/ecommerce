import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createBrand } from "../../http/deviceAPI";
const CreateBrand = ({ show, onHide }) => {
	const [value, setValue] = useState("");
	const addBrand = () => {
		createBrand({ name: value }).then((data) => {
			setValue("");
			onHide();
			console.log(data);
		});
	};
	return (
		<Modal size='lg' centered show={show} onHide={onHide}>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>
					Add New Type
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Control
						placeholder='Add Type Name'
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='outline-danger' onClick={onHide}>
					Close
				</Button>
				<Button variant='outline-success' onClick={addBrand}>
					Add
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default CreateBrand;
