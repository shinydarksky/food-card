import React, { useState, useEffect } from 'react'
import BlockFood from './BlockFood'
import Discount from './Discount'
import { storeTab } from '../../../../data/tab'
import { searchFood } from '../../../../../pages/api/food'
export default function InforStore({ auth }) {
    const [onTab, setOnTab] = useState(storeTab[0])
    const [listFood, setListFood] = useState([])
    const { user } = auth

    function renderTab() {
        switch (onTab) {
            case storeTab[0]:
                return <BlockFood data={listFood}/>
            case storeTab[1]:
                return <Discount />
            default:
                break;
        }
    }

    useEffect(async () => {
        const response = await searchFood(user._id)
        setListFood(response)
    }, [])

    return (
        <div>
            <div>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <span className={onTab === storeTab[0] ? "nav-link active" : "nav-link"} aria-current="page"
                            onClick={() => setOnTab(storeTab[0])}
                        >Danh sách món ăn</span>
                    </li>
                    <li className="nav-item"
                        onClick={() => setOnTab(storeTab[1])}
                    >
                        <span className={onTab === storeTab[1] ? "nav-link active" : "nav-link"} >Mã giảm giá</span>
                    </li>
                </ul>
            </div>
            {renderTab()}
        </div>
    )
}
