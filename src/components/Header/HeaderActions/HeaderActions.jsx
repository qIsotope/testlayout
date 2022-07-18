import React from 'react'
import { MyButton } from '../../_UI_Elements/MyButton/MyButton'
import { HeaderItem } from '../HeaderItem/HeaderItem'
import styles from './headerActions.module.scss'

export const HeaderActions = () => {
	return (
		<div className={styles.header__actions}>
			<ul className={styles.header__navigation}>
				<HeaderItem>about us</HeaderItem>
				<HeaderItem>our servises</HeaderItem>
				<HeaderItem>become a driver</HeaderItem>
				<HeaderItem>dispatchers</HeaderItem>
				<HeaderItem> contact us</HeaderItem>
			</ul>
			<MyButton header>track shipment</MyButton>
		</div>)
}
