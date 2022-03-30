import React, { useEffect, useState } from 'react'
import { getReceiptChartStore } from '../../../../../pages/api/receipt'
export default function Chart({ auth }) {
    const { user } = auth
    useEffect(async () => {
        await getReceiptChartStore(user._id)
    }, [])


    return (
        <div>
            <div className="title">
                <h3>Doanh thu</h3>
            </div>
            <div>

            </div>
        </div>
    )
}
