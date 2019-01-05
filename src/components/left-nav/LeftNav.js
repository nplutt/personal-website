import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {withRouter} from "react-router-dom";

const styles = {
    root: {
        width: '250px'
    },
    list: {
        padding: 0
    }
};

class LeftNav extends React.Component {
    render() {
        const {classes} = this.props;

        return (
            <Drawer open={this.props.navOpen} onClose={this.props.toggleMenu}>
                <div className={classes.root} onClick={this.props.toggleMenu}>
                    <List className={classes.list} component="nav">
                        <ListItem button onClick={() => { this.props.history.push('/') }}>
                            <ListItemText primary="Home"/>
                        </ListItem>
                        <Divider/>
                        <ListItem button onClick={() => { this.props.history.push('/portfolio') }}>
                            <ListItemText primary="Portfolio"/>
                        </ListItem>
                        <Divider/>
                        <ListItem button onClick={() => { this.props.history.push('/blog') }}>
                            <ListItemText primary="Blog"/>
                        </ListItem>
                        <Divider/>
                    </List>
                </div>
            </Drawer>
        );
    }
}

LeftNav.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(LeftNav));