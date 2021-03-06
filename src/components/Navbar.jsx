import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 1rem;
  padding: 0.25rem;
  @media screen and (max-width: 600px) {
    width: 50%;
  }
`;

const Input = styled.input`
  border: none;
  width: 100%;
`;

const Logo = styled.h1`
  text-align: center;
  font-weight: bold;
`;

const MenuItem = styled.div`
  font-size: 1rem;
  cursor: pointer;
  margin-left: 1.5rem;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: "1rem" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Z&X</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
