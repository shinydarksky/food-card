import React, { useEffect, useState } from 'react'
import { getListUser } from '../../../../../pages/api/user';
import { menuRole } from '../../../../data/menu';
import Edit from './Edit';
export default function Customer() {
    const [listUser, setListUser] = useState([])
    const [dataEdit, setDataEdit] = useState(null)
    useEffect(async () => {
        await reload()
    }, [])


    async function reload() {
        const response = await getListUser()
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
                <td>{role.title}</td>
                <td>
                    <div className="text-center">
                        <button className="m-1 btn btn-success "
                            onClick={() => {
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

    function handleSearch(e){
        e.preventDefault()
        const querySearch = e.target.search.value
        if(querySearch===''){
            reload()
            return
        }
        setListUser(listUser.filter(item=>item.username.search(querySearch)>=0))
    }

    return (
        <div>
            {dataEdit && <Edit data={dataEdit} onClose={() => setDataEdit(null)} cb={() => {
                setDataEdit(null)
                reload()
            }} />}


            <div className="row ms-3 mt-3   ">
                <div className="title col">
                    <h5>Danh s??ch kh??ch h??ng</h5>
                </div>
                <div className="col">
                    <form className="d-flex " onSubmit={handleSearch}>
                        <input className="form-control w-75 me-2"
                            type="search"
                            placeholder="T??n t??i kho???n kh??ch h??ng"
                            aria-label="Search"
                            name='search'
                        />
                        <button className="btn btn-outline-success" type="submit">T??m ki???m</button>
                    </form>
                </div>
            </div>
            <div className="mt-3">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">T??i kho???n </th>
                            <th scope="col">Vai tr??</th>
                            <th scope="col">Chi ti???t</th>
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
