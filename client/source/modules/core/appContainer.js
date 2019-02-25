import { connect } from 'react-redux';
import App from './app.js';

const mapStateToProps = state => ({
	user: state.user
});

export default connect(mapStateToProps)(App);