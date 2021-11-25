import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { MailIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
const Container = styled.div`
  height: 60px;
  ${mobile({
    height: "50px",
  })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    padding: "10px 0px",
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    flex: "2",
    justifyContent: "center",
  })}
`;
const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({
    display: "none",
  })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({
    width: "50px",
  })}
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({
    fontSize: "24px",
  })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  padding: 10px;
  cursor: pointer;
  justify-content: space-between;
  ${mobile({
    fontSize: "12px",
    marginLeft: "10px",
  })}
`;
// const Link = styled.a`
//   text-decoration: underline;
//   cursor: pointer;
//   font-size: 15px;
//   margin-top: 5px;
// `;

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          {" "}
          <Language> EN </Language>{" "}
          <SearchContainer>
            <Search style={{ color: "gray", fontSize: 16 }} />
            <Input placeholder="search.." />
          </SearchContainer>{" "}
        </Left>
        <Center>
          {" "}
          <Link to="/">
            {" "}
            <Logo> LAMA </Logo>{" "}
          </Link>
        </Center>
        <Right>
          {" "}
          <MenuItem>
            {" "}
            <Link to="/register"> REGISTER </Link>{" "}
          </MenuItem>{" "}
          <Link to="/log-in">
            {" "}
            <MenuItem> SIGN IN </MenuItem>{" "}
          </Link>{" "}
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <Link to="/cart">
                {" "}
                <ShoppingCartOutlined />{" "}
              </Link>{" "}
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
