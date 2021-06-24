import React, { useEffect } from 'react'
import { shallowEqual } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../app/hooks'

// components
import { Button, SearchBox } from '../../components'
import Invoice from './Invoice'

// styles
import styles from '../../styles/views/Dashboard.module.css'
import { getInvoices } from '../../features/invoice/invoiceSlice';

const Dashboard = () => {
	const dispatch = useAppDispatch();

	const { invoiceLoading, invoices } = useAppSelector((state) => {
		return {
			invoiceLoading: state.invoice.loading,
			invoices: state.invoice.invoices,
		};
	}, shallowEqual);

	useEffect(() => {
		dispatch(getInvoices());
		return () => { };
	}, [dispatch]);

	if (invoiceLoading)
		return <p>Loading</p>
	return (
		<div className={styles.dashboard}>
			<div className={styles.dashboard__heading}>
				<div>
					<h2>
						Invoice Details
					</h2>
					<p>List of all your recent transactions</p>
				</div>
				<Button onClick={() => { window.location.href = "/new" }}>New Invoice</Button>
			</div>
			<SearchBox />
			<div className={styles.dashboard__invoice}>
				<p>Invoice ID</p>
				<p>Customer Name</p>
				<p>Total Amount</p>
				<p>Issued</p>
				<p>Due</p>
				<p>Status</p>
			</div>
			{invoiceLoading ? <p>Loading</p> :

				invoices.map((data, index) => (
					<Invoice
						key={index}
						id={data.id}
						customerName={data.customerName}
						due={data.due}
						issued={data.issued}
						total={data.total}
						status={data.status}
					/>))

			}

		</div>
	)
}

export default Dashboard
