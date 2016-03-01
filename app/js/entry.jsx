import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/index';
import ClassApp from './containers/class_app';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <ClassApp />
  </Provider>,
  document.getElementById('content')
);
