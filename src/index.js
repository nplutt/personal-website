import React from 'react';
import {hydrate} from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MaterialConfig from './config/material';
import './index.css';
import App from './App';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme(MaterialConfig);

const router = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" render={(props) => <App {...props} component={<Home/>}/>}/>
            <Route exact path="/portfolio" render={(props => <App {...props} component={<Portfolio/>}/>)}/>
        </Switch>
    </BrowserRouter>
);

const app = (
    <MuiThemeProvider theme={theme}>
        {router}
    </MuiThemeProvider>
);

const rootElement = document.getElementById('root');
hydrate(app, rootElement);

registerServiceWorker();
