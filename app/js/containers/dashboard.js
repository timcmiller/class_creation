import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({

  render() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
});
