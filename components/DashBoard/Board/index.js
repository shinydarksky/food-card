import React from 'react'
import {
    Customer,
    Infor,
    Receipt,
    Shipper,
    Store,
} from './Admin'
import { HistoryOrder, InforCustomer, LocationAddress, Order } from './Customer'

export default function Board({ currentMenu }) {

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
                return <InforCustomer />
            case 'locaiton-address':
                return <LocationAddress />
            case 'current-receipt':
                return <Order />
            case 'all-receipt':
                return <HistoryOrder />
        }
    }

    return (
        <div className="col">
            {renderCurrentMenu()}
        </div>
    )
}
