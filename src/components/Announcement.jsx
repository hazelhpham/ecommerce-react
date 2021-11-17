import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 40px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500px;
`;
function Announcement() {
  return <Container> Super deal! Free shipping on Orders Over $50 </Container>;
}

export default Announcement;
