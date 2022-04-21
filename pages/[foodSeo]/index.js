import React, { useEffect, useState } from 'react'
import Layout from '../../layout'
import { searchFood } from '../api/food'
export async function getServerSideProps(context) {
    try {
        // Fetch data from external API
        const { foodSeo } = context.params
        const foodDetail = await searchFood('', '', foodSeo)
        // Pass data to the page via props
        return { props: { foodDetail: foodDetail[0] } }
    } catch (e) {
        context.res.statusCode = 404;
        return {
            notFound: true,
        }
    }
}


export default function FoodSeo({ foodDetail }) {
    const [imgIndex, setImgIndex] = useState(0)
    let eventChangeIndex = null
    useEffect(() => {
        if (foodDetail.images.length > 0) {
            eventChangeIndex = setInterval(() => {
                const temp = imgIndex + 1
                if (temp >= foodDetail.images.length)
                    setImgIndex(0)
                else setImgIndex(temp)
            }, 1000 * 10)

            return () => {
                clearInterval(eventChangeIndex)
            }
        }
    }, [imgIndex])


    function handleCart() {
        let currentCart = JSON.parse(localStorage.getItem('ltship-cart'))
        try {
            const order = Date.now()
            if (currentCart != null) {
                currentCart.push({
                    foodId: foodDetail._id,
                    num: 1,
                    order: order,
                })
                localStorage.setItem('ltship-cart', JSON.stringify(currentCart))
                return
            }
            localStorage.setItem('ltship-cart', JSON.stringify([{
                foodId: foodDetail._id,
                num: 0,
                order: 1
            }]))
            return
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Layout>
            <div className="wrap-detail">
                <div className="wrap-left bread-box">
                    <h1>{foodDetail.name}

                    </h1>
                    <p>{foodDetail.description}</p>
                    <div>
                        <span className="btn btn-danger btn-add-cart" onClick={() => handleCart()}>
                            Thêm giỏ hàng
                            <i className="fas fa-shopping-cart"></i>
                        </span>
                    </div>
                </div>
                <div className="wrap-right bread-box">
                    <div className="group-images">
                        <div className="image-item">
                            <img src={foodDetail.images[imgIndex]} />
                        </div>
                    </div>
                </div>

            </div>
            
        </Layout>
    )
}
