import axios from 'axios';
import { Invoice } from './invoiceSlice';

const BASE_URL = 'http://localhost:5000';
export const API = axios.create({ baseURL: BASE_URL });

// get all invoices
export async function getInvoices() {
	try {
		const res = await API.get("/invoices");
		console.log(`GET /invoices ${res.data}`);
		return res.data;
	} catch (err) {
		throw err;
	}
}

// create a new invoice
export async function addInvoice(invoice: Invoice) {
	try {
		const res = await API.post("/invoices", { ...invoice });
		console.log(`POST /invoices ${res.data}`);
		return res.data;
	} catch (err) {
		throw err;
	}
}

// get invoice by id
export async function getInvoiceById(id:string) {
	try {
		const res = await API.post(`/invoices/${id}`);
		return res.data;
	} catch (err) {
		throw err;
	}
}
