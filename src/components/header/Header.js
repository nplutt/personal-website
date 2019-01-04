import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
    root: {
        flexGrow: 1,
    },
    home: {
        cursor: 'pointer',
    },
    appBar: {
        display: 'block',
        paddingLeft: '2.5%',
        paddingRight: '2.5%'
    }
};

class Header extends Component {
    constructor(props) {
        super(props);
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

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h5" color="inherit" onClick={this.goToHome} className={classes.home}>
                            Nick Plutt
                        </Typography>
                        <div className={classes.root}/>
                        <Button color="inherit" size='medium' onClick={this.goToHome}>Home</Button>
                        <Button color="inherit" size='medium' onClick={this.goToPortfolio}>Portfolio</Button>
                        <Button color="inherit" size='medium' onClick={this.goToBlog}>Blog</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Header));
