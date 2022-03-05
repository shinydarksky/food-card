import React from 'react'
import CardFood from '../../../../cardFood'
export default function BlockFood({ data }) {

	function renderFoodData() {
		if (data) {
			return data.map((item, idx) => {
				return <CardFood food={item} key={idx} />
			})
		}
	}

	return (
		<div className="food-category">
			<div className="food-group">
			<div className="food-content">
				{renderFoodData()}
			</div>
		</div>
		</div>


	)
}
