import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { shallowEqual } from 'react-redux';
import { useAppSelector } from '../../app/hooks'

const InvoiceDetails = () => {
	const { id } = useParams();
	const { invoiceLoading, invoices } = useAppSelector((state) => {
		return {
			invoiceLoading: state.invoice.loading,
			invoices: state.invoice.invoices,
		};
	}, shallowEqual);

	// required invoice
	const invoice = invoices.filter((invoice) => invoice.id === id);

	return (
		<div>
			{invoiceLoading ? <p>Loading</p> :
				<pre>
					{JSON.stringify(invoice, null, 2)}
				</pre>
			}
		</div>
	)
}

export default InvoiceDetails
