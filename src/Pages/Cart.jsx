import styled from "styled-components";
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  letter-spacing: 3px;
  font-weight: 500px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600px;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: none;
  cursor: pointer;
  margin: 0px 10px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-top: 10px;
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductID = styled.span``;
const ProductName = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const ProductAmountContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px", fontSize: "16px" })}
`;
const ProductPrice = styled.div`
  font-size: 30px;

  font-weight: 200px;
  ${mobile({ margin: "5px 15px", fontSize: "22px" })}
`;

const Hr = styled.hr`
  background-color: #eee;

  height: 1;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200px;
`;
const SummaryItem = styled.div`
  padding: 8px;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "900"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemPrice = styled.span``;
const SummaryItemText = styled.span``;
const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <div>
      <Container>
        <NavBar />
        <Announcement />

        <Wrapper>
          <Title> YOUR BAG </Title>
          <Top>
            <Link to="/">
              {" "}
              <TopButton type="filled"> CONTINUE SHOPPING </TopButton>{" "}
            </Link>
            <TopTexts>
              <TopText>
                {" "}
                Shopping Bag(<b>1</b>).{" "}
              </TopText>
              <TopText>
                {" "}
                Your wishlist(<b>0</b>).{" "}
              </TopText>
            </TopTexts>

            <TopButton>CHECK OUT NOW </TopButton>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProductDetail>
                  <Image src="https://cdnb.lystit.com/photos/0d24-2015/01/21/bottega-veneta-blue-olimpia-woven-snakeskin-shoulder-bag-product-1-27152676-1-302026591-normal.jpeg" />

                  <Details>
                    <ProductName>
                      {" "}
                      <b> Product: </b>Bottega Veneta Bag{" "}
                    </ProductName>

                    <ProductID>
                      {" "}
                      <b> ID: </b> 9657585224{" "}
                    </ProductID>
                    <ProductColor color="gray" />

                    <ProductSize>
                      {" "}
                      <b> Size: </b> Medium{" "}
                    </ProductSize>
                  </Details>
                </ProductDetail>

                <PriceDetail>
                  {" "}
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>
                      {" "}
                      <b> 2</b>{" "}
                    </ProductAmount>
                    <Remove />{" "}
                  </ProductAmountContainer>
                  <ProductPrice>$ 4020</ProductPrice>
                </PriceDetail>
              </Product>
              <Hr />
              <Product>
                <ProductDetail>
                  <Image src="https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/76/P00400436.jpg" />

                  <Details>
                    <ProductName>
                      {" "}
                      <b> Product: </b>Bottega Veneta Shoes{" "}
                    </ProductName>

                    <ProductID>
                      {" "}
                      <b> ID: </b> 9659852{" "}
                    </ProductID>
                    <ProductColor color="black" />

                    <ProductSize>
                      {" "}
                      <b> Size: </b> 38{" "}
                    </ProductSize>
                  </Details>
                </ProductDetail>

                <PriceDetail>
                  {" "}
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>
                      {" "}
                      <b> 1 </b>{" "}
                    </ProductAmount>
                    <Remove />{" "}
                  </ProductAmountContainer>
                  <ProductPrice>$ 900</ProductPrice>
                </PriceDetail>
              </Product>
            </Info>
            <Summary>
              {" "}
              <SummaryTitle> ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice> $4920</SummaryItemPrice>
              </SummaryItem>{" "}
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice> $5.9</SummaryItemPrice>
              </SummaryItem>{" "}
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice> -$5.9 </SummaryItemPrice>
              </SummaryItem>{" "}
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice> $4920</SummaryItemPrice>
              </SummaryItem>{" "}
              <SummaryButton> Check out </SummaryButton>
            </Summary>
          </Bottom>
        </Wrapper>

        <NewsLetter />
        <Footer />
      </Container>
    </div>
  );
};

export default Cart;
