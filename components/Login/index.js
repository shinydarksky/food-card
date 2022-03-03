import React, { useEffect } from 'react'
import Modal from '../modal'
import { useSelector,useDispatch } from 'react-redux'
import { setCloseLoginForm, setOpenLoginForm } from '../../redux/layoutSlice'
import { signInUser } from '../../redux/authSlice'
import { useRouter } from 'next/router'
export default function Login({ }) {

	const dispatch = useDispatch()
	const layout = useSelector(state => state.layout)
	const auth = useSelector(state => state.auth)
	const router = useRouter()
	async function handleSubmit(e) {
		try {
			e.preventDefault()
			const { username, password } = e.target
			await dispatch(signInUser({ username: username.value, password: password.value })).unwrap()
			dispatch(setCloseLoginForm())
			router.push({
				pathname:'/tai-khoan'
			})
		} catch (error) {
			alert(JSON.stringify(error))
		}
	}

	const { openFormLogin } = layout

	function onClose() {
		dispatch(setCloseLoginForm())
	}

	useEffect(() => {
		if(auth.isAuth){
			dispatch(setCloseLoginForm())
		}
	}, [auth])

	return (
		(openFormLogin) && <Modal title="Đăng nhập tài khoản" onClose={onClose}>
			<form onSubmit={handleSubmit}>
				{auth.loading && <i className="fas fa-spinner fa-spin ms-3 mt-3"></i>}
				<div className="modal-body">
					<div className="row g-3 align-items-center">
						<div className="col-auto w-25">
							<label htmlFor="username" className="col-form-label">Tài khoản</label>
						</div>
						<div className="col-auto w-75">
							<input id="username" className="form-control" name="username" />
						</div>
						<div className="col-auto w-25">
							<label htmlFor="password" className="col-form-label">Mật khẩu</label>
						</div>
						<div className="col-auto w-75">
							<input id="password" className="form-control" name="password" />
						</div>
					</div>
				</div>
				<div className="modal-footer">
					<span>Quên mật khẩu?</span>
					<button type="button"
						className="btn btn-secondary"
						data-bs-dismiss="modal"
						onClick={onClose}
					>Đóng</button>
					<button type="submit" className="btn btn-primary">Đăng nhập </button>
				</div>
			</form>
		</Modal>
	)
}
