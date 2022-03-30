import React, { useState, useEffect } from 'react'
import { getOrder, getOrderShipper, shipperConfirmReceipt } from '../../../../pages/api/receipt'
import Shipping from './Shipping'
import Waiting from './Waiting'
export default function InforShipper({ auth }) {
	const [currentOrder, setCurrentOrder] = useState([])
	const [listOrder, setListOrder] = useState([])
	const { user } = auth

	async function updateReceipt(){
		const orderShipper = await getOrderShipper(user._id, 1)
		if (orderShipper.length > 0) {
			setCurrentOrder(orderShipper)
		} else {
			const orderData = await getOrder()
			setListOrder(orderData)
		}
	}
	let eventRefesh = null
	useEffect(async () => {
		eventRefesh = setInterval(async ()=>{
			await updateReceipt()
		},1000)
		return ()=>{
			clearInterval(eventRefesh)
		}
	}, [])


	async function handlePickupOrder(order) {
		const ans = window.confirm('Xác nhận nhận đơn hàng')
		if (ans) {
			await shipperConfirmReceipt({
				shipperId: user._id,
				_id: order._id,
				status: 1
			})
			setListOrder([])
			await updateReceipt()
		}
	}

	async function handleConfirmOrder(order,status){
		const ans = window.confirm('Xác nhận cập nhật')
		if(ans){
			await shipperConfirmReceipt({
				shipperId: user._id,
				_id: order._id,
				status: status
			})
			setCurrentOrder([])
			await updateReceipt()
		}
	}

	return (
		<>
			{listOrder.length > 0 &&
				<Waiting
					listOrder={listOrder}
					handlePickupOrder={handlePickupOrder}
				/>
			}
			{currentOrder.length>0 && <Shipping 
				currentOrder={currentOrder}
				handleConfirmOrder={handleConfirmOrder}
			/>}
		</>
	)
}
