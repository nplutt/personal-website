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
    bottom: {
        marginBottom: '3vh'
    }
});

class Home extends Component {
    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Paper className={classes.paper} elevation={5}>
                    <Typography variant="h4" color="primary">About Me</Typography>
                    <div>
                        <p>
                            My name is Nick Plutt, I'm a passionate full stack software engineer currently living in
                            Minneapolis Minnesota. Although my background is as a full stack engineer, I'm currently
                            exploring the DevOps space and working at Medtronic as a DevOps engineer.
                        </p>
                        <p>
                            Upon graduating from Iowa State University with a degree in Software Engineering,
                            I started my career working at Dupont Pioneer. During my time there I worked on multiple
                            projects, the largest of which was the successful rewrite and migration of an enterprise
                            level SASS application called Encirca. For majority of the Encirca rewrite I worked as
                            a technical lead and spent most of my time designing and building serverless
                            microservices, leading whiteboards, and working with product owners to define user stories.
                        </p>
                        <p>
                            After spending two and a half years working at a large company with hundreds of
                            engineers I decided to join ViewX, a small 5 person startup based out of New York City.
                            At ViewX I worked as a senior full stack engineer where I did everything from CSS, HTML,
                            & React on the front end, built out APIs using Flask on the backend, and managed all
                            of the AWS infrastructure. Working in a fast paced startup environment was one of the most
                            enjoyable and exciting jobs I've had to date.
                        </p>
                        <p>
                            Outside of work you can usually find me either working on a project, reading,
                            biking or running around Minneapolis, crying about the Vikings, or attempting to cook.
                        </p>
                    </div>
                </Paper>

                <Paper className={`${classes.paper} ${classes.bottom}`} elevation={5}>
                    <Typography variant="h4" color="primary">Favorite Software</Typography>
                    <div>
                        <p>
                            Below is a list of libraries, frameworks and other software that I prefer and regularly use.
                            Although I have software that I prefer to use, I'm a true believer in using the best tool
                            for the job, and will never try to pound a square peg into a round hole.
                        </p>
                        <div>Web App Framework: Flask</div>
                        <div>Serverless Framework: Chalice</div>
                        <div>Linux Distro: Ubuntu</div>
                        <div>Cloud Environment: AWS</div>
                        <div>Infrastructure Orchestration: Terraform</div>
                        <div>Configuration Management: Ansible</div>
                        <div>Relational Database: PostgreSQL</div>
                        <div>SQL ORM: SQLAlchemy with Alembic</div>
                    </div>
                </Paper>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Home));
