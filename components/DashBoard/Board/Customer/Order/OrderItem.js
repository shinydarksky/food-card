import React from 'react'
import { statusReceipt } from '../../../../data/menu'
export default function OrderItem({ order = {} }) {
	function renderTableReceipt() {
		const listFood = order.listFood || []
		let total = 0
		let results = listFood.map((item, idx) => {
			total += item.price * item.num
			return <tr key={idx}>
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
	return (
		<div className="mb-3">
			<div className="m-3">
				<h5>Tình trạng: {statusReceipt[order.status]}</h5>
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
					<label htmlFor="addressLocation" className="col-form-label">Địa chỉ: {order.addressLocation || ''}</label>

				</div>
			</div>
			<div className="d-flex justify-content-between m-2">
				<div className="col-auto w-50">
					<label htmlFor="discountCode" className="col-form-label">Mã  giảm giá: </label>
				</div>
			</div>
			<hr/>
		</div>
	)
}
