import React from 'react'

export default function CardFood({ food }) {

    function handleCart() {
        let currentCart = JSON.parse(localStorage.getItem('ltship-cart'))
        try {
            const order = Date.now()
            if (currentCart != null) {
                currentCart.push({
                    foodId: food._id,
                    num: 1,
                    order:order,
                })
                localStorage.setItem('ltship-cart', JSON.stringify(currentCart))
                return
            }
            localStorage.setItem('ltship-cart', JSON.stringify([{
                foodId: food._id,
                num:     0,
                order:1
            }]))
            return
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="card food-item" style={{ width: '18rem' }}>
            <img src={food.images[0] || ''} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{food.name}</h5>
                <p className="card-text">{food.price}$</p>
                <p className="card-text">{food.description}</p>
                <div className="group-button">
                    <a href="#" className="btn btn-danger">
                        Xem chi tiết
                    </a>
                    <span className="btn btn-danger btn-add-cart" onClick={() => handleCart(food)}>
                        <i className="fas fa-shopping-cart"></i>
                        Giỏ hàng
                    </span>
                </div>
            </div>
        </div>
    )
}
