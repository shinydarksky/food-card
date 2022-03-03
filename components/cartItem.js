import React, { useState } from 'react'

export default function CartItem({item, loadCart}) {
    const [numItem,setNumItem] = useState(1)
   
    
    let { name, description, price, amount } = item 


    function handleChangeNum(e){
        setNumItem(e.target.value)
    }

    function handleDelete(){
        let localCart = JSON.parse(localStorage.getItem('ltship-cart'))
        let updateFilter = localCart.filter((i)=>{
            return i.code !=item.code
        })
        localStorage.setItem('ltship-cart',JSON.stringify(updateFilter))
        loadCart()
    }

    return (
        <div className="card food-item" >
            <img src="https://cdn.daylambanh.edu.vn/wp-content/uploads/2018/12/banh-tra-sua-tran-chau-duong-den.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price}$</p>
                <p className="card-text">{description}</p>
                <div className="group-button">
                    <span className="btn btn-danger btn-cart">
                        <input
                            type="number"
                            onChange={handleChangeNum}
                            min={1}
                            value={numItem}
                        />
                    </span>
                    <span className="btn btn-danger btn-cart"
                        onClick={handleDelete}
                    >
                        Xóa
                    </span>
                </div>
            </div>
        </div>
    )
}
