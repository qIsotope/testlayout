import React from 'react'
import styles from './headerLogo.module.scss'

export const HeaderLogo = () => {
	return (
		<div className={styles.header__logo}>
			<img src="./assets/logo.png" alt="logo" className={styles.header__logoImage} />
		</div>
	)
}
