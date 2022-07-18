import React from 'react'
import { MyButton } from '../../_UI_Elements/MyButton/MyButton'
import { HiringInput } from '../HiringInput/HiringInput'
import styles from './hiringForm.module.scss'

export const HiringForm = () => {
	return (
		<form className={styles.hiring__form}>
			<HiringInput placeholder='Name' />
			<HiringInput placeholder='Phone' />
			<div className={styles.hiring__inputContainer}>
				<HiringInput placeholder='Class a driving experience' />
				<img className={styles.hiring__inputIcon} src="./assets/shortArrow.svg" alt="shortArrow" />
			</div>
			<MyButton submit>
				SEND
			</MyButton>
		</form>
	)
}
