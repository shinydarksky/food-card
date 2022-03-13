import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { urlServer } from '../pages/api/urls'

export default function CartItem({ item, handleDeleteFood, handleEditNum}) {
    const [dataCart, setDataCart] = useState({})

    useEffect(async () => {
        try {
            const response = await axios.get(`${urlServer}/food?_id=${item.foodId}`)
            const { data } = response
            const { results } = data
            setDataCart(results[0])
        } catch (error) {
            setDataCart({})
        }

    }, [item])



    const { name, price } = dataCart || {}
    return (
        <div className="card food-item" >
            <img src="https://cdn.daylambanh.edu.vn/wp-content/uploads/2018/12/banh-tra-sua-tran-chau-duong-den.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Tên: {name}</h5>
                <p className="card-text">Đơn giá:{price}</p>
                <p className="card-text">Số tiền: {price * item.num}</p>
                <div className="group-button">
                    <span className="btn btn-danger btn-cart">
                        <input
                            type="number"
                            min={1}
                            value={item.num}
                            onChange={(e) => {
                                const num = e.target.value
                                handleEditNum(item.order, num)
                            }}
                        />
                    </span>
                    <span className="btn btn-danger btn-cart"
                        onClick={() => handleDeleteFood(item)}
                    >
                        Xóa
                    </span>
                </div>
            </div>
        </div>
    )
}
