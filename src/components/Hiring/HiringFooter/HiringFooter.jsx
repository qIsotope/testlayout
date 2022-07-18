import React from 'react'
import { MyButton } from '../../_UI_Elements/MyButton/MyButton'
import { HiringTitle } from '../HiringTitle/HiringTitle'
import styles from './hiringFooter.module.scss'

export const HiringFooter = () => {
	return (
		<div className={styles.hiring__footer}>
			<HiringTitle apply>
				Or send all needed information directly to our HR department
			</HiringTitle>
			<MyButton apply>
				APPLY NOW
			</MyButton>
		</div>
	)
}
