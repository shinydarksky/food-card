import React, { useEffect, useState, useRef } from 'react'
import Modal from './modal'
import { getFoodFromCart } from '../pages/api/food'
import { getListAddress } from '../pages/api/address'
import { newRecipt } from '../pages/api/receipt'
export default function ReceiptForm({ onClose, curretListFood, auth }) {
    const [currentRecipt, setCurrentReceipt] = useState([])
    const [listAddress, setListAddress] = useState([])
    const { user } = auth

    useEffect(async () => {
        const response = await getFoodFromCart(curretListFood)
        setCurrentReceipt(response)

        const results = await getListAddress(user._id)
        setListAddress(results)
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
        let { discountCode, addressLocation } = e.target
        discountCode = discountCode.value
        addressLocation = addressLocation.value
        const dataReceipt = {
            listFood: currentRecipt,
            userId: user._id,
            discountCode: discountCode,
            addressLocation: addressLocation,
            prices: total.current
        }
        await newRecipt(dataReceipt)
        onClose(true)
    }

    function renderAddress() {
        return listAddress.map((item, idx) => {
            return <option key={idx}
                value={item.addressLocation + ' - ' + item.areaTitle}
            >
                {item.addressLocation}-{item.areaTitle}
            </option>
        })
    }

    return (
        <Modal
            title="Thanh toán"
            onClose={()=>onClose()}
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
                <div className="d-flex justify-content-between m-2">
                    <div className="col-auto w-25">
                        <label htmlFor="addressLocation" className="col-form-label">Địa chỉ</label>
                    </div>
                    <div className="col-auto w-75">
                        <select id="addressLocation" className="form-control" >
                            {renderAddress()}
                        </select>
                    </div>
                </div>
                <div className="d-flex justify-content-between m-2">
                    <div className="col-auto w-25">
                        <label htmlFor="discountCode" className="col-form-label">Mã  giảm giá</label>
                    </div>
                    <div className="col-auto w-75">
                        <input id="discountCode" className="form-control" />
                    </div>
                </div>
                <div className="text-center m-3">
                    <button className="btn btn-primary"
                        type="submit"
                    >Thanh toán
                    </button>
                </div>
            </form>
        </Modal>
    )
}
