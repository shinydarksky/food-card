import React, { useState } from 'react'
import { menuAdmin, menuCustomer, menuShipper, menuStore } from '../data/menu'
import Board from './Board'
import NavMenu from './NavMenu'

export default function index({ role }) {
	const [currentMenu, setCurrentMenu] = useState(renderRole()[0])
	function renderRole() {
		switch (role) {
			case 'admin':
				return menuAdmin
			case 'customer':
				return menuCustomer
			case 'store':
				return menuStore
			case 'shipper':
				return menuShipper
			default:
				return menuCustomer
		}
	}

	function handleMenu(e) {
		setCurrentMenu(e)
	}

	return (
		<div className="wrap-dashboard row">
			<NavMenu menu={renderRole()}
				currentMenu={currentMenu}
				handleMenu={handleMenu}
			/>
			<Board currentMenu={currentMenu} menu={renderRole()} />
		</div>
	)
}
