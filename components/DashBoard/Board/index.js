import React from 'react'
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
    Order
} from './Customer'
import {
    InforStore
} from './Store'

import { useSelector } from 'react-redux'

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
                return <LocationAddress />
            case 'current-receipt':
                return <Order />
            case 'all-receipt':
                return <HistoryOrder />
            case 'infor-store':
                return <InforStore auth={auth} />
        }
    }

    return (
        <div className="col wrap-board">
            {renderCurrentMenu()}
        </div>
    )
}
