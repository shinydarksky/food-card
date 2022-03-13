import React, { useState, useEffect } from 'react'
import FoodForm from './FoodForm'
import { editFood, searchFood } from '../../../../../pages/api/food'
import { addFood } from '../../../../../pages/api/food'
import { getListAddress } from '../../../../../pages/api/address'

export default function BlockFood({ user }) {
	const [listFood, setListFood] = useState([])
	const [dataEdit, setDataEdit] = useState(null)
    const [listAddress, setListAddress] = useState([])

	useEffect(async () => {
		const response = await searchFood(user._id)
		setListFood(response)
		const results  = await getListAddress(user._id)
        setListAddress(results)
	}, [])

	const [openNewFood, setOpenNewFood] = useState(false)

	function renderFoodData() {
		if (listFood) {
			return listFood.map((item, idx) => {
				return <tr key={idx}>
					<td>{item.name}</td>
					<td>{item.description && item.description.slice(0, 30)}</td>
					<td>{item.images  && item.images.length}</td>
					<td>
						<div className="text-center">
							<button className="m-1 btn btn-success "
								onClick={() => {
									setDataEdit(item)
								}}
							>
								<i className="fas fa-edit"></i>
							</button>
							<button className="m-1 btn btn-warning">
								<i className="fas fa-eye"></i>
							</button>
							{/* <button className="m-1 btn btn-danger">
								<i className="fas fa-eye-slash"></i>
							</button> */}
						</div>
					</td>
				</tr>
			})
		}
	}

	function getDataHandleFood(data) {
		const { name, description, price, images,area } = data
		const formData = new FormData()
		formData.append('storeId', user._id)
		formData.append('name', name.value)
		formData.append('description', description.value)
		formData.append('price', price.value)
		formData.append('area', area.value)
		Array(...images.files).forEach((element, idx) => {
			formData.append('images', element)
		})

		return formData
	}

	async function handleNewFood(e) {
		e.preventDefault()
		const formData = getDataHandleFood(e.target)
		const results = await addFood(formData)
		if (results) {
			alert('Thêm món ăn thành công')
			setListFood([...listFood, results])
		}
		setOpenNewFood(false)
	}

	async function handleEditFood(e) {
		e.preventDefault()
		const { _id } = dataEdit
		const formData = getDataHandleFood(e.target)
		formData.append('_id',_id)
		const results = await editFood(formData)

		if (results) {
			const response = await searchFood(user._id)
			setListFood(response)
		}
		setDataEdit(null)
	}

	return (
		<div className="food-category">
			<div className="title">
				<h3>Danh sách các món ăn</h3>
			</div>
			<div className="food-control d-flex justify-content-between mt-3 mb-3">
				<button className="btn btn-primary">
				</button>
				<button className="btn btn-primary"
					onClick={() => setOpenNewFood(true)}
				>
					<i className="fa fa-solid fa-plus"></i>
				</button>
			</div>
			{openNewFood && <FoodForm
				onClose={() => setOpenNewFood(false)}
				handleSubmit={handleNewFood}
				address={listAddress}
			/>}

			{dataEdit && <FoodForm
				onClose={() => setDataEdit(false)}
				data={dataEdit}
				handleSubmit={handleEditFood}
				address={listAddress}
			/>}

			<div className="table-food">
				<table className="table table-hover table-bordered">
					<thead>
						<tr>
							<th>Tên món ăn</th>
							<th>Mô tả</th>
							<th>Số ảnh</th>
							<th>Chi tiết</th>
						</tr>
					</thead>
					<tbody>
						{renderFoodData()}
					</tbody>
				</table>
			</div>
		</div>
	)
}
