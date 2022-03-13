import React, { useState, useEffect } from 'react'
import { getReceiptOrder } from '../../../../../pages/api/receipt'
import OrderItem from './OrderItem'

export default function Order({ auth }) {
	const { user } = auth
	const [listOrder, setListOrder] = useState([])

	useEffect(async () => {
		const results = await getReceiptOrder(user._id)
		setListOrder(results)
	}, [])

	function renderTableOrder() {
		return listOrder.map((order, idx) => {
			return <OrderItem order={order} key={idx} />
		})
	}

	return (
		<div>
			<div className="row ms-3 mt-3  ">
				<div className="title col">
					<h5>Đơn hàng đang được đặt</h5>
				</div>
			</div>
			<div className="">
				{renderTableOrder()}
			</div>
		</div>
	)
}
