import React from 'react'

export default function InforCustomer() {
	return (
		<div className="row mt-3">
			<div className="text-center">
				<h4>Thông tin cá nhân</h4>
			</div>
			<div className="mt-3">
				<div className="card ">
					<div className="card-body w-50 " style={{ margin: '0 auto' }}>
						<div className="d-flex justify-content-between m-2">
							<div className="col-auto w-25">
								<label htmlFor="username" className="col-form-label">Tài khoản</label>
							</div>
							<div className="col-auto w-75">
								<input id="username" className="form-control" name="username" />
							</div>
						</div>
						<div className="d-flex justify-content-between m-2">
							<div className="col-auto w-25">
								<label htmlFor="email" className="col-form-label">Địa chỉ email	</label>
							</div>
							<div className="col-auto w-75">
								<input id="email" type="email" className="form-control" name="email" />
							</div>
						</div>
						<div className="d-flex justify-content-between m-2">
							<div className="col-auto w-25">
								<label htmlFor="phone" className="col-form-label">Số điện thoại</label>
							</div>
							<div className="col-auto w-75">
								<input id="phone" className="form-control" name="phone" />
							</div>
						</div>
						<div className="d-flex justify-content-between m-2">
							<div className="col-auto w-25">
								<label htmlFor="gender" className="col-form-label">Giới tính</label>
							</div>
							<div className="col-auto w-75">
								<div className="d-flex justify-content-around m-2">
									<div>
										<input id="male" type="radio" className="form-check-input align-text-top" name="gender" />
										<label htmlFor="male"  className="col-form-label ms-1 me-1">Nam</label>
									</div>
									<div>
										<input id="female" type="radio" className="form-check-input align-text-top" name="gender" />
										<label htmlFor="female" className="col-form-label ms-1 me-1">Nữ</label>
									</div>
									<div>
										<input id="other" type="radio" className="form-check-input align-text-top" name="gender" />
										<label htmlFor="other" className="col-form-label ms-1 me-1">Khác</label>
									</div>
								</div>
							</div>
						</div>
						<div className="d-flex justify-content-between m-2">
							<div className="col-auto w-25">
								<label htmlFor="username" className="col-form-label">Ngày sinh</label>
							</div>
							<div className="col-auto w-75">
								<input id="username" type="date" className="form-control" name="username" />
							</div>
						</div>
					</div>
					<div className="text-center m-3	">
						<button className="btn btn-primary">
							Cập nhật
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
