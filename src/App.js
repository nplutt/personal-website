import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/home/Home';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className='app-body'>
                <Header/>
                <Home/>
            </div>
        );
    }
}

export default withRouter(App);
