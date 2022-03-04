import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCloseLoginForm } from '../../redux/layoutSlice'
import { registerUser, signInUser } from '../../redux/authSlice'
import { useRouter } from 'next/router'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
export default function Login({ }) {
	const [openRegister, setOpenRegister] = useState(false)
	const dispatch = useDispatch()
	const layout = useSelector(state => state.layout)
	const auth = useSelector(state => state.auth)
	const router = useRouter()

	async function handleSubmitLogin(e) {
		try {
			e.preventDefault()
			const { username, password } = e.target
			await dispatch(signInUser({ username: username.value, password: password.value })).unwrap()
			dispatch(setCloseLoginForm())
			router.push({
				pathname: '/tai-khoan'
			})
		} catch (error) {
			alert(error)
		}
	}

	async function handleSubmitRegister(e) {
		try {
			e.preventDefault()
			const { username, password1, password2 } = e.target
			await dispatch(registerUser({ username: username.value, password: password1.value })).unwrap()
			setOpenRegister(false)
			router.push({
				pathname: '/tai-khoan'
			})
		} catch (error) {
			alert(error)
		}
	}

	const { openFormLogin } = layout

	function onClose() {
		dispatch(setCloseLoginForm())
	}

	useEffect(() => {
		if (auth.isAuth) {
			dispatch(setCloseLoginForm())
		}
	}, [auth])

	return (
		<>
			{(openFormLogin) && <LoginForm
				auth={auth}
				onClose={onClose}
				handleSubmit={handleSubmitLogin}
				onRegster={() => {
					setOpenRegister(true)
				}}
			/>}
			{openRegister && <RegisterForm
				auth={auth}
				onClose={() => setOpenRegister(false)}
				handleSubmit={handleSubmitRegister}
			/>}
		</>
	)
}
