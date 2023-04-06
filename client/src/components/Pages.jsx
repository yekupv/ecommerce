import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Pagination } from "react-bootstrap";
import { Context } from "..";

const Pages = observer(() => {
	const { device } = useContext(Context);
	console.log("totalCount: ", device.totalCount);
	console.log("limit: ", device.limit);
	console.log("devices: ", device.devices);
	const pageCount = Math.ceil(device.totalCount / device.limit);
	const pages = [];
	for (let i = 0; i < pageCount; i++) {
		pages.push(i + 1);
	}
	return (
		<Pagination>
			{pages.map((page) => (
				<Pagination.Item
					active={device.page === page}
					key={page}
					onClick={() => device.setPage(page)}
				>
					{page}
				</Pagination.Item>
			))}
		</Pagination>
	);
});

export default Pages;
