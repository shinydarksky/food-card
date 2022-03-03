import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Layout from '../../layout'
import CartItem from '../../components/cartItem'
import { getFoodFromCart } from '../api/food'

export async function getServerSideProps(context) {
    try {
        const listFood = await getFoodFromCart()
        return {
            props: { listFood: listFood },
        }
    } catch (e) {
        context.res.statusCode = 404;
        return {
            notFound: true,
        }
    }
}

export default function Cart({ listFood }) {

    const router = useRouter()

    const auth = useSelector(state => state.auth)

    const [currentCart, setCurrentCart] = useState([])

    function loadCart() {
        let localCart = JSON.parse(localStorage.getItem('ltship-cart'))
        try {
            if (localCart != null && localCart.length > 0) {
                setCurrentCart(localCart)
                return
            }
            setCurrentCart([])
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadCart()
    }, [])

    function renderCart() {
        try {
            if (currentCart.length <= 0) {
                return <div className="error-wrapper" >
                    <h2 ><span >Vỏ hàng hiện tại trống</span><br />Hãy trở về <a href="/">Trang chủ</a> và chọn món ăn</h2>
                </div>
            }

            return currentCart.map((item, idx) => {
                return <CartItem item={item} key={idx} loadCart={() => loadCart()} />
            })
        } catch (error) {
            return <div className="error-wrapper" >
                <h2 ><span >Vỏ hàng hiện tại trống</span><br />Hãy trở về <a href="/">Trang chủ</a> và chọn món ăn</h2>
            </div>
        }
    }

    return (
        <Layout>
            <div className="wrap-cart">
                <div className="title">
                    <h2>Vỏ hàng của bạn! </h2>
                    {auth.isAuth ? '' : <p>Bạn vẫn chưa đăng nhập đăng nhập <a href='/'>tại đây</a></p>}
                    <br/>
                    <br/>

                </div>
                <div className="cart-content">
                    {renderCart()}
                </div>
            </div>
        </Layout>
    )
}
