import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.solidbackgrounds.com%2Fimages%2F1920x1080%2F1920x1080-pale-pink-solid-color-background.jpg&f=1&nofb=1");
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.5);
`;
const Title = styled.h1`
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 300px;
`;
const Form = styled.div`
  flex: 1;

  justify-content: center;
  margin: 20px 10px 0px 0px;
  align-items: center;
  flex-wrap: wrap;
  min-width: 40%;
`;
const Agreement = styled.div`
  font-size: 12px;

  margin-top: 20px;
  margin-bottom: 20px;
`;
const Button = styled.button`
  width: 30%;
  padding: 8px;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Input = styled.input`
  flex: 1;

  min-width: 43%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Register = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Title> CREATE AN ACCOUNT </Title>
          <Form>
            <Input placeholder="name" />
            <Input placeholder="last name" />
            <Input placeholder="username" />
            <Input placeholder="email" />
            <Input placeholder="password" />
            <Input placeholder="confirm password" />
            <Agreement>
              {" "}
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b> PRIVACY POLICY </b>
            </Agreement>
            <Button> CREATE </Button>
          </Form>{" "}
        </Wrapper>
      </Container>
      <Link to="/">return</Link>
    </div>
  );
};

export default Register;
