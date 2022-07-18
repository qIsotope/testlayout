import React from 'react'
import styles from './hiringInput.module.scss'

export const HiringInput = (props) => {
	return (
		<input type="text" placeholder={props.placeholder} {...props} className={styles.hiring__input} />
	)
}
