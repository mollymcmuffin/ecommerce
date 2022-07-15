import styled from "styled-components";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 1rem;
`;
const Title = styled.h1`
  font-weight: 300;
`;
const Top = styled.div``;
const Bottom = styled.div``;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Annoucement />
      <Wrapper>
        <Title>YOUR BAG</Title>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
