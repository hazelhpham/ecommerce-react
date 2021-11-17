import styled from "styled-components";
import {
  Facebook,
  Instagram,
  Twitter,
  Pinterest,
  Mail,
  Map,
  Phone,
} from "@material-ui/icons";
const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const Description = styled.div`
  font-size: 18px;
  font-weight: 200px;
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  background-color: #${(props) => props.color};
`;

const Title = styled.h3`
  margin-bottom: 30px;
  padding: 0;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 25px;
`;
const ContactItem = styled.li`
  padding: 0;
  list-style: none;
  display: flex;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LAMA</Logo>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          dicta ratione eveniet ex veniam dolore tenetur iure explicabo ipsa
          adipisci illo optio, odio officia minima quis temporibus corporis
          dolor minus.{" "}
        </Description>

        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>

          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>

          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>

          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title> Useful Links </Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title> Contact </Title>
        <ContactItem>
          {" "}
          <Map style={{ marginRight: "10px" }} /> 622 Dixie Path,South Wales
          6849
        </ContactItem>
        <ContactItem>
          {" "}
          <Phone style={{ marginRight: "10px" }} /> +1 234 567
        </ContactItem>
        <ContactItem>
          {" "}
          <Mail style={{ marginRight: "10px" }} /> contact@lama.co
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
