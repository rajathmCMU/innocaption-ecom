// Cart.js
import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, Button, CardMedia, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(items);
  }, []);

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const updateQuantity = (index, quantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = quantity;
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  return (
    <div>
      <Grid container spacing={2}>
        {cartItems.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card className="cart-item-card">
              <CardMedia
                component="img"
                height="200"
                image={item.thumbnail}
                alt={item.title}
                className="cart-item-image"
              />
              <CardContent>
                <Typography variant="h6" className="cart-item-title">{item.title}</Typography>
                <Typography variant="body2" className="cart-item-description">{item.description}</Typography>
                <Typography variant="h6" className="cart-item-price">Price: ${item.price}</Typography>
                <TextField
                  type="number"
                  label="Quantity"
                  value={item.quantity || 1}
                  onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                  inputProps={{ min: 1 }}
                  className="quantity-input"
                />
                <Button variant="contained" onClick={() => removeFromCart(index)} className="remove-from-cart-button">
                  Remove from Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" component={Link} to="/checkout" className="buy-button">
        Buy
      </Button>
    </div>
  );
};

export default Cart;