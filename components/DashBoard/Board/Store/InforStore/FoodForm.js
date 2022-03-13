import Modal from '../../../../modal'
import FieldInput from '../../../../Field/FieldInput'
export default function FoodFood({ onClose, handleSubmit, data = {},address=[] }) {
    function renderAddress(){
        return address.map((item,idx)=>{
            return <option key={idx} 
                value={item._id}
            >
                {item.addressLocation}-{item.areaTitle}
            </option>
        })
    }

    return (
        <Modal
            onClose={onClose}
            title="Thêm món ăn mới"
        >
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <FieldInput title="Tên món ăn" name="name" defaultValue={data.name} />
                <div className="d-flex justify-content-between m-2">
                    <div className="col-auto w-25">
                        <label htmlFor="description" className="col-form-label">Mô tả</label>
                    </div>
                    <div className="col-auto w-75">
                        <textarea
                            className="form-control"
                            id="description"
                            name="description"
                            rows="5"
                            defaultValue={data.description}
                        >
                        </textarea>
                    </div>
                </div>
                <FieldInput
                    name="price"
                    title="Giá"
                    type="number"
                    defaultValue={data.price}
                />
                <div className="d-flex justify-content-between m-2">
                    <div className="col-auto w-25">
                        <label htmlFor="area" className="col-form-label">Địa chỉ</label>
                    </div>
                    <div className="col-auto w-75">
                        <select className="form-control" id="area" name="area" defaultValue={data.area}>
                            {renderAddress()}
                        </select>
                    </div>
                </div>
                <div className="d-flex justify-content-between m-2">
                    <div className="col-auto w-25">
                        <label htmlFor="images" className="col-form-label">Hình minh họa</label>
                    </div>
                    <div className="col-auto w-75">
                        <input
                            id="images"
                            className="form-control"
                            name="images"
                            type="file"
                            multiple="multiple"
                        />
                    </div>
                </div>

                <div className="text-center m-3	">
                    <button className="btn btn-secondary m-1"
                        onClick={onClose}
                    >
                        Hủy
                    </button>
                    <button className="btn btn-primary m-1">
                        Thêm
                    </button>
                </div>
            </form>
        </Modal>
    )
}
