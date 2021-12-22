import styled from "styled-components";

export const StFromControlContainer = styled.div`
  width: 100%;
  min-height: 80px;
  & p {
    font-size: 12px;
    margin-left: 30px;
    color: #ff9090;
    margin-top: 15px;
    align-self: flex-start;
  }
`;

export const StInputFromControl = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: center;

  & label {
    width: 120px;
    text-align: right;
  }
`;

export const StInput = styled.input`
  width: 300px;
  margin-top: 10px;
  padding: 10px;
  padding-right: 20px;
  text-align: right;
  border-bottom: 3px solid #ededed;
  transition: all 0.2s linear;
  :focus,
  :hover {
    border-bottom: 3px solid #ffbb3380;
  }
`;
