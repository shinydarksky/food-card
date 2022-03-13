import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../layout'
import CartItem from '../../components/cartItem'
import ReceiptForm from '../../components/receiptForm'
export default function Cart({ }) {
    const auth = useSelector(state => state.auth)
    const [curretListFood, setCurrentListFood] = useState([])
    const [openReceipt, setOpenReceipt] = useState(false)

    useEffect(() => {
        const listFoodId = JSON.parse(localStorage.getItem('ltship-cart'))
        setCurrentListFood(listFoodId)
    }, [])

    function handleDeleteFood(food) {
        let updateCart = curretListFood
        updateCart = updateCart.filter(item => item.order !== food.order)
        localStorage.setItem('ltship-cart', JSON.stringify(updateCart))
        setCurrentListFood(updateCart)
    }

    function handleEditNum(order, num) {
        let updateCart = curretListFood
        updateCart = updateCart.map(item => {
            if (item.order === order) {
                return { ...item, num: parseInt(num) }
            } else return item
        })
        localStorage.setItem('ltship-cart', JSON.stringify(updateCart))
        setCurrentListFood(updateCart)
    }
    

    function renderCart() {
        try {
            if (curretListFood.length <= 0) {
                return <div className="error-wrapper" >
                    <h2 ><span >Vỏ hàng hiện tại trống</span><br />Hãy trở về <a href="/">Trang chủ</a> và chọn món ăn</h2>
                </div>
            }
            else {
                return curretListFood.map((food, idx) => {
                    return <CartItem
                        key={idx}
                        item={food}
                        handleDeleteFood={handleDeleteFood}
                        handleEditNum={handleEditNum}
                    />
                })
            }
        } catch (error) {
            return <div className="error-wrapper" >
                <h2 ><span >Vỏ hàng hiện tại trống</span><br />Hãy trở về <a href="/">Trang chủ</a> và chọn món ăn</h2>
            </div>
        }
    }

    function handleClose(isSubmit=false){
        setOpenReceipt(false)
        if(isSubmit){
            localStorage.removeItem('ltship-cart')
            setCurrentListFood([])
        }
    }

    return (
        <Layout>
            <div className="wrap-cart">
                <div className="title">
                    <h2 className="d-inline">Vỏ hàng của bạn! </h2>
                    <button className="btn btn-danger float-end "
                        onClick={() => setOpenReceipt(true)}
                    >
                        <i className="fa fa-solid fa-arrow-right "></i>
                    </button>
                    {auth.isAuth ? '' : <p>Bạn vẫn chưa đăng nhập đăng nhập <a href='/'>tại đây</a></p>}
                    <br />
                    <br />
                </div>
                <div className="cart-content">
                    {renderCart()}
                </div>
                {openReceipt && <ReceiptForm 
                    onClose={handleClose}
                    curretListFood={curretListFood}
                    auth={auth}
                />}
            </div>
        </Layout>
    )
}
