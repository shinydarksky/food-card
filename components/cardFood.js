import React from 'react'

export default function CardFood({ food}) {

    function handleCart(){
        let currentCart = JSON.parse(localStorage.getItem('ltship-cart'))
        try {
            food.code = food._id + 'ts'
            if(currentCart!=null){
                currentCart.push(food)
                localStorage.setItem('ltship-cart',JSON.stringify(currentCart))
                return
            }
            localStorage.setItem('ltship-cart',JSON.stringify([food]))
            return
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="card food-item" style={{ width: '18rem' }}>
            <img src="https://cdn.daylambanh.edu.vn/wp-content/uploads/2018/12/banh-tra-sua-tran-chau-duong-den.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{food.name}</h5>
                <p className="card-text">{food.price}$</p>
                <p className="card-text">{food.description}</p>
                <div className="group-button">
                    <a href="#" className="btn btn-danger">
                        Xem chi tiết
                    </a>
                    <span href="#" className="btn btn-danger btn-add-cart" onClick={()=>handleCart(food)}>
                        <i className="fas fa-shopping-cart"></i>
                        Giỏ hàng
                    </span>
                </div>
            </div>
        </div>
    )
}
