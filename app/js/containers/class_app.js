import React from 'react';
import { connect } from 'react-redux';

import Dashboard from './dashboard';

const ClassApp = React.createClass({

  render() {
    return (
      <Dashboard
      {...this.props}/>
    );
  }
});

function mapStateToProps(state) {
  return {
    ...state.mainReducer
  };
}

export default connect(
  mapStateToProps
)(ClassApp);
