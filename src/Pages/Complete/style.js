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
  min-height: 600px;
  padding: 10px;
  margin-top: ${(props) => (props.isLogin ? "-100px" : "0")};
  border-radius: 20px;
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  z-index: 5;
`;
export const StIsMarried = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 10px;
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

export const StDatePickerContainer = styled.div`
  width: 100%;
  padding-left: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
