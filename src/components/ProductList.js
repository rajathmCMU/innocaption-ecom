// ProductList.js
import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Button, Skeleton } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import axios from 'axios';
import './ProductList.css';

const { Meta } = Card;

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  return (
    <div className="product-list">
      <h1 className="product-list-title">Featured Products</h1>
      <Row gutter={[24, 24]}>
        {loading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6}>
              <Skeleton active />
            </Col>
          ))
        ) : (
          products.map((product) => (
            <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                className="product-card"
                hoverable
                cover={<img alt={product.title} src={product.thumbnail} />}
                actions={[
                  <Button
                    type="primary"
                    icon={<ShoppingCartOutlined />}
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </Button>,
                ]}
              >
		    <Meta
                  title={product.title}
                  description={
                    <div>
                      <p>{product.description}</p>
                      <p className="product-category">Category: {product.category}</p>
                      <p className="product-price">Price: ${product.price}</p>
                    </div>
                  }
                />
              </Card>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default ProductList;