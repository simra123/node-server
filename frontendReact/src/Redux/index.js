//import store from redux
import { createStore } from 'redux';



// Action Creators
function increment() {
    return { type: 'increment' }
}

function decrement() {
    return { type: 'decrement' }
}

// Reducer / Store
const initialState = 0;
const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
};
const store = createStore(countReducer);

// HTML Elements
const counterElement = document.getElementById('counter');
const incrementer = document.getElementById('incrementer');
const decrementer = document.getElementById('decrementer');

// Store State Change Listener
const render = () => {
    counterElement.innerHTML = store.getState()
}

render()
//works like react hooks, render whenever theres a change in function 
store.subscribe(render)
// DOM Event Handlers
const incrementerClicked = () => {
    store.dispatch(increment())
}
incrementer.addEventListener('click', incrementerClicked);

const decrementerClicked = () => {
    store.dispatch(decrement())
}
decrementer.addEventListener('click', decrementerClicked);



//testing react app
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// REDUX CODE
///////////////////////////////////

const toggle = () => {
    return { type: 'toggle' }
}

const initialState = 'off';
const lightSwitchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'toggle':
            return state === 'on' ? 'off' : 'on';
        default:
            return state;
    }
}

const store = createStore(lightSwitchReducer);

// REACT CODE
///////////////////////////////////

// Pass the store's current state as a prop to the LightSwitch component.
const render = () => {
    ReactDOM.render(
        <LightSwitch
            state={ store.getState() }
        />,
        document.getElementById('root')
    )
}

render(); // Execute once to render with the initial state.
store.subscribe(render); // Re-render in response to state changes.

// Receive the store's state as a prop.
function LightSwitch(props) {
    const state = props.state;

    // Adjust the UI based on the store's current state.
    const bgColor = state === 'on' ? 'white' : 'black';
    const textColor = state === 'on' ? 'black' : 'white';

    // The click handler dispatches an action to the store.
    const handleLightSwitchClick = () => {
        store.dispatch(toggle());
    }

    return (
        <div style={ { background: bgColor, color: textColor } }>    <h4>this is a testing app!! </h4>
            <button onClick={ handleLightSwitchClick }>
                { state }
            </button>
        </div>
    )
}


