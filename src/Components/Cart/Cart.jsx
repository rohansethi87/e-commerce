import React from 'react';
import { Container, Grid, Typography, Button} from '@material-ui/core';

const Cart = ({ cart }) => {
    console.log(cart.line_items.length);
    // const isEmpty = cart.line_items.length;
    // const isEmpty = true;

    const EmptyCart = () => {
        <Typography variant="subtitle1">You have no items in your shopping cart, start adding some!</Typography>
    };

    const FilledCart = () => {
        <>
            <Grid container spacing={3}>

            </Grid>
        </>
    }

    return (
        <Container>
            <div className="classes.toolbar" />
            <Typography className="classes.title" variant="h3">Your Shopping Cart</Typography>
            {/* {isEmpty ? <EmptyCart />: <FilledCart />} */}
        </Container>
    )
}

export default Cart;