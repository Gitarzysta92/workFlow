import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createStore } from 'redux';

import reducer from './global-reducer';

const store = createStore(reducer)
const storeContext = React.createContext(null);


class StoreProvider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			storeState: store.getState()
		}
	}

	render() {
		return (
			
		);
	}
}
