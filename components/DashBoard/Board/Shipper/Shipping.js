import React from 'react'
import CurrentItem from './CurrentItem'

export default function Shipping({ currentOrder,handleConfirmOrder }) {
	
	function renderCurrentOrder(){
		return currentOrder.map((order,idx)=>{
			return <CurrentItem key={idx} order={order}  handleConfirmOrder={handleConfirmOrder}/>
		})
	}

	return (
		<div>
			{renderCurrentOrder()}
		</div>
	)
}
