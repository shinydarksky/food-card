import React from 'react'
import { useSelector } from 'react-redux'

import {
    Customer,
    Infor,
    Receipt,
    Shipper,
    Store,
} from './Admin'
import {
    HistoryOrder,
    InforCustomer,
    LocationAddress,
    Order,
    CustomerReport
} from './Customer'
import {
    InforStore,
    Chart,
} from './Store'
import BoardShipper from './Shipper'


export default function Board({ currentMenu }) {
    const { auth } = useSelector(state => state)
    function renderCurrentMenu() {
        switch (currentMenu.href) {
            case 'infor': //admin
                return <Infor />
            case 'store':
                return <Store />
            case 'shipper':
                return <Shipper />
            case 'receipt':
                return <Receipt />
            case 'customer':
                return <Customer />
            case 'infor-customer': // customer
                return <InforCustomer auth={auth} />
            case 'locaiton-address':
                return <LocationAddress auth={auth} />
            case 'current-receipt':
                return <Order auth={auth} />
            case 'all-receipt':
                return <HistoryOrder />
            case 'report':
                return <CustomerReport />
            case 'infor-store':
                return <InforStore auth={auth} /> //Store
            case 'chart':
                return <Chart auth={auth} />
            case 'shipper-infor':
                return <BoardShipper auth={auth} /> //Shipper
        }
    }

    return (
        <div className="col wrap-board">
            {renderCurrentMenu()}
        </div>
    )
}
