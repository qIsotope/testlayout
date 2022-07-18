import React from 'react'
import styles from './headerTitle.module.scss'

export const HiringTitle = ({ children, apply }) => {
	return (
		<div className={apply ? styles.hiring__applyTitle : styles.hiring__headerTitle}>
			{children}
		</div>
	)
}
