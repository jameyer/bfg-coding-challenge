import React from 'react';
import { ListItem, ListItemText, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    title: {
        width: '20rem',
        margin: '0',
    },
}));

export default function Movies({ title, creator }) {
    const classes = useStyles();
    return (
        <ListItem className={classes.listItem}>
            <ListItemText
                primary={title}
                className={classes.title}
                secondary={creator}
            />
        </ListItem>
    );
}
