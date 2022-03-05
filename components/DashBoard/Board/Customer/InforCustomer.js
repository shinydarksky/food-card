import React, { useState, useEffect } from 'react'
import { getUserInfor, updateUserInfor } from '../../../../pages/api/user'
import Moment from 'moment';
export default function InforCustomer({ auth }) {
	const [userInfor, setUserInfor] = useState({})
	const { user } = auth

	useEffect(async () => {
		const userInfor = await getUserInfor(user._id)
		setUserInfor(userInfor.results)
	}, [])

	const {userId, email, phone, gender, birth } = userInfor || {}

	async function handleSubmit(e) {
		e.preventDefault()
		let { email, phone, gender, birth } = e.target
		email = email.value
		phone = phone.value
		gender = gender.value
		birth = birth.value
		const formData = {
			userId:userId,
			email:email,
			phone:phone,
			gender:gender,
			birth:birth,
		}
		const response = await updateUserInfor(userInfor._id,formData)
		if(response.success){
			alert('Cập nhật thành công')
		}
		else{
			alert('Cập nhật thất bại')
		}
	}

	function onChangeGender(e){
		const temp= {}
		temp[e.target.name] = e.target.value
		setUserInfor({...userInfor,...temp})
	}


	return (
		<div className="row mt-3">
			<div className="text-center">
				<h4>Thông tin cá nhân</h4>
			</div>
			<div className="mt-3">
				<div className="card ">
					<form onSubmit={handleSubmit}>
						<div className="card-body w-50 " style={{ margin: '0 auto' }}>

							<div className="d-flex justify-content-between m-2">
								<div className="col-auto w-25">
									<label htmlFor="username" className="col-form-label">Tài khoản</label>
								</div>
								<div className="col-auto w-75">
									<input
										id="username"
										className="form-control"
										name="username" disabled
										defaultValue={user.username}
									/>
								</div>
							</div>
							<div className="d-flex justify-content-between m-2">
								<div className="col-auto w-25">
									<label htmlFor="email" className="col-form-label">Địa chỉ email	</label>
								</div>
								<div className="col-auto w-75">
									<input
										id="email"
										type="email"
										className="form-control"
										name="email"
										defaultValue={email || ''}
									/>
								</div>
							</div>
							<div className="d-flex justify-content-between m-2">
								<div className="col-auto w-25">
									<label htmlFor="phone" className="col-form-label">Số điện thoại</label>
								</div>
								<div className="col-auto w-75">
									<input
										id="phone"
										className="form-control"
										name="phone"
										defaultValue={phone || ''}
									/>
								</div>
							</div>
							<div className="d-flex justify-content-between m-2">
								<div className="col-auto w-25">
									<label htmlFor="gender" className="col-form-label">Giới tính</label>
								</div>
								<div className="col-auto w-75">
									<div className="d-flex justify-content-around m-2">
										<div>
											<input
												id="male"
												defaultValue="male"
												type="radio"
												className="form-check-input align-text-top"
												name="gender"
												onChange={onChangeGender}
												checked={'male' === gender}
											/>
											<label htmlFor="male" className="col-form-label ms-1 me-1">Nam</label>
										</div>
										<div>
											<input
												id="female"
												defaultValue="female"
												type="radio"
												className="form-check-input align-text-top"
												name="gender"
												onChange={onChangeGender}
												checked={'female' === gender}
											/>
											<label htmlFor="female" className="col-form-label ms-1 me-1">Nữ</label>
										</div>
										<div>
											<input
												id="other"
												defaultValue="other"
												type="radio"
												className="form-check-input align-text-top"
												name="gender"
												onChange={onChangeGender}
												checked={'other' === gender}
											/>
											<label htmlFor="other" className="col-form-label ms-1 me-1">Khác</label>
										</div>
									</div>
								</div>
							</div>
							<div className="d-flex justify-content-between m-2">
								<div className="col-auto w-25">
									<label htmlFor="date" className="col-form-label">Ngày sinh</label>
								</div>
								<div className="col-auto w-75">
									<input
										id="date"
										value={Moment(birth).format('YYYY-MM-DD')}
										type="date"
										className="form-control"
										name="birth" 
										onChange={onChangeGender}
										/>
								</div>
							</div>
						</div>
						<div className="text-center m-3	">
							<button className="btn btn-primary">
								Cập nhật
							</button>
						</div>
					</form>

				</div>
			</div>
		</div>
	)
}
