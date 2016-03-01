import * as types from './../constants/action_types';

const initialState = {
  name: 'Hello World',
  isPrivate: true,
  frequency: 'daily',
  roomLocation: '',
  classType: '',
  maxAge: '',
  minAge: '',
  description: ''
};

export default function(state = initialState, action) {

  switch(action.type) {

    default:
      return state;
  }
}
