import styled from "styled-components";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://img.wallpapersafari.com/desktop/1536/864/80/30/5AHKJg.jpg");
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.5);
`;
const Form = styled.div`
  flex: 1;
  display: flex;

  margin: 15px 5px 0px 0px;

  flex-direction: column;
  min-width: 40%;
`;
const Title = styled.h1`
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 300px;
`;
const Input = styled.input`
  flex: 1;
  border: none;
  min-width: 43%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 30%;
  padding: 8px;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top: 8px;
`;
const Link = styled.a`
  text-decoration: underline;
  cursor: pointer;
  font-size: 15px;
  margin-top: 5px;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Form>
          <Title> SIGN IN </Title>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button> Login</Button>
          <Link> Forget your password? </Link>
          <Link> Create a new one here! </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
