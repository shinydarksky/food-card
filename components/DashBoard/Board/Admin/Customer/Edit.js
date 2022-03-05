import React from 'react'
import Modal from '../../../../modal'
import { menuRole } from '../../../../data/menu'
import { updateUser } from '../../../../../pages/api/user'
export default function Edit({ data, onClose,cb }) {

    let title = "Chỉnh sửa tài khoản: "
    title += data.username

    function renderRole() {
        return menuRole.map((item, idx) => {
            return <option key={idx} value={item.role}>
                {item.title}
            </option>
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        let { role } = e.target
        role = role.value

        const response = await updateUser(data._id,{role:role})
        if(response.success){
            cb()
            alert(response.message)
        }
        else
            alert(response.message)
    }

    return (
        <Modal title={title} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <div className="modal-body">
                    <div className="row g-3 align-items-center">
                        <div className="col-auto w-25">
                            <label htmlFor="role" className="col-form-label">Vai trò</label>
                        </div>
                        <div className="col-auto w-75">
                            <select id="role" className="form-control" name="role" >
                                {renderRole()}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                        onClick={onClose}
                    >Đóng</button>
                    <button type="submit" className="btn btn-primary">Cập nhật</button>
                </div>
            </form>
        </Modal>
    )
}
