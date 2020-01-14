import React from 'react';
import './App.css';
import Grid from './Grid'
import Header from './Header'
import Footer from './Footer';
import PopUp from './PopUp';

const App = ({store}) => 
    <div className="App">
        <Header store={store} />
        <Grid store={store} />
        <Footer store={store} />
        <PopUp store={store} />
    </div>


export default App;
