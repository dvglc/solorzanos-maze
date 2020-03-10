import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import storeFactory from './store'


export const store = storeFactory()

const render = () =>
    ReactDOM.render(
        <App store={store}/>, 
        document.getElementById('solorzanos-maze')
    )  

store.subscribe(render)
render()

