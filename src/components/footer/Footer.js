import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import GithubIcon from '../icons/GitHubIcon';
import LinkedInIcon from '../icons/LinkedInIcon';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';


const styles = {
    root: {
        width: '100%',
        display: 'table-footer-group',
        paddingBottom: '10px'
    },
    contact: {
        textAlign: 'center'
    },
    links: {
        flexGrow: 1,
        display: 'inline-flex',
        paddingTop: '10px'
    },
    spacer: {
        width: '70px'
    }
};

class Footer extends Component {
    sendMail = () => {
        window.location.href = 'mailto:nplutt@gmail.com';
    };

    goToGithub = () => {
        window.open('https://github.com/nplutt');
    };

    goToLinkedIn = () => {
        window.open("https://linkedin.com/in/nickplutt");
    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.contact}>
                    <div className={classes.links}>
                        <Tooltip title="Mail">
                            <IconButton onClick={this.sendMail} color="inherit">
                                <MailIcon/>
                            </IconButton>
                        </Tooltip>
                        <div className={classes.spacer}/>
                        <Tooltip title="Github">
                            <IconButton onClick={this.goToGithub} color="inherit">
                                <GithubIcon/>
                            </IconButton>
                        </Tooltip>
                        <div className={classes.spacer}/>
                        <Tooltip title="LinkedIn">
                            <IconButton onClick={this.goToLinkedIn} color="inherit">
                                <LinkedInIcon/>
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
            </div>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Footer));
