import React, { useEffect, useState } from 'react'
import { getListUser } from '../../../../../pages/api/user';
import { menuRole } from '../../../../data/menu';
import Modal from '../../../../modal';
import StoreDetail from '../../Store/InforStore'
export default function Store() {

    const [listUser, setListUser] = useState([])
    const [viewStore,setViewStore] = useState(null)
    useEffect(async () => {
        await reload()
    }, [])

    async function reload() {
        const response = await getListUser("store")
        if (response.success) {
            setListUser(response.results)
        }
    }


    function renderTableUser() {
        return (listUser.length > 0) && listUser.map((item, idx) => {
            const role = menuRole.find(r => r.role === item.role)

            return <tr key={idx}>
                <th scope="row">{idx + 1}</th>
                <td>{item.username}</td>
                <td>{item.fullname}</td>
                <td>{role.title}</td>
                <td>
                    <div className="text-center">
                        <button className="m-1 btn btn-success "
                            onClick={() => {
                            }}
                        >
                            <i className="fas fa-edit"></i>
                        </button>
                        <button className="m-1 btn btn-warning"
                        onClick={() => setViewStore(item)}>
                            <i className="fas fa-eye"></i>
                        </button>
                    </div>
                </td>
            </tr>
        })
    }


    return (
        <div>
            <div className="row ms-3 mt-3 ">
                <div className="title col">
                    <h5>Danh sách cửa hàng</h5>
                </div>
                <div className="col">
                    <form className="d-flex ">
                        <input className="form-control w-75 me-2" type="search" placeholder="Tên cửa hàng" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Tìm kiếm</button>
                    </form>
                </div>
            </div>

            <div className="mt-3">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tên cửa hàng</th>
                            <th scope="col">Địa chỉ</th>
                            <th scope="col">Được duyệt</th>
                            <th scope="col">Chỉnh sửa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTableUser()}
                    </tbody>
                </table>
            </div>
            {viewStore &&
                <Modal title="Thông tin cửa hàng"
                    onClose={() => setViewStore(null)}
                >
                    <StoreDetail auth={{user:viewStore}}/>
                </Modal>
            }
        </div>
    )
}
