import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Highlight from 'react-highlight';
import showdown from 'showdown';
import './BlogPost.css'

const styles = theme => ({
    root: {
        padding: '0vh 4vw 3vh 4vw',
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
});

class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: null
        }
    }

    async componentDidMount() {
        const blogPost = this.props.location.pathname.split('/').pop();

        const readme = await fetch(`/blog-posts/${blogPost}.md`);
        const text = await readme.text();
        const converter = new showdown.Converter({headerLevelStart: 4});
        let html = converter.makeHtml(text);
        console.log(html);

        this.setState({
            markdown: html
        });
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={`${classes.root} blog-post`}>
                <Paper className={classes.paper} elevation={5}>
                    <Highlight innerHTML={true}>
                        {this.state.markdown}
                    </Highlight>
                </Paper>
            </div>
        );
    }
}

BlogPost.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(BlogPost));
