import React from 'react';
import './App.css';
import Grid from './Grid'
import Header from './Header'


const App = ({store}) => 
    <div className="App">
        <Header store={store} />
        <Grid store={store} />
    </div>


export default App;
