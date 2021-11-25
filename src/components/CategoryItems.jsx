import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
const Container = styled.div`
  display: block;
  padding: 20px;
  width: 70%;
  margin-left: 10%;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
`;
const Info = styled.div`
  margin-top: 10px;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  flex-direction: column;
  justify-content: center;
  display: flex;
  align-items: center;
`;
const Title = styled.h1`
  font-weight: 500px;
  font-size: 30px;
  text-transform: uppercase;
  color: white;
`;
const Button = styled.button`
  padding: 8px;
  border: none;
  background-color: white;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600px;
  box-shadow: ;
`;

const CategoryItems = ({ item }) => {
  return (
    <div>
      <Container>
        <Image src={item.img} />

        <Info>
          <Title> {item.title} </Title>
          <Button> SHOP NOW</Button>
        </Info>
      </Container>
    </div>
  );
};

export default CategoryItems;
