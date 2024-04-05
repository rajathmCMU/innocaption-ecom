// Checkout.js
import React from 'react';
import { Typography } from '@mui/material';
import './Checkout.css';

const Checkout = () => {
return (
<div className="checkout-container">
<Typography variant="h4" className="success-message">
Purchase Successful!
</Typography>
<Typography variant="body1" className="thank-you-message">
Thank you for your purchase.
</Typography>
</div>
);
};

export default Checkout;