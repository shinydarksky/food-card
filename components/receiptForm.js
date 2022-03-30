import React, { useEffect, useState, useRef } from 'react'
import Modal from './modal'
import { useRouter } from "next/router";
import { getFoodFromCart } from '../pages/api/food'
import { newRecipt } from '../pages/api/receipt'
export default function ReceiptForm({ onClose, curretListFood, auth }) {
    const [currentRecipt, setCurrentReceipt] = useState([])
    const { user } = auth
    const router = useRouter()
    useEffect(async () => {
        const response = await getFoodFromCart(curretListFood)
        setCurrentReceipt(response)
    }, [])

    const total = useRef()
    function renderTableReceipt() {
        total.current = 0
        let results = currentRecipt.map((item, idx) => {
            total.current += item.price * item.num
            return <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.num}</td>
                <td>{item.price * item.num}</td>
            </tr>
        })

        results.push(<tr key="price">
            <td colSpan={3}>Tổng số tiền</td>
            <td>{total.current}</td>
        </tr>)
        return results
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const dataReceipt = {
            listFood: currentRecipt,
            userId: user._id,
            prices: total.current
        }
        router.push({
            pathname: '/thanh-toan',
            query: {
                code: JSON.stringify(dataReceipt)
            }
        })
        // await newRecipt(dataReceipt)
        // onClose(true)
    }

    

    return (
        <Modal
            title="Thông tin hóa đơn"
            onClose={() => onClose()}
        >
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

            <form onSubmit={handleSubmit}>
                <div className="text-center m-3">
                    <button className="btn btn-danger me-1"
                        onClick={()=>onClose()}
                    >Hủy</button>
                    <button className="btn btn-success"
                        type="submit"
                    >Đặt hàng</button>
                </div>
            </form>
        </Modal>
    )
}
