import React from 'react'
import styles from './headerSubtitle.module.scss'

export const HiringSubtitle = ({ children }) => {
	return (
		<div className={styles.hiring__headerSubtitle}>
			{children}
		</div>
	)
}
