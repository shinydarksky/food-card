import Layout from "../layout";

export default function Custom404(status) {


    return <Layout>
        <div className="error-wrapper">
            <h2 ><span >404</span> | Địa chỉ bạn yêu cầu không tồn tại. <br />hãy trở về <a href="/">Trang chủ</a> Chúng mình rất xin lỗi vì sự bất tiện này</h2>
        </div>
    </Layout>


}