import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className='app-body'>
                <Header/>
                <div className='component'>
                    {this.props.component}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(App);
