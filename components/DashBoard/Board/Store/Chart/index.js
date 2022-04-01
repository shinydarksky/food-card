import React, { useEffect, useState } from 'react'
import { getReceiptChartStore } from '../../../../../pages/api/receipt'
import { ChartTab } from '../../../../data/tab'
import BlockChart from './BlockChart'
export default function Chart({ auth }) {
    const [listProduct, setListProduct] = useState([])
    const [onTab, setOnTab] = useState(ChartTab[0])
    const { user } = auth
    useEffect(async () => {
        switch (onTab) {
            case ChartTab[0]: {
                break
            }
            case ChartTab[1]: {
                break
            }
            case ChartTab[2]: {
                const response = await getReceiptChartStore(user._id)
                if (response.success) {
                    setListProduct(response.results)
                }
                break
            }
            case ChartTab[3]: {
                break
            }
        }
    }, [onTab])


    return (
        <div>
            <div className="title">
                <h3>Doanh thu</h3>
            </div>
            <div>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <span className={onTab === ChartTab[0] ? "nav-link active" : "nav-link"} aria-current="page"
                            onClick={() => setOnTab(ChartTab[0])}
                        >Doanh thu ngày</span>
                    </li>
                    <li className="nav-item"
                        onClick={() => setOnTab(ChartTab[1])}
                    >
                        <span className={onTab === ChartTab[1] ? "nav-link active" : "nav-link"} >Doanh thu tháng</span>
                    </li>
                    <li className="nav-item"
                        onClick={() => setOnTab(ChartTab[2])}
                    >
                        <span className={onTab === ChartTab[2] ? "nav-link active" : "nav-link"} >Tổng doanh thu</span>
                    </li>
                    <li className="nav-item"
                        onClick={() => setOnTab(ChartTab[3])}
                    >
                        <span className={onTab === ChartTab[3] ? "nav-link active" : "nav-link"} >Kiểm tra doanh thu</span>
                    </li>
                </ul>
            </div>
            <BlockChart listProduct={listProduct} />
        </div>
    )
}
