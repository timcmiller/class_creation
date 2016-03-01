import React from 'react';

export default React.createClass({

  render() {
    return (
      <section>
        <div>
          <h2>
            Class Name
          </h2>
          <input type="text" placeholder="Hello World" />
        </div>
        <div>
          <form>
            <input type="radio" name="frequency" value="Daily" defaultChecked />Daily
            <input type="radio" name="frequency" value="Weekly" />Weekly
            <input type="radio" name="frequency" value="Monthly" />Monthly
          </form>
        </div>
        <div>
          <input type="checkbox" name="switch" />
          <input type="text" placeholder="Room Location" />
        </div>
        <div>
          <input type="text" placeholder="Class Type" />
          <input type="text" placeholder="Maximum Age" />
        </div>
        <div>
          <input type="text" placeholder="Minimum Age" />
          <input type="text" placeholder="Max Class Size" />
        </div>
        <div>
          <p>
            Description
          </p><br />
          <textarea row="6" columns="15">
          </textarea>
        </div>
      </section>
    );
  }
})
