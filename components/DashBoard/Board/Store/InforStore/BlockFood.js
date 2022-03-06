import React, { useState,useEffect } from 'react'
import CardFood from '../../../../cardFood'
import NewFoodForm from './NewFoodForm'
import { searchFood } from '../../../../../pages/api/food'
import { addFood } from '../../../../../pages/api/food'
export default function BlockFood({ user, storeId }) {
    const [listFood, setListFood] = useState([])
	useEffect(async () => {
        const response = await searchFood(user._id)
        setListFood(response)
    }, [])

	const [openNewFood, setOpenNewFood] = useState(false)
	function renderFoodData() {
		if (listFood) {
			return listFood.map((item, idx) => {
				return <CardFood food={item} key={idx} />
			})
		}
	}

	async function handleNewFood(e) {
		e.preventDefault()
		const { name, description, price, images } = e.target
		const formData = new FormData()
		formData.append('storeId', user._id)
		formData.append('name', name.value)
		formData.append('description', description.value)
		formData.append('price', price.value)

		Array(...images.files).forEach((element, idx) => {
			formData.append('images', element)
		})
		const results = await addFood(formData)
		if(results){
			setListFood([...listFood,results])
		}

		setOpenNewFood(false)
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
			{openNewFood && <NewFoodForm
				onClose={() => setOpenNewFood(false)}
				handleSubmit={handleNewFood}

			/>}
			<div className="food-group">
				<div className="food-content">
					{renderFoodData()}
				</div>
			</div>
		</div>
	)
}
