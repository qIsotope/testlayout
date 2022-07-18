import React from 'react'
import styles from './headerItem.module.scss'

export const HeaderItem = ({ children }) => {
	return (
		<li className={styles.header__navigationItem}>{children}</li>
	)
}
