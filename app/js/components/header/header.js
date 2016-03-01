import React from 'react';

export default React.createClass({

  render() {
    return (
      <header className="headContainer">
        <nav>
          <span className="icon-menu"></span>
        </nav>
        <section>
          <h1>
            Create a Class
          </h1>
          <ul>
            <li>
              Details >
            </li>
            <li>
              Schedule >
            </li>
            <li>
              Payment >
            </li>
            <li>
              Confirm
            </li>
          </ul>
        </section>
      </header>
    );
  }
});
