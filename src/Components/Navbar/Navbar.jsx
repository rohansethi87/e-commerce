import React from 'react';
import { ShoppingCart } from '@material-ui/icons';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import logo from '../../assets/siu-logo-image.png';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();

    return (
        <>
            <AppBar className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="swagitup-logo" height="25px" className={classes.image} />
                        Swagitup
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
