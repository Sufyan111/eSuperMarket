import React from 'react';
import { ProductList } from './ProductList';
import { TopNav } from './TopNav';
import "./Product.css";

export const Home = () => {
  return (
    <div>
      <TopNav />
      <ProductList />
    </div>
  );
};
