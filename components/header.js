import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { dataMenuArea, dataTopics } from './data/data'
import { useDispatch, useSelector } from 'react-redux'
import { setCloseLoginForm, setOpenLoginForm } from '../redux/layoutSlice'
import { loadUser } from '../redux/authSlice'
export default function Header() {
    const [areaName, setAreaName] = useState('Tỉnh thành')
    const [showCart, setShowCart] = useState(true)
    const router = useRouter()
    const dispatch = useDispatch()
    const { query } = router
    const { auth } = useSelector(state => state)
    const { user } = auth


    

    useEffect(() => {
        const { role } = user || ''
        if(role === 'admin' || role ==='store' || role==='shipper'){
            setShowCart(false)
        }else setShowCart(true)
    },[user])

    useEffect(() => {
        dataMenuArea.forEach(item => {
            if (item.seo == query.cate) {
                setAreaName(item.name)
            }
        })
    }, [query])

    function renderMenuArea() {
        if (dataMenuArea) {
            return dataMenuArea.map((item, idx) => {
                return <Link
                    href={{
                        pathname:'/tinh-thanh/[cate]',
                        query:{
                            cate:item.seo
                        }
                    }}
                    key={idx}
                >
                    <li><a className="dropdown-item" href="#">{item.name}</a></li>
                </Link>
            })
        }
    }

    function renderMenuTopics() {
        if (dataTopics) {
            return dataTopics.map((item, idx) => {
                return <Link
                    href={'/danh-sach/' + item.seo}
                    key={idx}
                >
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">{item.title}</a>
                    </li>
                </Link>
            })
        }
    }

    async function handleOnUser() {
        if (auth.isAuth) {
            router.push({
                pathname: '/tai-khoan',
            })
        } else dispatch(setOpenLoginForm())
    }



    return (
        <div className="wrap-header bg-light">
            <nav className="navbar  navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid ">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="/">
                            <h1 className="header-logo">LTSHIP</h1>
                            {/* <img className="h-logo" src="/assets/images/logo.png" alt="logo" /> */}
                        </a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-wrap">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {areaName}
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    {renderMenuArea()}
                                </ul>
                            </li>
                            {renderMenuTopics()}
                        </ul>
                    </div>

                </div>
            </nav>
            <div>
                <a href="/"><img className="m-logo" src="/assets/images/logo.png" alt="logo" /></a>
            </div>
            <div className="nav-cart">
                <div className="nav-item"

                >
                    {showCart && <span type="button" className="btn btn-outline-danger m-1"
                        onClick={() => {
                            router.push({
                                pathname: '/vo-hang',
                            })
                        }}
                    >
                        <i className="fas fa-shopping-cart"></i>
                    </span>}
                    <span type="button" className="btn btn-outline-danger m-1"
                        onClick={handleOnUser}
                    >
                        <i className="fas fas-solid fa-user"></i>
                    </span>
                    
                </div>
            </div>
        </div>
    )
}
