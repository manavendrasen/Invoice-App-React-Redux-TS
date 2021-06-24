
import { nanoid } from 'nanoid'
import { useForm, useFieldArray, useWatch, Control } from "react-hook-form";
import { useAppDispatch } from '../../app/hooks'
import { createInvoice, Invoice } from '../../features/invoice/invoiceSlice';

// styles
import styles from '../../styles/views/Form.module.css'
import { Button } from '../../components'

const InvoiceForm = () => {

	// initializing the total for the invoice to be 0
	let total: number = 0;
	const Total = ({ control }: { control: Control<Invoice> }) => {
		const formValues = useWatch({
			name: "items",
			control
		});
		total = formValues.reduce(
			(acc, current) => acc + (current.price || 0) * (current.quantity || 0),
			0
		);
		return <p>Total Amount: {total}</p>;
	};

	const dispatch = useAppDispatch();

	const {
		register,
		control,
		handleSubmit,
		formState: { errors }
	} = useForm<Invoice>({
		defaultValues: {
			items: [{ itemName: "", quantity: 1, price: 0 }]
		},
		mode: "onBlur"
	});
	const { fields, append, remove } = useFieldArray({
		name: "items",
		control
	});
	const onSubmit = (data: Invoice) => {
		const sendData = {
			...data,
			total,
			id: nanoid(10),

		}
		alert(JSON.stringify(sendData, null, 2))
		dispatch(createInvoice(sendData));
		window.location.href = "/";
	};

	return (
		<div className={styles.formPage}>
			<h2>New Invoice</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>
					Customer Name
					<input required {...register("customerName")} placeholder="Customer Name" />
				</label>

				<label htmlFor="customerEmail">
					Customer Email
					<input required {...register("customerEmail")} placeholder="Customer Email" />
				</label>

				<div className={styles.form__input_container}>

					<label htmlFor="issued">
						Issued On
						<input required {...register("issued")} placeholder="Issued On" type="date" />
					</label>

					<label htmlFor="due">
						Due Date
						<input required {...register("due")} placeholder="Due Date" type="date" />
					</label>
				</div>
				{fields.map((field, index) => {
					return (
						<div key={field.id}>
							<section className={styles.form__item_field} key={field.id}>
								<input
									placeholder="itemName"
									{...register(`items.${index}.itemName` as const, {
										required: true
									})}
									defaultValue={field.itemName}
								/>
								<input
									placeholder="quantity"
									type="number"
									{...register(`items.${index}.quantity` as const, {
										valueAsNumber: true,
										required: true
									})}

									defaultValue={field.quantity}
								/>
								<input
									placeholder="value"
									type="number"
									{...register(`items.${index}.price` as const, {
										valueAsNumber: true,
										required: true
									})}

									defaultValue={field.price}
								/>
								<Button onClick={() => remove(index)}>
									Delete Item
								</Button>
							</section>
						</div>
					);
				})}

				<Button
					onClick={() =>
						append({
							itemName: "",
							quantity: 0,
							price: 0
						})
					}
				>
					Add Item
				</Button>
				<label htmlFor="status">
					Status
					<select required {...register("status")} >
						<option value="Paid">Paid</option>
						<option value="Pending">Pending</option>
						<option value="Late">Late</option>
					</select>
				</label>

				<textarea required {...register("note")} placeholder="Notes" />
				<Total control={control} />

				<input type="submit" />
			</form>
		</div >
	);
}

export default InvoiceForm
