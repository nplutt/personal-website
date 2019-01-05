import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LeftNav from '../left-nav/LeftNav';

const styles = {
    root: {
        flexGrow: 1,
    },
    home: {
        cursor: 'pointer',
    },
    appBarDeskTop: {
        display: 'block',
        paddingLeft: '2.5%',
        paddingRight: '2.5%'
    },
    appBarMobile: {
        display: 'block'
    }
};

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navOpen: false,
            windowWidth: window.innerWidth
        };
    }

    goToHome = () => {
        this.props.history.push('/');
    };

    goToPortfolio = () => {
        this.props.history.push('/portfolio');
    };

    goToBlog = () => {
        this.props.history.push('/blog')
    };

    toggleMenu = () => {
        this.setState({
            navOpen: !this.state.navOpen
        });
    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.appBarDesktop}>
                    <Toolbar>
                        {this.state.windowWidth <= 650 ?
                            (
                                <IconButton onClick={this.toggleMenu} color="inherit">
                                    <MenuIcon/>
                                </IconButton>
                            ) : null}
                        <Typography variant="h5" color="inherit" onClick={this.goToHome} className={classes.home}>
                            Nick Plutt
                        </Typography>
                        <div className={classes.root}/>
                        {this.state.windowWidth > 650 ?
                            (
                                <div>
                                    <Button color="inherit" size='medium' onClick={this.goToHome}>Home</Button>
                                    <Button color="inherit" size='medium' onClick={this.goToPortfolio}>Portfolio</Button>
                                    <Button color="inherit" size='medium' onClick={this.goToBlog}>Blog</Button>
                                </div>
                            ) : null }
                    </Toolbar>
                </AppBar>
                <LeftNav navOpen={this.state.navOpen} toggleMenu={this.toggleMenu}/>
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Header));
