import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './common/header';
import store from './store';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				{/*Provider把store提供给组件，在组件中用connect进行连接*/}
				<Header />
			</Provider>
		);
	}
}
export default App;
