import React, { useState } from 'react'
import BlockFood from './BlockFood'
import Discount from './Discount'
import { storeTab } from '../../../../data/tab'
export default function InforStore({ auth }) {
    const [onTab, setOnTab] = useState(storeTab[0])

    const { user } = auth
    function renderTab() {
        switch (onTab) {
            case storeTab[0]:
                return <BlockFood user={user}/>
            case storeTab[1]:
                return <Discount />
            default:
                break;
        }
    }

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
