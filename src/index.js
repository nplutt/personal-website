import React from 'react';
import {hydrate} from 'react-dom';
import {Router, Route, Switch} from 'react-router-dom';
import ReactGA from 'react-ga';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import createBrowserHistory from 'history/createBrowserHistory'
import MaterialConfig from './config/material';
import './index.css';
import App from './App';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Blog from './components/blog/Blog';
import BlogPost from './components/blog-post/BlogPost';
import registerServiceWorker from './registerServiceWorker';


const history = createBrowserHistory();
ReactGA.initialize('UA-114679798-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
});

const theme = createMuiTheme(MaterialConfig);

const router = (
    <Router history={history}>
        <Switch>
            <Route exact path="/" render={(props) => <App {...props} component={<Home/>}/>}/>
            <Route exact path="/portfolio" render={(props => <App {...props} component={<Portfolio/>}/>)}/>
            <Route exact path="/blog" render={(props => <App {...props} component={<Blog/>}/>)}/>
            <Route path="/blog/:id" render={(props => <App {...props} component={<BlogPost/>}/>)}/>
        </Switch>
    </Router>
);

const app = (
    <MuiThemeProvider theme={theme}>
        {router}
    </MuiThemeProvider>
);

const rootElement = document.getElementById('root');
hydrate(app, rootElement);

registerServiceWorker();
