import React, { useEffect } from 'react'
import Layout from '../../layout'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { setOpenLoginForm } from '../../redux/layoutSlice'
import Dashboard from '../../components/DashBoard'

export default function index() {
    const router = useRouter()
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {

    }, [])

    const { user } = auth

    return (
        <Layout>
            {auth.loading && <div className="d-flex">
                <div>
                    <i className="fas fa-spinner fa-spin fa-2x me-3"></i>
                </div>
                <div>
                    <h3>Kiểm tra tài nguyên đăng nhập</h3>
                </div>
            </div>}
            {auth.isAuth ? <div>
                <Dashboard role={user.role} />
            </div> :
                <div className="error-wrapper">
                    <h2 ><span >Tài khoản chưa đăng nhập</span> | hoặc đăng nhập thất bại
                        <br />hãy trở về <a href="/">Trang chủ </a>
                        hoặc đăng nhập lại <span
                            onClick={() => dispatch(setOpenLoginForm())}
                        >Đăng nhập</span> </h2>
                </div>}
        </Layout>
    )
}
