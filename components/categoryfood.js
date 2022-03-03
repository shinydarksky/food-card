import React from 'react'
import CardFood from './cardFood'

export default function CategoryFood({
    title="Món ăn hot",
    subtitle="Khám phá những món ăn được yêu thích nhất",
    listFood=[]
}) {

    function renderFoodCategory(){
        return listFood.slice(0,8).map((item,idx)=>{
            return <CardFood key={idx} food={item}/>
        })
    }

    return (
        <div className="food-group">
            <div className="title">
                <h2>{title}</h2>
            </div>
            <p>{subtitle}</p>
            <div className="food-content">
                {/* <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard /> */}
                {renderFoodCategory()}
            </div>
        </div>
    )
}
