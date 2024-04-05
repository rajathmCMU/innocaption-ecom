// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Search from './components/Search';
import Checkout from './components/Checkout';
import LoginPage from './components/Login';
import Signup from './components/Signup';
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
} from '@mui/material';
import { ShoppingCart, AccountCircle, Login } from '@mui/icons-material';
import './App.css';

const App = () => {
  return (
    <Router>
      <AppBar position="static" className="app-bar">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Innocaption Ecom App
          </Typography>
          <Button color="inherit" component={Link} to="/" className="nav-button">
               Products
          </Button>
          <Button color="inherit" component={Link} to="/search" className="nav-button">
            Search
          </Button>
          <IconButton color="inherit" component={Link} to="/cart" className="cart-button">
            <Badge
              badgeContent={JSON.parse(localStorage.getItem('cartItems'))?.length || 0}
              color="error"
            >
              <ShoppingCart />
            </Badge>
          </IconButton>
          <IconButton color="inherit" component={Link} to="/login" className="login-button">
            <Login />
          </IconButton>
          <IconButton color="inherit" component={Link} to="/signup" className="signup-button">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container className="app-container">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<Search />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;