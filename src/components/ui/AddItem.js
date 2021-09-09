import React, { useState } from 'react';

import {
    Grid,
    Typography,
    TextField,
    InputLabel,
    Select,
    MenuItem,
    makeStyles,
    Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: '1rem',
    },
}));

export default function AddItem({ addToLibrary }) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [type, setType] = useState('book');
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addToLibrary(type, title, author);
        setType('book');
        setTitle('');
        setAuthor('');
    };

    return (
        <Grid container direction='column' alignItems='center'>
            <Grid item>
                <Typography variant='h4'>Add new item</Typography>
            </Grid>
            <Grid container alignItems='center' direction='column'>
                <form>
                    <Grid item>
                        <InputLabel id='idLabelType'>Type</InputLabel>
                        <Select
                            labelId='idLabelType'
                            id='idSelectType'
                            value={type}
                            onChange={handleTypeChange}
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}>
                            <MenuItem value={'book'}>Add Book</MenuItem>
                            <MenuItem value={'movie'}>Add Movie</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item>
                        <TextField
                            id='idTitle'
                            label='Title'
                            name='title'
                            value={title}
                            onChange={handleTitleChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id='idAuthor'
                            label={type === 'book' ? 'Author' : 'Director'}
                            value={author}
                            name='author'
                            onChange={handleAuthorChange}
                        />
                        <Grid item>
                            <Button
                                variant='contained'
                                color='primary'
                                className={classes.button}
                                onClick={handleSubmit}>
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
}
