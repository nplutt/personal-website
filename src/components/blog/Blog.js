import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import posts from '../../blog/posts';

const styles = theme => ({
    root: {
        padding: '5vh 4vw 0 4vw',
        maxWidth: '800px',
        margin: 'auto'
    },
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        textAlign: 'left',
        marginTop: '3vh',
        cursor: 'pointer'
    },
    date: {
        padding: '7px 0 7px 0'
    }
});

class Blog extends Component {
    formatLink = (title) => {
        return title.replace(/\s+/g, '-').toLowerCase();
    };

    render() {
        const {classes} = this.props;
        const blogPosts = posts.map((post) => {
            return (
                <Paper className={classes.paper} elevation={5} key={post.title}
                       onClick={() => {this.props.history.push(`${this.formatLink(post.title)}`);}}>
                    <Typography variant="h5" color="primary">{post.title}</Typography>
                    <Typography className={classes.date} variant="caption">{post.date}</Typography>
                    <Typography variant="body1">{post.summary}</Typography>
                </Paper>
            )
        });

        return (
            <div className={classes.root}>
                {blogPosts}
            </div>
        );
    }
}

Blog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Blog));
