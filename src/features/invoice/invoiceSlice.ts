import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import * as REQUESTS from './invoiceAPI';

export interface Items {
	itemName: string,
	quantity: number,
	price: number,
}
export interface Invoice {
	id: string;
	customerEmail: string;
	customerName: string;
	issued: string;
	due: string;
	items: Items[],
	total: number;
	note: string,
	status:string,
}

export interface InvoiceState {
	loading: boolean;
	error: string | null;
	invoices: Invoice[];
}

export const initialState: InvoiceState = {
	loading: false,
	error: null,
	invoices: [],
}



const invoiceSlice = createSlice({
	name: "invoice",
	initialState,
	reducers: {
		invoiceStart(state) {
			state.loading = true;
			state.error = null;
		},
	
		setInvoices(state, action: PayloadAction<{ data: Invoice[] }>) {
			const { data } = action.payload;
			// for all in payload we are making a new array and adding to the state
			state.invoices = data.map((invoice) => invoice);
		},
		addInvoice(state, action: PayloadAction<{ data: Invoice }>) {
			const { data } = action.payload;
			state.invoices.push(data);
		},
		invoiceFailure(state, action: PayloadAction<string | null>) {
			state.loading = false;
			state.error = action.payload ? action.payload : 'error';
		},
		invoiceComplete(state) {
			state.loading = false;
		}
	},
})

export const {
	invoiceStart,
	setInvoices,
	invoiceFailure,
	invoiceComplete,
	addInvoice
} = invoiceSlice.actions;

export default invoiceSlice.reducer;


export const getInvoices = (): AppThunk => async (dispatch) => {
	try {
		dispatch(invoiceStart());
		const data = await REQUESTS.getInvoices();
		dispatch(setInvoices({ data }));
		dispatch(invoiceComplete());
	} catch (error) {
		if (error.response) {
			const { data, status } = error.response;
			dispatch(invoiceFailure(data));
		}
	}
};

export const createInvoice = (invoiceInput: Invoice): AppThunk => async (dispatch) => {
	try {
		dispatch(invoiceStart());
		const invoice = await REQUESTS.addInvoice(invoiceInput);
		// dispatch(setStudent(student));
		dispatch(addInvoice(invoice))
		dispatch(invoiceComplete());
	} catch (error) {
		if (error.response) {
			const { data, status } = error.response;
			dispatch(invoiceFailure(data));
		}
	}
};
