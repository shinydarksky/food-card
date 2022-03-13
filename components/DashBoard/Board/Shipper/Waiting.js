import React from 'react'

export default function Waiting({listOrder,handlePickupOrder}) {

	function renderOrder() {
		return listOrder.map((item, idx) => {
			return <tr key={idx}>
				<td>{idx + 1}</td>
				<td>{item._id}</td>
				<td>{item.listFood.length}</td>
				<td>{item.addressLocation}</td>
				<td>
					<div>
						<button className="btn btn-success"
							onClick={() => handlePickupOrder(item)}
						>
							Nhận đơn
							<i className="fas fa-arrow-alt-circle-right ms-1"></i>
						</button>
						<button className="btn btn-warning m-1">
							<i className=" fas fa-eye "></i>
						</button>
					</div>
				</td>
			</tr>
		})
	}

	return (
		<div>
			<div className="title">
				<h3>Danh sách đơn hàng</h3>
			</div>
			<div className="mt-3">
				<table className="table table-striped table-bordered">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Mã đơn hàng</th>
							<th scope="col">Số món</th>
							<th scope="col">Địa chỉ</th>
							<th scope="col"></th>
						</tr>
					</thead>
					<tbody>
						{renderOrder()}
					</tbody>
				</table>
			</div>
		</div>
	)
}
