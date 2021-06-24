
import { nanoid } from 'nanoid'
import { useForm, useFieldArray, useWatch, Control } from "react-hook-form";
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { createInvoice, Invoice } from '../../features/invoice/invoiceSlice';


export default function InvoiceForm() {

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
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input required {...register("customerName")} placeholder="Customer Name" />
				<input required {...register("customerEmail")} placeholder="Customer Email" />
				<input required {...register("issued")} placeholder="Issued On" type="date" />
				<input required {...register("due")} placeholder="Due Date" type="date" />
				{fields.map((field, index) => {
					return (
						<div key={field.id}>
							<section key={field.id}>
								<input
									placeholder="itemName"
									{...register(`items.${index}.itemName` as const, {
										required: true
									})}
									className={errors?.items?.[index]?.itemName ? "error" : ""}
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
								<button type="button" onClick={() => remove(index)}>
									DELETE
								</button>
							</section>
						</div>
					);
				})}
				<select required {...register("status")} >
					<option value="Paid">Paid</option>
					<option value="Pending">Pending</option>
					<option value="Late">Late</option>
				</select>
				<textarea required {...register("note")} placeholder="Notes" />
				<Total control={control} />

				<button
					type="button"
					onClick={() =>
						append({
							itemName: "",
							quantity: 0,
							price: 0
						})
					}
				>
					APPEND
				</button>
				<input type="submit" />
			</form>
		</div>
	);
}

// export default InvoiceForm
