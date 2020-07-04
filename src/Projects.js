import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import adam from './static/adam.jpg';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const renderFooterChildren = (footerChildren) => {
    if (Array.isArray(footerChildren)) {
        return footerChildren.map(({ props, label, icon }) => (
            <React.Fragment key={label}>
                <Button {...props} >
                    {label}
                    {icon}
                </Button>
            </React.Fragment>
        ));
    } else if (typeof footerChildren === 'object') {
        return (
            <React.Fragment key={footerChildren.label}>
                <Button {...footerChildren.props} >
                    {footerChildren.label}
                    {footerChildren.icon}
                </Button>
            </React.Fragment>
        )
    }
    return null;
};

const ProjectCard = ({
    title,
    description,
    footerChildren,
}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={adam}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="span">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {renderFooterChildren(footerChildren)}
            </CardActions>
        </Card>
    )
};

const Projects = (props) => {

    const footerChildren = [{
        label: 'label test',
        props: {
            size: 'small',
            color: 'primary',
        },
        icon: null,
    }];

    return (
        <div>
            <ProjectCard
                footerChildren={footerChildren}
                title="Project 1 Title"
                description="project 1 description here"
            />
        </div>
    );
};

export default Projects;
