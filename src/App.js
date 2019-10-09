import React from 'react';
import { connect } from 'react-redux';
import { buyItem, removeFeature } from './actions';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {
	const removeFeature = (item) => {
		// dispatch an action here 	to remove an item
		props.removeFeature(item);
	};

	const buyItem = (item) => {
		// dipsatch an action here to add an item
		props.buyItem(item);
	};

	console.log('additional features', props.additionalFeatures.length);
	console.log('props.car.features', props.car.features);

	return (
		<div className="boxes">
			<div className="box">
				<Header car={props.car} />
				<AddedFeatures feat={props.car.features} removeFeature={removeFeature} />
			</div>
			<div className="box">
				<AdditionalFeatures feat={props.additionalFeatures} buyItem={buyItem} />
				<Total carPrice={props.car.price} additionalFeatures={props.car.features} />
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		car: state.car,
		additionalPrice: state.additionalPrice,
		additionalFeatures: state.additionalFeatures
	};
};

export default connect(mapStateToProps, { buyItem, removeFeature })(App);
