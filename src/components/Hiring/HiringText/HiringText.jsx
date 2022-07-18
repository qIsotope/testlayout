import React from 'react'
import styles from './hiringText.module.scss'

export const HiringText = ({ children, top }) => {
	return (
		<p className={top ? styles.hiring__textTop : styles.hiring__textBot}>
			{children}
		</p>
	)
}
