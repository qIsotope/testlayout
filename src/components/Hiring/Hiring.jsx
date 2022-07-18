import React from 'react'
import styles from './hiring.module.scss'
import { HiringFooter } from './HiringFooter/HiringFooter'
import { HiringHeader } from './HiringHeader/HiringHeader'
import { HiringMain } from './HiringMain/HiringMain'

export const Hiring = () => {
	return (
		<section className={styles.hiring}>
			<div className="container">
				<HiringHeader />
				<HiringMain />
				<HiringFooter />
			</div>
		</section>
	)
}
