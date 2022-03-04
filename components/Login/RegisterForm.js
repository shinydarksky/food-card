import React from 'react'
import Modal from '../modal'

export default function RegisterForm({ onClose, handleSubmit,auth={auth} }) {
    return (
        <Modal title="Đăng ký tài khoản" onClose={onClose}>
            <form onSubmit={handleSubmit}>
                {auth.loading && <div>
                    <i className="fas fa-spinner fa-spin ms-3 mt-3"></i> Đang thực hiện đăng ký
                </div>}
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
                            <input id="password" className="form-control" name="password1" />
                        </div>
                        <div className="col-auto w-25">
                            <label htmlFor="password" className="col-form-label"></label>
                        </div>
                        <div className="col-auto w-75">
                            <input id="password" className="form-control" name="password2" />
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                        onClick={onClose}
                    >Đóng</button>
                    <button type="submit" className="btn btn-primary">Đăng ký</button>
                </div>
            </form>
        </Modal>
    )
}
