import styled from "styled-components";

export const StHomeContainer = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StHomeHeader = styled.div`
  width: 100%;
  min-height: 70px;
  padding: 0px 20px;
  text-align: center;
  line-height: 70px;
  background-color: orange;
`;

export const StLoginPageLoginInputs = styled.form`
  width: 100%;
  min-height: 650px;
  padding: 10px 25px;
  border-radius: 20px;
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;
export const StIsMale = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & svg {
    width: 30px;
    height: 28px;
    color: #fff;
    cursor: pointer;
  }
`;
