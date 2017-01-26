import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	// constructor(){
	// 	super();
	// 	this.goToStore = this.goToStore.bind(this);
	// }

	goToStore(event) {
		event.preventDefault();
		//First grab the text from the box
		const storedId = this.storeInput.value;
		console.log(`Going to ${storedId}`);
		//Second we're going to transition from / to /store/:storeId
		this.context.router.transitionTo(`/store/${storedId}`);
	}

	render() {
		return (
			<form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
				{/* This is a JSX comment */} 
				<h2>Please enter a store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
				<button type="submit">Visit Store -> </button>
			</form>
		)
	}
}

StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker;