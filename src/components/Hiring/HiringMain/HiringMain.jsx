import React from 'react'
import { HiringForm } from '../HiringForm/HiringForm'
import { HiringImage } from '../HiringImage/HiringImage'
import { HiringText } from '../HiringText/HiringText'
import styles from './hiringMain.module.scss'

export const HiringMain = () => {
	return (
		<div className={styles.hiring__main}>
			<div className={styles.hiring__left}>
				<HiringText top>
					We hire drivers from all across the United States, promoting quality opportunities for hardworking individuals of all backgrounds.
				</HiringText>
				<HiringText>
					We require our drivers to have a minimum of two years experience, knowing they have the skills and reputation to successfully take on any special requests we receive from our customers.
				</HiringText>
				<HiringForm />
			</div>
			<HiringImage />
		</div>
	)
}
