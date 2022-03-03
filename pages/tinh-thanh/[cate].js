import React from 'react'
import Layout from '../../layout'
import { useRouter } from "next/router";
import { getFoodFromArea } from '../api/food';
import CardFood from '../../components/cardFood'

export async function getServerSideProps(context) {
    try {
        const { cate } = context.params
        const { keyword } = context.query
        const listFood = await getFoodFromArea(cate, keyword)
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



export default function Category({ listFood }) {
    const router = useRouter()
    const { query } = router

    function handleSearch(e) {
        e.preventDefault()
        router.push({
            query: { ...query, keyword: e.target.search.value }
        })
    }


    function renderCategoryFood() {
        if (listFood.length > 0) {
            return listFood.map((item, idx) => {
                return <CardFood food={item} key={idx} />
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
                                    <li><a className="dropdown-item" href="#">Tăng dần</a></li>
                                    <li><a className="dropdown-item" href="#">Giảm dần</a></li>
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
