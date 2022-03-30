import React, { useEffect, useState } from 'react'
import { getOrder } from '../../../../pages/api/receipt'
import { customerTab } from '../../../data/tab'
import Modal from '../../../modal'
import CurrentItem from './Order/OrderItem'
export default function HistoryOrder() {
    const [onTab, setOnTab] = useState(customerTab[0])
    const [listReceipt, setListReceipt] = useState([])
    const [viewReceipt,setViewReceipt] = useState(null)
    useEffect(async () => {
        const response = await getOrder(1)
        setListReceipt(response)
    }, [])

    useEffect(async () => {
        if(onTab==customerTab[0]){
            const response = await getOrder(3)
            setListReceipt(response)
        }else  if(onTab==customerTab[1]){
            const response = await getOrder(4)
            setListReceipt(response)
        }

    }, [onTab])

    function renderOrder() {
        return listReceipt.map((item, idx) => {
            return <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{item._id}</td>
                <td>{item.listFood.length}</td>
                <td>{item.addressLocation}</td>
                <td>
                    <div>
                        <button className="btn btn-warning m-1"
                            onClick={()=>setViewReceipt(item)}
                        >
                            <i className=" fas fa-eye "
                                
                            ></i>
                        </button>
                    </div>
                </td>
            </tr>
        })
    }

    return (
        <div>
            <div>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <span className={onTab === customerTab[0] ? "nav-link active" : "nav-link"} aria-current="page"
                            onClick={() => setOnTab(customerTab[0])}
                        >Đơn hàng đã giao thành công</span>
                    </li>
                    <li className="nav-item"
                        onClick={() => setOnTab(customerTab[1])}
                    >
                        <span className={onTab === customerTab[1] ? "nav-link active" : "nav-link"} >Đơn hàng đã hủy</span>
                    </li>
                </ul>
            </div>
            <div>
                <div className="mt-3">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Mã đơn hàng</th>
                                <th scope="col">Số món</th>
                                <th scope="col">Địa chỉ</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderOrder()}
                        </tbody>
                    </table>
                </div>
            </div>
            {viewReceipt &&
                 <Modal 
                    title="Thông tin đơn hàng"
                    onClose={()=>setViewReceipt(null)}
                 >
                    <CurrentItem order={viewReceipt}/>
                    <button className="btn btn-danger"
                        onClick={()=>setViewReceipt(null)}
                    >Đóng</button>
                 </Modal>
            }
        </div>
    )
}
