import React from "react";
import { Send } from "@material-ui/icons";

import styled from "styled-components";
const Container = styled.div`
  display: flex;
  height: 20vh;
  background-color: #fcfcf5;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-weight: 500px;
  font-size: 50px;
`;
const Description = styled.div`
  font-size: 22px;
  font-weight: 200px;
`;
const InputContainer = styled.div`
  margin-top: 10px;
  width: 40%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  border: 1px solid lightgray;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter </Title>
      <Description>
        {" "}
        Get timely updates from your favorite products.{" "}
      </Description>
      <InputContainer>
        <Input placeholder="Your email is ..." />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
