import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';

const initialState = {
  count: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_A':
      return {...state, count: state.count +1}
    case 'DECREMENT_A':
      return {...state, count: state.count -1}
      case 'INCREMENT_B':
      return {...state, count: state.count +5}
    case 'DECREMENT_B':
      return {...state, count: state.count -5}
      case 'INCREMENT_C':
        return {...state, count: state.count +10}
      case 'DECREMENT_C':
        return {...state, count: state.count -10}
    case 'RESET':
      return {...state, count: state.count = 0}
    default:
      return state;
  }
}

const store = createStore(reducer);

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement_A: () => dispatch({type: 'INCREMENT_A'}), 
    onDecrement_A: () => dispatch({type: 'DECREMENT_A'}),
    onIncrement_B: () => dispatch({type: 'INCREMENT_B'}), 
    onDecrement_B: () => dispatch({type: 'DECREMENT_B'}),
    onIncrement_C: () => dispatch({type: 'INCREMENT_C'}), 
    onDecrement_C: () => dispatch({type: 'DECREMENT_C'}),
    onReset: () => dispatch({type: 'RESET'}),
  }
}

const Counter = ({count, onIncrement_A, onDecrement_A, onIncrement_B, onDecrement_B, onIncrement_C, onDecrement_C, onReset}) => (
  <div>
     <h1>{count}</h1>
        <button onClick={onIncrement_A}>+1</button>
        <button onClick={onReset}>Reset</button>
        <button onClick={onDecrement_A}>-1</button>
        <p></p>
        <button onClick={onIncrement_B}>+5</button>
        <button onClick={onReset}>Reset</button>
        <button onClick={onDecrement_B}>-5</button>
        <p></p>
        <button onClick={onIncrement_C}>+10</button>
        <button onClick={onReset}>Reset</button>
        <button onClick={onDecrement_C}>-10</button>
  </div>
);

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)

ReactDOM.render(
    <Provider store={store}>
    <ConnectedCounter />
    </Provider>,
    document.getElementById('root')
  )