import React, { useState, useEffect } from 'react'
import Modal from './modal'
import { getAddressProduct } from '../pages/api/food'
export default function ViewProduct({ onClose, product }) {
    const [addressFood, setAddressFood] = useState({})

    useEffect(async () => {
        const response = await getAddressProduct(product.area)
        setAddressFood(response)
    }, [])

    function renderViewProduct() {
        return <div className="p-3">
            <h4></h4>
            <div>
                Tên món ăn: {product.name}
            </div>
            <div>
                Số lượng: {product.num}
            </div>
            <div>
                Giá: {product.price}
            </div>
            <div>
                Địa chỉ cửa hàng: {addressFood.areaTitle || ''}-{addressFood.addressLocation || ''}
            </div>
            <button className='btn btn-success mt-3'>Đã nhận hàng</button>
        </div>
    }

    return (
        <Modal
            title="Thông tin món ăn"
            onClose={onClose}
        >
            {renderViewProduct()}
        </Modal>
    )
}
