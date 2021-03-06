import React from 'react';
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { DefaultBoxWrapper } from '../materialize';

class SettingsView extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		if(this.props.logStatus.loggedIn === false) {
      browserHistory.push('/app');
    }
	}

	render() {
	  return (
  		<DefaultBoxWrapper>
  			<p>Settings</p>
  		</DefaultBoxWrapper>
	  )
  }
}

function mapStateToProps(state) {
  return {
    logStatus: state.logStatus
  }
}

export default connect(mapStateToProps)(SettingsView);
