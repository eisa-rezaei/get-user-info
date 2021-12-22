import styled from "styled-components";

export const StButton = styled.button`
  width: ${(props) => props.width || "300px"};
  min-height: 50px;
  margin: 10px 0;
  padding: 15px 0;
  border-radius: 10px;
  transition: all 0.3s linear;
  background-color: ${(props) => props.bgColor || "orange"};
  color: #fff;
  font-weight: 800;
  align-self: center;
  cursor: pointer;
  :hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;
