import React, { useEffect, useState } from 'react'
import { getListUser } from '../../../../../pages/api/user';
import { menuRole } from '../../../../data/menu';
import Edit from './Edit';
export default function Customer() {
    const [listUser, setListUser] = useState([])
    const [dataEdit, setDataEdit] = useState(null)

    useEffect(async () => {
        const response = await getListUser()
        if (response.success) {
            setListUser(response.results)
        }
    }, [])

    function renderTableUser() {
        return (listUser.length > 0) && listUser.map((item, idx) => {
            const role = menuRole.find(r=>r.role===item.role)

            return <tr key={idx}>
                <th scope="row">{idx + 1}</th>
                <td>{item.username}</td>
                <td>{item.fullname}</td>
                <td>{role.title}</td>
                <td>
                    <div className="text-center">
                        <button className="m-1 btn btn-success "
                            onClick={()=>{
                                setDataEdit(item)
                            }}
                        >
                            <i className="fas fa-edit"></i>
                        </button>
                        <button className="m-1 btn btn-warning">
                            <i className="fas fa-eye"></i>
                        </button>
                    </div>
                </td>
            </tr>
        })
    }

    return (
        <div>
            {dataEdit && <Edit data={dataEdit} onClose={()=>setDataEdit(null)}/>}


            <div className="row ms-3 mt-3   ">
                <div className="title col">
                    <h5>Danh sách khách hàng</h5>
                </div>
                <div className="col">
                    <form className="d-flex ">
                        <input className="form-control w-75 me-2" type="search" placeholder="Tên khách hàng" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Tìm kiếm</button>
                    </form>
                </div>
            </div>
            <div className="mt-3">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tài khoản </th>
                            <th scope="col">Tên</th>
                            <th scope="col">Vai trò</th>
                            <th scope="col">Chi tiết</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {renderTableUser()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
