import React from 'react'
import { useRouter } from "next/router";
import Layout from '../../layout'
import { getFoodFromArea } from '../api/food'
import CardProduct from '../../components/cardProduct'
export async function getServerSideProps(context) {
    try {
        const { keyword, order } = context.query
        let listFood = []
        
        if(order==='tang'){
            listFood = await getFoodFromArea('all', keyword,-1) || []
        }
        else if(order==='giam'){
            listFood = await getFoodFromArea('all', keyword,1) || []
        } else {
            listFood = await getFoodFromArea('all', keyword) || []
        }
        return {
            props: { listFood: listFood  },
        }
    } catch (e) {
        context.res.statusCode = 404;
        return {
            notFound: true,
        }
    }
}



export default function Category({ listFood }) {
    const router = useRouter()
    const { query } = router
    function handleSearch(e) {
        e.preventDefault()
        router.push({
            query: { ...query, keyword: e.target.search.value }
        })
    }

    function handleOrder(type) {
        router.push({
            query: { ...query, order: type }
        })
    }

    function renderCategoryFood() {
        if (listFood.length > 0) {
            return listFood.map((item, idx) => {
                return <CardProduct food={item} key={idx} />
            })
        }
    }




    return (
        <Layout>
            <div className="container wrap-intro">
                <div>
                    <div className="title">
                        <h3>Tìm món ăn theo tỉnh thành</h3>
                    </div>
                    <div className="wrap-filter">
                        <div>
                            <form onSubmit={handleSearch}>
                                <div className="input-group">
                                    <div className="form-outline">
                                        <input
                                            type="search"
                                            name="search"
                                            className="form-control search-input"
                                            placeholder="Nhập tên món ăn"
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-secondary">
                                        <i className="fas fa-search" />
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="wrap-filter">
                            <div className="dropdown">
                                <a className="btn dropdown-toggle btn-outline-secondary" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sắp xếp
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><span className="dropdown-item" onClick={() => handleOrder('tang')}>Giá tăng dần</span></li>
                                    <li><span className="dropdown-item" onClick={() => handleOrder('giam')}>Giá giảm dần</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="food-category">
                <div className="food-group">

                    <div className="food-content">
                        {renderCategoryFood()}
                    </div>
                </div>
            </div>
        </Layout>
    )
}
