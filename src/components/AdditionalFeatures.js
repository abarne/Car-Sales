import React from 'react';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = (props) => {
	console.log('props in addfeat', props);
	return (
		<div className="content">
			<h4>Additional Features</h4>
			{props.feat.length ? (
				<ol type="1">
					{props.feat.map((item) => (
						<AdditionalFeature key={item.id} feature={item} buyItem={props.buyItem} />
					))}
				</ol>
			) : (
				<p>Nice looking car!</p>
			)}
		</div>
	);
};

// const mapStateToProps = (state) => {
// 	return {
// 		AdditionalFeatures: state.AdditionalFeatures
// 	};
// };

export default AdditionalFeatures;
