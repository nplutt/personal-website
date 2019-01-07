import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import marked from 'marked';

const styles = {
    root: {
        padding: '5vh 4vw 0 4vw',
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
        console.log(text);
        this.setState({
            markdown: marked(text)
        });

    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <article dangerouslySetInnerHTML={{__html: this.state.markdown}}/>
            </div>
        );
    }
}

BlogPost.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(BlogPost));
