import React from 'react'
import { HiringSubtitle } from '../HiringSubtitle/HiringSubtitle'
import { HiringTitle } from '../HiringTitle/HiringTitle'
import styles from './hiringHeader.module.scss'

export const HiringHeader = () => {
	return (
		<div className={styles.hiring__header}>
			<HiringTitle>We are hiring!</HiringTitle>
			<HiringSubtitle>The road is your second home? Join us!</HiringSubtitle>
		</div>
	)
}
