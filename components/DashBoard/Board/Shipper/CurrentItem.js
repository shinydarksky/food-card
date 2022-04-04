import React, { useState, useEffect } from 'react'

import { statusReceipt } from '../../../data/menu'
import ViewProduct from '../../../ViewProduct'
export default function OrderItem({ order = {}, handleConfirmOrder }) {
	const [currentProduct, setCurrentProduct] = useState(null)
	function handleClickProduct(product) {
		setCurrentProduct(product)
	}

	function renderTableReceipt() {
		const listFood = order.listFood || []
		let total = 0
		let results = listFood.map((item, idx) => {
			total += item.price * item.num
			return <tr key={idx}
				onClick={() => handleClickProduct(item)}
			>
				<td>{item.name}</td>
				<td>{item.price}</td>
				<td>{item.num}</td>
				<td>{item.price * item.num}</td>
			</tr>
		})

		results.push(<tr key="price">
			<td colSpan={3}>Tổng số tiền</td>
			<td>{total}</td>
		</tr>)
		return results
	}

	function handleConfirmReceipt(e) {
		handleConfirmOrder(order, e.target.value)
	}

	function renderOptionReceipt() {
		let results = []
		for (let item in statusReceipt) {
			results.push(<option key={item} value={item}>
				{statusReceipt[item]}
			</option>)
		}
		return <select className="" value={order.status} onChange={handleConfirmReceipt}>
			{results}
		</select>
	}
	return (
		<div className="mb-3">
			<div className="m-3">
				<h5>Tình trạng: {renderOptionReceipt()}</h5>
			</div>
			<table className="table table-bordered ">
				<thead>
					<tr>
						<th>Tên món</th>
						<th>Đơn giá</th>
						<th>Số lượng</th>
						<th>Số tiền</th>
					</tr>
				</thead>
				<tbody>
					{renderTableReceipt()}
				</tbody>
			</table>
			<div className="d-flex justify-content-between m-2">
				<div className="col-auto w-50">
					<label htmlFor="addressLocation" className="col-form-label">Số điện thoại: {order.phone || ''}</label>

				</div>
			</div>
			<div className="d-flex justify-content-between m-2">
				<div className="col-auto w-50">
					<label htmlFor="addressLocation" className="col-form-label">Địa chỉ: {order.addressLocation || ''}</label>

				</div>
			</div>
			<div className="d-flex justify-content-between m-2">
				<div className="col-auto w-50">
					<label htmlFor="discountCode" className="col-form-label">Mã  giảm giá: </label>
				</div>
			</div>
			<hr />
			{currentProduct &&
				<ViewProduct
					onClose={()=>setCurrentProduct(null)}
					product={currentProduct}
				/>
			}
		</div>
	)
}
