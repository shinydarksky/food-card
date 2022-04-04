import React, { useEffect, useState, useRef } from 'react'
import Layout from '../../layout'
import { getListAddress } from '../api/address'
import { useRouter } from "next/router";
import { newRecipt } from '../api/receipt';
import { getUserInfor } from '../api/user';

export async function getServerSideProps(context) {
    try {
        const { code } = context.query
        const dataReceipt = JSON.parse(code)
        return {
            props: { dataReceipt: dataReceipt },
        }
    } catch (e) {
        context.res.statusCode = 404;
        return {
            notFound: true,
        }
    }
}

export default function index({ dataReceipt }) {
    const total = useRef()
    const [listAddress, setListAddress] = useState([])
    const [userInfor, setUserInfor] = useState({})
    const router = useRouter()
    useEffect(async () => {
        const results = await getListAddress(dataReceipt.userId)
        setListAddress(results)


        const userInfor = await getUserInfor(dataReceipt.userId)
		setUserInfor(userInfor.results)
    }, [])

    function renderTableReceipt() {
        total.current = 0
        let results = []
        const currentRecipt = dataReceipt.listFood || []
        results = currentRecipt.map((item, idx) => {
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

    function renderAddress() {
        return listAddress.map((item, idx) => {
            return <option key={idx}
                value={item.addressLocation + ' - ' + item.areaTitle}
            >
                {item.addressLocation}-{item.areaTitle}
            </option>
        })
    }

    function handleClose() {
        router.push({
            pathname: '/vo-hang'
        })
    }

    async function handleCompleteReceipt(e) {
        e.preventDefault()
        let { addressLocation, discountCode,phone } = e.target
        addressLocation = addressLocation.value
        discountCode = discountCode.value
        phone = phone.value
        const response = await newRecipt({
            ...dataReceipt,
            addressLocation: addressLocation,
            discountCode: discountCode,
            phone:phone
        })
        if (response.success) {
            alert(response.message)
            localStorage.removeItem('ltship-cart')
            router.push({
                pathname: '/tai-khoan',
                query: {
                    currentTab: 'current-receipt'
                }
            })
        }
    }

    return (
        <Layout>
            <div className="mt-3 wrap-payment">
                <div className="title m-3">
                    <h3>Thông tin hóa đặt hàng</h3>
                </div>
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
                <form onSubmit={handleCompleteReceipt}>
                    <div>
                        <div className="row g-3 align-items-center">
                            <div className="col-auto w-50">
                                <span>Số điện thoại nhận hàng</span>
                                <input className="form-control" name="phone" defaultValue={userInfor.phone} />
                            </div>
                            <div className="col-auto w-50">
                                <span>Địa chỉ nhận hàng</span>
                                <select className="form-control" name="addressLocation">
                                    {renderAddress()}
                                </select>
                            </div>
                            <div className="col-auto w-50">
                                <span>Mã giảm giá</span>
                                <input className="form-control" name="discountCode" />
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="title m-3">
                            <h5>Phương thức thanh toán</h5>
                        </div>
                        <div className="form-check type-payment">
                            <input className="form-check-input" id='cash' type="radio" name="type-payment" />
                            <label htmlFor='cash'>
                                Thanh toán khi nhận hàng
                            </label>
                        </div>
                        <div className="form-check type-payment">
                            <input className="form-check-input" id='momo' type="radio" name="type-payment" />
                            <label htmlFor='momo'>
                                Thanh toán qua ví momo
                            </label>
                        </div>
                        <div className="form-check type-payment">
                            <input className="form-check-input" id='bank' type="radio" name="type-payment" />
                            <label htmlFor='bank'>
                                Thanh toán qua nhận hàng
                            </label>
                        </div>
                    </div>
                    <div className="text-center m-3">
                        <button className="btn btn-danger me-1"
                            onClick={handleClose}
                        >Trở lại</button>
                        <button className="btn btn-success"
                            type="submit"
                        >Hoàn tất</button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}
