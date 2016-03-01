import React from 'react';
import ReactDOM from 'react-dom';

import ClassHeader from './../components/header/header';
import ClassFooter from './../components/footer/footer';

export default React.createClass({

  render() {
    return (
      <section>
        <ClassHeader />
        <ClassFooter />
      </section>
    );
  }
});
