import React, { FC } from 'react'
import { Link } from 'react-router-dom'
// styles
import styles from '../../styles/views/Dashboard.module.css';

interface Props {
	id: string,
	customerName: string,
	total?: number,
	issued: string,
	due: string,
	status: string
}

const Invoice: FC<Props> = ({ id, customerName, total, due, issued
	, status
}) => {
	return (
		<Link to={`/invoice/${id}`}>
			<div className={styles.dashboard__invoice}>
				<p>#{id}</p>
				<p>{customerName}</p>
				<p>{total}</p>
				<p>{issued}</p>
				<p>{due}</p>
				<p>{status}</p>
			</div>
		</Link>

	)
}

export default Invoice
