import styled from "styled-components";

export const StButton = styled.button`
  width: ${(props) => props.width || "300px"};
  height: 50px;
  margin: 30px 0;
  padding: 15px 0;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  font-weight: 800;
  align-self: center;
  justify-self: flex-end;
  transition: all 0.3s linear;
  background-color: ${(props) => props.bgColor || "orange"};
  :hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;
