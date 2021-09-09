import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Grid, List, makeStyles, Typography } from '@material-ui/core';

import Library from './Library';

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        padding: 0,
    },
    header: {
        marginBottom: 0,
    },
}));

export default function ListContainer({ books, movies }) {
    const classes = useStyles();

    let bookList;
    let movieList;
    if (books.length > 0 && movies.length > 0) {
        bookList = books.map((book) => (
            <Library key={uuidv4()} title={book.title} creator={book.author} />
        ));

        movieList = movies.map((movie) => (
            <Library
                key={uuidv4()}
                title={movie.title}
                creator={movie.director}
            />
        ));
    }

    return (
        <React.Fragment>
            <Grid
                container
                direction='row'
                justifyContent='center'
                className={classes.gridContainer}>
                <Grid item>
                    <Typography variant='h4' className={classes.header}>
                        Books
                    </Typography>
                    <List>{bookList}</List>
                </Grid>

                <Grid item>
                    <Typography variant='h4' className={classes.header}>
                        Movies
                    </Typography>
                    <List>{movieList}</List>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
