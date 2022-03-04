import React from 'react'
import Modal from '../modal'
export default function LoginForm({ onClose, handleSubmit, auth,onRegster }) {
    return (
        <Modal title="Đăng nhập tài khoản" onClose={onClose}>
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
                    <span onClick={onRegster}>Đăng ký!</span>
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
