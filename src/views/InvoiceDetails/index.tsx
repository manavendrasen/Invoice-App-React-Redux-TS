import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { shallowEqual } from 'react-redux';
import { useAppSelector } from '../../app/hooks'

import { Button } from '../../components'

import styles from '../../styles/views/InvoiceDetails.module.css'
const InvoiceDetails = () => {
	const { id } = useParams();
	const { invoiceLoading, invoices } = useAppSelector((state) => {
		return {
			invoiceLoading: state.invoice.loading,
			invoices: state.invoice.invoices,
		};
	}, shallowEqual);

	// required invoice
	const invoice = invoices.filter((invoice) => invoice.id === id)[0];

	return (
		<div className={styles.detailsPage}>
			{invoiceLoading ? <p>Loading</p> :

				<div className={styles.detailsContainer}>
					<h2>Invoice #{invoice.id}</h2>

					<h3>Customer Details</h3>
					<hr />

					<div className={styles.field}>
						<h4>Customer Name:</h4>
						<p>{invoice.customerName}</p>
					</div>

					<div className={styles.field}>
						<h4>Customer Email:</h4>
						<p>{invoice.customerEmail}</p>
						<Button onClick={() => alert("Mail Sent")}>Send Mail</Button>
					</div>


					<h3>Items</h3>
					<hr />
					{invoice.items.map((item) => {
						return (
							<div className={styles.field}>
								<div className={styles.field}>
									<h4>Item Name:</h4>
									<p>{item.itemName}</p>
								</div>
								<div className={styles.field}>
									<h4>Item Price:</h4>
									<p>{item.price}</p>
								</div>

								<div className={styles.field}>
									<h4>Item Quantity:</h4>
									<p>{item.quantity}</p>
								</div>
							</div>
						)

					})}

					<hr />
					<div className={styles.field}>
						<div className={styles.field}>
							<h4>Issued On:</h4>
							<p>{invoice.issued}</p>
						</div>
						<div className={styles.field}>
							<h4>Due Date:</h4>
							<p>{invoice.due}</p>
						</div>
					</div>


					<div className={styles.field}>
						<h4>Note:</h4>
						<p>{invoice.note}</p>
					</div>


					<div className={styles.field}>
						<h4>Status:</h4>
						<p>{invoice.status}</p>
					</div>

					<hr />
					<div className={styles.field}>
						<h4>Total:</h4>
						<p>Rs. {invoice.total}</p>
					</div>
				</div>

			}
		</div>
	)
}

export default InvoiceDetails
