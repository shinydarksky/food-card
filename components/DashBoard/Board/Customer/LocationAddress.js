import React, { useState, useEffect } from 'react'
import { addAddress, getListAddress } from '../../../../pages/api/address'
import { dataMenuArea } from '../../../data/data'
import FieldInput from '../../../Field/FieldInput'
import FieldSelect from '../../../Field/FieldSelect'
import Modal from '../../../modal'
export default function LocationAddress({ auth }) {
    const [listAddress, setListAddress] = useState([])
    const [openNew, setOpenNew] = useState(false)
    const { user } = auth

    async function updateListAddress() {
        const results = await getListAddress(user._id)
        setListAddress(results)
    }

    useEffect(async () => {
        await updateListAddress()
    }, [])

    function renderTableAddress() {
        if (listAddress) {
            return listAddress.map((item, idx) => {
                return <tr key={idx}>
                    <th scope="row">{idx + 1}</th>
                    <td>{item.addressLocation}</td>
                    <td>{item.areaTitle}</td>
                    <td>@mdo</td>
                </tr>
            })
        }
    }


    async function handleSubmit(e) {
        e.preventDefault()
        let { address, area } = e.target
        address = address.value
        area = area.value
        const { name } = dataMenuArea.find(i => i.seo === area)
        const newAddress = {
            userId: user._id,
            addressLocation: address,
            areaTitle: name,
            area: area
        }
        await addAddress(newAddress)
        await updateListAddress()
    }

    function renderArea() {
        return dataMenuArea.map((area, idx) => {
            return <option value={area.seo} key={idx}>
                {area.name}
            </option>
        })
    }

    return (
        <div>
            <div className="ms-3 mt-3">
                <div className="title">
                    <h5>Danh sách các địa chỉ</h5>
                </div>
                <div className="col">
                    <div className="food-control d-flex justify-content-end mt-3 mb-3">
                        <button className="btn btn-primary"
                            onClick={() => setOpenNew(true)}
                        >
                            <i className="fa fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Địa chỉ</th>
                            <th scope="col">Khu vực</th>
                            <th scope="col">Chỉnh sửa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTableAddress()}
                    </tbody>
                </table>
            </div>
            {openNew &&
                <Modal onClose={() => setOpenNew(false)}
                    title="Thêm địa chỉ"
                >
                    <form onSubmit={handleSubmit}>
                        <FieldInput
                            title="Địa chỉ"
                            name="address"
                        />
                        <FieldSelect
                            name="area"
                            title="Tỉnh thành"
                            data={renderArea()}
                        />
                        <div className="text-center ">
                            <button className="btn btn-danger m-1"
                                onClick={() => setOpenNew(false)}
                            >
                                Đóng
                            </button>
                            <button className="btn btn-success m-1" type="submit">
                                Thêm
                            </button>
                        </div>
                    </form>
                </Modal>
            }
        </div>
    )
}
