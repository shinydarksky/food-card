export const menuAdmin = [
    {
        title:'Thông tin',
        icon:'fas fa-user',
        href:'infor-customer'
    },
    {
        title:'Doanh số',
        icon:'fas fa-server',
        href:'infor'
    },
    {
        title:'Cửa hàng',
        icon:'fas fa-store',
        href:'store'
    },
    {
        title:'Giao hàng',
        icon:'fas fa-truck',
        href:'shipper'
    },
    {
        title:'Khách hàng',
        icon:'fas fa-user',
        href:'customer'
    },
    {
        title:'Đơn hàng',
        icon:'fas fa-receipt',
        href:'receipt'
    },
   
]


export const menuCustomer = [
    {
        title:'Thông tin',
        icon:'fas fa-user',
        href:'infor-customer'
    },
    {
        title:'Đơn hàng hiện tại',
        icon:'fas fa-receipt',
        href:'current-receipt'
    },
    {
        title:'Danh sách đơn hàng',
        icon:'fas fa-list',
        href:'all-receipt'
    },
    {
        title:'Địa chỉ',
        icon:'fa fa-map-marker',
        href:'locaiton-address'
    },
    {
        title:'Báo cáo',
        icon:'fa fa-rocket',
        href:'report'
    },
]

export const menuStore = [
    {
        title:'Thông tin',
        icon:'fas fa-user',
        href:'infor-customer'
    },
    {
        title:'Cửa hàng',
        icon:'fas fa-store',
        href:'infor-store'
    },
    {
        title:'Doanh thu',
        icon:'fas fa-chart-pie',
        href:'chart'
    },
    {
        title:'Đơn hàng hiện tại',
        icon:'fas fa-receipt',
        href:'current-receipt'
    },
    {
        title:'Danh sách đơn hàng',
        icon:'fas fa-list',
        href:'all-receipt'
    },
    {
        title:'Địa chỉ',
        icon:'fa fa-map-marker',
        href:'locaiton-address'
    },
]


export const menuShipper = [
    {
        title:'Thông tin',
        icon:'fas fa-user',
        href:'infor-customer'
    },
    {
        title:'Giao hàng',
        icon:'fas fa-truck',
        href:'shipper-infor'
    },
    {
        title:'Doanh thu',
        icon:'fas fa-chart-pie',
        href:'chart'
    },
    {
        title:'Đơn hàng hiện tại',
        icon:'fas fa-receipt',
        href:'current-receipt'
    },
    {
        title:'Danh sách đơn hàng',
        icon:'fas fa-list',
        href:'all-receipt'
    },
    {
        title:'Địa chỉ',
        icon:'fa fa-map-marker',
        href:'locaiton-address'
    },
]


export const menuRole = [
    {
        title:'Quản lý',
        role:'admin'
    },
    {
        title:'Khách hàng',
        role:'customer'
    },
    {
        title:'Giao hàng',
        role:'shipper'
    },
    {
        title:'Cửa hàng',
        role:'store'
    },
]

export const statusReceipt = {
    0:'Đang tìm tài xế',
    1:'Xác nhận đơn hàng',
    2:'Đang giao hàng',
    3:'Giao hàng thành công',
    4:'Đã hủy hơn hàng'
}