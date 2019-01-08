import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import { Animate } from "react-show";
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
            loaded: false,
            markdown: null
        }
    }

    async componentDidMount() {
        const blogPost = this.props.location.pathname.split('/').pop();

        const readme = await fetch(`/blog-posts/${blogPost}.md`);
        const text = await readme.text();
        const converter = new showdown.Converter({headerLevelStart: 4});
        let html = converter.makeHtml(text);

        this.setState({
            loaded: true,
            markdown: html
        });
    }

    render() {
        const {classes} = this.props;
        console.log(this.state.loaded);
        return (
            <div className={`${classes.root} blog-post`}>
                <Animate show={this.state.loaded} duration={500} style={{height: 'auto', overflow: 'hidden'}}
                         transitionOnMount
                         stayMounted
                         start={{height: 0}}>
                    <Paper className={classes.paper} elevation={5}>
                        {/*<h1>Hello World</h1>*/}
                        <Highlight innerHTML={true}>
                            {this.state.markdown}
                        </Highlight>
                    </Paper>
                </Animate>
            </div>
        );
    }
}

BlogPost.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(BlogPost));
