import React from 'react';
import {
    makeStyles,
    Typography,
    Grid,
    List,
    ListItem,
    Divider,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    headerContainer: {
        marginBottom: '1rem',
    },
    header: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '2rem',
        },
    },
}));

export default function CodeChallenge() {
    const classes = useStyles();
    return (
        <Grid container direction='row'>
            <Grid item className={classes.headerContainer}>
                <Typography
                    variant='h3'
                    color='primary'
                    className={classes.header}>
                    # Coding Exercise
                </Typography>
                <Divider />
            </Grid>

            <Grid item>
                <Typography variant='body1'>
                    The exercise will be the creation of a single page web app
                    that displays a list of books and movies. The user should be
                    able to add either a new book or a new movie and have the
                    display updated. This should be done through ajax.
                </Typography>
            </Grid>
            <Grid item>
                <List>
                    <ListItem>
                        <Typography>
                            The data will be stored in a file named data.json,
                            which should be read to populate the form.
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>
                            The user interface can be whatever design you wish.
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>
                            The use of a dependency injection framework is
                            preferable.
                        </Typography>
                    </ListItem>

                    <ListItem>
                        <Typography>
                            Feel free to use any JavaScript libraries, or NuGet
                            packages you wish to complete the exercise.
                        </Typography>
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    );
}
