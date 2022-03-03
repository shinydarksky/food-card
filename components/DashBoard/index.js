import React, { useState } from 'react'
import { defaultMenu, menuAdmin, menuCustomer } from '../data/menu'
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
			case 'admin':
				return menuAdmin
			case 'admin':
				return menuAdmin
			default:
				break;
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
