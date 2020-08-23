function processData(inputData) {
	const dimensions = inputData.dimensions;
	const metadata = inputData.metadata;
	let FinalprocessedData = [];
	// finds the max object so that we can always get all the available datas
	noOfObj = dimensions.reduce(function (prev, current) {
		return (prev.values.length > prev.values.length) ? prev : current
	}).values;
	noOfObj.forEach((element, noOfObjIndex) => {
		// process single object
		let processedData = {};
		metadata.map((element, index) => {
			dimensionsObj = dimensions.find(e => e.id === element.id);
			let details = {
				[element.label]: dimensionsObj.values[noOfObjIndex]
			};
			processedData = {
				...processedData,
				...details
			}
		});
		// creating final object
		FinalprocessedData.push(processedData);
	});

	return FinalprocessedData;
}

let inputData = {
	"dimensions": [{
		"id": "dimension_re",
		"values": ["East", "East", "West", "West", "South"]
	}, {
		"id": "dimension_cnt",
		"values": ["London", "Italy", "Germany", "Germany", "Russia"]
	}, {
		"id": "measure_sales",
		"values": [100, 156, 432, 462, 25]
	}, {
		"id": "measure_qty",
		"values": [85, 34, 153, 434, 52]
	}, {
		"id": "measure_profit",
		"values": [123, 45, 421, 465, 451]
	}],
	"metadata": [{
		"id": "dimension_re",
		"label": "Region"
	}, {
		"id": "dimension_cnt",
		"label": "County"
	}, {
		"id": "measure_sales",
		"label": "Sales"
	}, {
		"id": "measure_qty",
		"label": "Quantity"
	}, {
		"id": "measure_profit",
		"label": "Profit"
	}]
}

console.log('dimensions => ', inputData.dimensions);
console.log('metadata => ', inputData.metadata);
console.log('Output => ', processData(inputData));


