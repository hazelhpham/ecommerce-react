import styled from "styled-components";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Announcement from "../components/Announcement";
import NewsLetter from "../components/NewsLetter";
import { mobile } from "../responsive";
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ padding: "0px 20px", display: "flex", flexDirection: "column" })}
`;
const Title = styled.h1`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <div>
      <NavBar />
      <Announcement />
      <Container>
        <Title> Dresses </Title>

        <FilterContainer>
          <Filter>
            {" "}
            <FilterText> Filter Products: </FilterText>{" "}
            <Select>
              {" "}
              <Option disabled selected>
                {" "}
                Color{" "}
              </Option>{" "}
              <Option> White</Option> <Option> Black</Option>{" "}
              <Option> Red</Option> <Option> Blue </Option>{" "}
              <Option> Yellow</Option>
              <Option> Green </Option>{" "}
            </Select>
            <Select>
              {" "}
              <Option disabled selected>
                {" "}
                Size{" "}
              </Option>{" "}
              <Option> XS</Option> <Option> S</Option> <Option> M</Option>{" "}
              <Option> L </Option> <Option> XL</Option>{" "}
            </Select>
          </Filter>
          <Filter>
            {" "}
            <FilterText> Sort Products: </FilterText>
            <Select>
              {" "}
              <Option> Newest </Option> <Option> Price (asc)</Option>{" "}
              <Option> Price (desc) </Option>{" "}
            </Select>
          </Filter>
        </FilterContainer>

        <Products />
        <NewsLetter />
        <Footer />
      </Container>
    </div>
  );
};

export default ProductList;
