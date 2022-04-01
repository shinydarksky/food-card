import React from 'react'
export default function BlockChart({ listProduct }) {

    function renderOrderItem() {
        return listProduct.map((item, idx) => {
            return <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.num}</td>
                <td>{item.price}</td>
                <td>
                    <div>
                        <button className="btn btn-warning m-1"
                        >
                            <i className=" fas fa-eye "

                            ></i>
                        </button>
                    </div>
                </td>
            </tr>
        })
    }

    return (
        <div>
            <div className="mt-3">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Mã món ăn</th>
                            <th scope="col">Tên món ăn</th>
                            <th scope="col">Số lượng đã bán</th>
                            <th scope="col">Thành tiền</th>
                            <th scope="col">Chi tiết</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderOrderItem()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
