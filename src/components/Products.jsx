import React from "react";
import Product from "../components/Product";
import styled from "styled-components";
import { popularProducts } from "../data";
const Container = styled.div`
  margin-top: 20px;
  padding: 10px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
