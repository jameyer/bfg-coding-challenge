import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    useScrollTrigger,
    makeStyles,
    Tabs,
    Tab,
    Button,
    SwipeableDrawer,
    List,
    ListItem,
    ListItemText,
    useMediaQuery,
    IconButton,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import menu from '../../assets/menu.svg';

const useStyles = makeStyles((theme) => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '1rem',
    },
    logo: {
        height: '5em',
        padding: '0 1rem',
    },
    logoContainer: {
        padding: 0,
        backgroundColor: 'white',
        borderRadius: 0,
        '&:hover': {
            backgroundColor: 'white',
        },
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: '2rem',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '1.5rem',
            fontSize: '.85rem',
        },
    },
    iconButton: {
        marginLeft: 'auto',
    },
}));

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

export default function Header() {
    const classes = useStyles();
    const matchesXS = useMediaQuery((theme) => theme.breakpoints.down('xs'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const [value, setValue] = useState(0);

    const handleChange = (e, value) => {
        setValue(value);
    };

    const iOS =
        typeof navigator !== 'undefined' &&
        /iPad|iPhone|iPod/.test(navigator.userAgent);

    const routes = [
        { name: 'Library', link: '/' },
        { name: 'Add', link: '/add' },
        { name: 'Directions', link: '/about' },
    ];

    useEffect(() => {
        if (window.location.pathname === '/' && value !== 0) {
            setValue(0);
        } else if (window.location.pathname === '/add' && value !== 1) {
            setValue(1);
        } else if (window.location.pathname === '/about' && value !== 2) {
            setValue(2);
        }
    }, [value]);

    const tabs = (
        <Tabs value={value} onChange={handleChange}>
            {routes.map((route) => (
                <Tab
                    className={classes.tab}
                    component={Link}
                    to={route.link}
                    label={route.name}
                    key={route.name}
                />
            ))}
        </Tabs>
    );

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer
                open={drawerOpen}
                onOpen={() => setDrawerOpen(true)}
                onClose={() => setDrawerOpen(false)}
                disableBackdropTransition={!iOS}
                //disableDiscovery={iOS}
                classes={{ paper: classes.drawer }}>
                <List disablePadding>
                    {routes.map((route, i) => (
                        <ListItem
                            key={route.name}
                            component={Link}
                            to={route.link}
                            selected={value === i}
                            divider
                            button>
                            <ListItemText
                                primary={route.name}
                                onClick={handleChange}
                            />
                        </ListItem>
                    ))}
                </List>
            </SwipeableDrawer>

            <IconButton
                className={classes.iconButton}
                onClick={() => setDrawerOpen(true)}>
                <img src={menu} alt='menu' />
            </IconButton>
        </React.Fragment>
    );

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position='fixed'>
                    <Toolbar disableGutters>
                        <Button
                            component={Link}
                            to='/'
                            disableRipple
                            onClick={() => {
                                setValue(0);
                            }}
                            className={classes.logoContainer}>
                            <img
                                src={logo}
                                alt='company logo'
                                className={classes.logo}
                            />
                        </Button>
                        {matchesXS ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    );
}
