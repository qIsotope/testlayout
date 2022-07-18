import React from 'react'
import styles from './myButton.module.scss'


export const MyButton = (props) => {

	if (props.header) {
		return <button {...props} className={styles.header__button}>{props.children}</button>
	} else if (props.submit) {
		return <button {...props} className={styles.header__submit}>{props.children}</button>
	} else if (props.apply) {
		return (
			<button {...props} className={styles.hiring__apply}>
				<span className={styles.hiring__applyButtonText}>{props.children}</span>
				<img className={styles.hiring__applyButtonIcon} src="./assets/longArrow.svg" alt="longArrow" />
			</button>
		)
	}
}