import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import showdown from 'showdown';
import './gihub-markdown.css';
import Highlight from 'react-highlight'

const styles = {
    root: {
        padding: '5vh 4vw 3vh 4vw',
        maxWidth: '800px',
        margin: 'auto'
    }
};

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
        const converter = new showdown.Converter();
        let html = converter.makeHtml(text);

        this.setState({
            markdown: html
        });
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Highlight innerHTML={true}>
                    {this.state.markdown}
                </Highlight>
            </div>
        );
    }
}

BlogPost.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(BlogPost));
