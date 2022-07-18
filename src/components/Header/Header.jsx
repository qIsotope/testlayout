import React from 'react'
import styles from './header.module.scss'
import { HeaderActions } from './HeaderActions/HeaderActions'
import { HeaderLogo } from './HeaderLogo/HeaderLogo'

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.header__wrapper}>
					<HeaderLogo />
					<HeaderActions />
				</div>
			</div>
		</header>
	)
}
