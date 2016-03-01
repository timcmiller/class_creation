import React from 'react';

export default React.createClass({

  render() {
    return (
      <section className="mainContainer">
        <ul>
          <li>
            <h2>
              Class Name
            </h2>
            <input type="text" placeholder="Hello World" />
          </li>
          <li>
            <form>
              <input type="radio" name="frequency" value="Daily" defaultChecked />Daily
              <input type="radio" name="frequency" value="Weekly" />Weekly
              <input type="radio" name="frequency" value="Monthly" />Monthly
            </form>
          </li>
          <li>
            <input type="checkbox" name="switch" />Make this class private
            <input type="text" placeholder="Room Location" />
          </li>
          <li>
            <input type="text" placeholder="Class Type" />
            <input type="text" placeholder="Maximum Age" />
          </li>
          <li>
            <input type="text" placeholder="Minimum Age" />
            <input type="text" placeholder="Max Class Size" />
          </li>
          <li>
            <p>
              Description
            </p><br />
            <textarea row="6" columns="15">
            </textarea>
          </li>
        </ul>
      </section>
    );
  }
})
