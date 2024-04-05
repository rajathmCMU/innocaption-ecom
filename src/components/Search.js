// Search.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, Typography, TextField, Button, CardMedia, IconButton, Select, MenuItem } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import './Search.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/search?q=${searchTerm}`);
        const products = response.data.products;
        const filteredProducts = selectedCategory ? products.filter((product) => getCategory(product.description) === selectedCategory) : products;
        setSearchResults(filteredProducts);
      } catch (error) {
        console.error('Error searching products:', error);
      }
    };

    if (searchTerm.trim() !== '') {
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, selectedCategory]);

  const addToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  const getCategory = (description) => {
    const lowercaseDescription = description.toLowerCase();
    if (lowercaseDescription.includes('phone') || lowercaseDescription.includes('macbook')) {
      return 'Electronics';
    } else if (lowercaseDescription.includes('shirt') || lowercaseDescription.includes('dress')) {
      return 'Clothing';
    } else if (lowercaseDescription.includes('furniture')) {
      return 'Furniture';
    } else {
      return 'Others';
    }
  };

  return (
    <div>
      <TextField
        label="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        fullWidth
        margin="normal"
        className="search-input"
      />

      {/* <Select // for selecting by category.
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        displayEmpty
        className="category-select"
      >
        <MenuItem value="">All Categories</MenuItem>
        <MenuItem value="Electronics">Electronics</MenuItem>
        <MenuItem value="Clothing">Clothing</MenuItem>
        <MenuItem value="Furniture">Furniture</MenuItem>
        <MenuItem value="Others">Others</MenuItem>
      </Select> */}
      <Grid container spacing={2}>
        {searchResults.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card className="product-card">
              <CardMedia
                component="img"
                height="200"
                image={product.thumbnail}
                alt={product.title}
                className="product-image"
              />
              <CardContent>
                <Typography variant="h6" className="product-title">{product.title}</Typography>
                <Typography variant="body2" className="product-description">{product.description}</Typography>
                <Typography variant="h6" className="product-price">Price: ${product.price}</Typography>
                <IconButton onClick={() => addToCart(product)} className="add-to-cart-button">
                  <AddShoppingCart />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Search;