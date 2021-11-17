import styled from "styled-components";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import Announcement from "../components/Announcement";
import { Add, Remove } from "@material-ui/icons";
const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
`;
const ImgContainer = styled.div`
  width: 50%;
`;
const Image = styled.img`
  width: 80%;
  padding: 20px;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  width: 50%;
  margin: 20px;
`;
const Title = styled.h1`
  font-weight: 200px;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100px;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
`;
const FilterTitle = styled.span`
  font-size: 20px;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 1px 5px;
  cursor: pointer;
`;
const FilterSizeOption = styled.option``;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 8px;
`;

const AddContainer = styled.div`
  margin-top: 10px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  align-items: center;
  font-weight: 700;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.5s ease;
  &:hover {
    background-color: teal;
    color: white;
  }
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Product = () => {
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdnb.lystit.com%2Fphotos%2F2013%2F11%2F15%2Fhm-dark-blue-jumpsuit-product-1-14891898-627234792.jpeg&f=1&nofb=1" />
        </ImgContainer>

        <InfoContainer>
          <Title> BLACK JUMPSUIT </Title>
          <Desc>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            tempora ullam, ex magnam, repellendus quis eaque debitis totam
            architecto cupiditate ea possimus ipsa rerum nam, rem accusamus quas
            nesciunt assumenda.{" "}
          </Desc>
          <Price> $ 20 </Price>

          <FilterContainer>
            <Filter>
              <FilterTitle> Color </FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>

            <Filter>
              <FilterTitle> Size </FilterTitle>
              <FilterSize>
                <FilterSizeOption> XS</FilterSizeOption>
                <FilterSizeOption> S</FilterSizeOption>
                <FilterSizeOption> M </FilterSizeOption>
                <FilterSizeOption> L </FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount> 1 </Amount>
              <Add />
            </AmountContainer>
            <Button> ADD TO CART </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
