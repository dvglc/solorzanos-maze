import React from 'react';
import './App.css';
import Grid from './Grid'
import Header from './Header'
import Footer from './Footer';


const App = ({store}) => 
    <div className="App">
        <Header store={store} />
        <Grid store={store} />
        <Footer />
    </div>


export default App;
