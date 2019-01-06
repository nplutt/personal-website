import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        padding: '0 4vw 0 4vw',
        maxWidth: '800px',
        margin: 'auto'
    },
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        textAlign: 'left',
        marginTop: '5vh'
    },
    body: {
        paddingTop: '10px'
    },
    bottom: {
        marginBottom: '3vh'
    }
});

class Portfolio extends Component {
    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Paper className={classes.paper} elevation={5}>
                    <Typography variant="h4" color="primary">Open Source Projects</Typography>
                    <div className={classes.body}>
                        <li>
                            <a href="https://github.com/aws/chalice">Chalice:</a> AWS's Python based serverless
                            microservice framework. Chalice is a command line tool for creating, maintaining,
                            and deploying serverless applications.
                        </li>
                        <li>
                            <a href="https://github.com/nplutt/chalice-test-examples">Chalice Test Examples:</a> A guide
                            that I wrote on how to write both unit and integration tests for applications written using
                            the Chalice framework.
                        </li>
                    </div>
                </Paper>
                <Paper className={`${classes.paper} ${classes.bottom}`} elevation={5}>
                    <Typography variant="h4" color="primary">Applications</Typography>
                    <div className={classes.body}>
                        <li>
                            <a href="https://apiload.io">APILoad.io:</a> A cloud native SASS platform for load testing
                            applications. APILoad was created out of frustration with the lack of value provided by all
                            of the current SASS based load testing solutions. Many of the current solutions have
                            subscription based pricing models with limits on the number on the number of tests that can
                            be run, which I found to provide low value for the price. APILoad
                            breaks from these current pricing models and uses per user minute based pricing,
                            which allows users to only pay for the tests that they run.
                        </li>
                        <li>
                            <a href="https://github.com/nplutt/contacts">Contacts:</a> A rather primitive application
                            which allows the user to upload a CSV with user contact details to an RDS database. From
                            there the exposed API allows users to look up contact information by any field, for example
                            you could look up all users that live in the state of Minnesota or that have a last name of
                            Smith.
                        </li>
                    </div>
                </Paper>
            </div>
        );
    }
}

Portfolio.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Portfolio));
