import React from 'react';

export default React.createClass({

  render() {
    return (
      <section className="mainContainer">
        <ul className="inputList">
          <li className="column">
            <h2>
              Class Name
            </h2>
            <input type="text" placeholder="Hello World" />
          </li>
          <li className="column">
            <form className="radio">
            <label>
                <input type="radio" name="daily" value="Daily" defaultChecked />
                Daily
              </label>
              <label>
                <input type="radio" name="weekly" value="Weekly" />
                Weekly
              </label>
              <label>
                <input type="radio" name="monthly" value="Monthly" />
                Monthly
              </label>
            </form>
          </li>
          <li className="row">
            <div className="switchBox">
              <div className="onoffswitch">
                  <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" defaultChecked />
                  <label className="onoffswitch-label" htmlFor="myonoffswitch"></label>
              </div>
              <span>Make this class private</span>
            </div>
            <input type="text" placeholder="Room Location" />
          </li>
          <li className="row">
            <input type="text" placeholder="Class Type" />
            <input type="text" placeholder="Maximum Age" />
          </li>
          <li className="row">
            <input type="text" placeholder="Minimum Age" />
            <input type="text" placeholder="Max Class Size" />
          </li>
          <li className="column">
            <label className="textareaLabel">
              Description
            </label>
            <textarea row="6" columns="15">
            </textarea>
          </li>
        </ul>
      </section>
    );
  }
})
