import React from 'react';

import AddedFeature from './AddedFeature';

const AddedFeatures = (props) => {
	console.log(props.feat);
	return (
		<div className="content">
			<h6>Added features:</h6>
			{props.feat.length ? (
				<ol type="1">
					{props.feat.map((item) => (
						<AddedFeature key={item.id} feature={item} removeFeature={props.removeFeature} />
					))}
				</ol>
			) : (
				<p>You can purchase items from the store.</p>
			)}
		</div>
	);
};

export default AddedFeatures;
