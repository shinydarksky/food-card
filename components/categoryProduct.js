import React from 'react'
import CardProduct from './cardProduct'

export default function CategoryProduct({
    title="Món ăn hot",
    subtitle="Khám phá những món ăn được yêu thích nhất",
    listFood=[]
}) {

    function renderFoodCategory(){
        return listFood.slice(0,8).map((item,idx)=>{
            return <CardProduct key={idx} food={item}/>
        })
    }

    return (
        <div className="food-group">
            <div className="title">
                <h2>{title}</h2>
            </div>
            <p>{subtitle}</p>
            <div className="food-content">
                {renderFoodCategory()}
            </div>
        </div>
    )
}
