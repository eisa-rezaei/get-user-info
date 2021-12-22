import { GlobalStyle, StFormsContainer, StLayoutContainer } from "./style";

const Layout = ({ children }) => {
  return (
    <StLayoutContainer>
      <StFormsContainer>{children}</StFormsContainer>
      <GlobalStyle />
    </StLayoutContainer>
  );
};

export default Layout;
