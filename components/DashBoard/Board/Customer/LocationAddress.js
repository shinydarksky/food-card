import React from 'react'

export default function Address() {
  return (
    <div>
    <div className="row ms-3 mt-3   ">
        <div className="title col">
            <h5>Danh sách các địa chỉ</h5>
        </div>
        <div className="col">
            <form className="d-flex ">
                <input className="form-control w-75 me-2" type="search" placeholder="Tên khách hàng" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Tìm kiếm</button>
            </form>
        </div>
    </div>
    <div className="mt-3">
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên địa chỉ</th>
                    <th scope="col">Địa chỉ</th>
                    <th scope="col">Chỉnh sửa</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
  )
}
