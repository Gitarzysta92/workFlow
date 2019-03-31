import React, { Component } from 'react';

import Modules from './modules';

// import utilities
import apiCaller from './utils/apiCaller';


const AppContext = React.createContext({});
const Core = Modules.getModule('Core', 'component');

class App extends Component {
	render() {
		return (	
			<AppContext.Provider value={'state'}>
				<Core/>
			</AppContext.Provider>
		)
	}
}

export default App;