const SAMPLE_DATA = [
	{
		id: "134213",
		customerEmail: "abc@gmail.com",
		customerName: "Coco Cola Company",
		issued: "23/10/20",
		due: "23/10/20",
		items: [{
			itemName: "AAAA",
			quantity: 1,
			price: 30,
			total: 30
		},
		{
			itemName: "BBBB",
			quantity: 1,
			price: 30,
			total: 30
		}],
		notes: "hello",
		status: "Paid"
	}, {
		id: "3231",
		customerEmail: "abc@gmail.com",
		customerName: "Coco Cola Company",
		issued: "23/10/20",
		due: "23/10/20",
		items: [{
			itemName: "AAAA",
			quantity: 1,
			price: 30,
			total: 30
		},
		{
			itemName: "BBBB",
			quantity: 1,
			price: 30,
			total: 30
		}],
		notes: "hello",
		status: "paid"
	}, {
		id: "12323",
		customerEmail: "abc@gmail.com",
		customerName: "Coco Cola Company",
		issued: "23/10/20",
		due: "23/10/20",
		items: [{
			itemName: "AAAA",
			quantity: 1,
			price: 30,
			total: 30
		},
		{
			itemName: "BBBB",
			quantity: 1,
			price: 30,
			total: 30
		}],
		notes: "hello",
		status: "paid"
	}
]


// {
// 	id: string,
// 	customerEmail: string,
// 	customerName: string,
// 	issuedOn: date,
// 	due: date,
// 	items: [{
// 		itemName: string, 
// 		quantity: number,
// 		price: number,
// 		total: number
// 	}],
// 	note: string,
// 	status: string
// }

export default SAMPLE_DATA;