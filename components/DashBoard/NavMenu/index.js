import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLogout } from '../../../redux/authSlice'
export default function NavMenu({ menu, currentMenu, handleMenu,user }) {
    const dispatch = useDispatch()
    
    function renderMenuItem() {
        if (menu) {
            return menu.map((item, idx) => {
                let classNavItem = "nav-link"
                if (currentMenu.href === item.href)
                    classNavItem += " active"
                return <li className="nav-item m-1" key={idx}
                    onClick={() => handleMenu(item)}
                >
                    <span className={classNavItem} aria-current="page">
                        <i className={item.icon}></i>
                        <span className="ms-3">{item.title}</span>
                    </span>
                </li>
            })
        }
    }

    return (
        <div className="wrap-nav-menu">
            <div className="d-flex flex-column  flex-shrink-0 p-3 " >
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
                    <span className="fs-4">Quản lý</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    {renderMenuItem()}
                    <li>
                        <a href="#" className="nav-link link-dark">
                            <svg className="bi me-2" width={16} height={16}><use xlinkHref="#speedometer2" /></svg>

                        </a>
                    </li>

                </ul>
                <hr />
                <div className="dropdown">
                    <a href="#" className="d-flex align-items-center link-dark text-decoration-none" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width={32} height={32} className="rounded-circle me-2" />
                        <strong>{user.username}</strong>
                    </a>

                    <span className="dropdown-item" 
                        onClick={()=>dispatch(setLogout())}
                    >Đăng xuất</span>
                </div>
            </div>
        </div>
    )
}
