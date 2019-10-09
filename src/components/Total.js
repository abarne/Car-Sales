import React from 'react';

const Total = (props) => {
	const totalAdditionalPrice = props.additionalFeatures.reduce((acc, val) => {
		return acc + val.price;
	}, 0);

	const totalPrice = props.carPrice + totalAdditionalPrice;

	return (
		<div className="content">
			<h4>Total Amount: {totalPrice}</h4>
		</div>
	);
};

export default Total;
