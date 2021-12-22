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

export const StInputs = styled.form`
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
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & span {
    width: 120px;
    text-align: right;
    font-size: 18px;
  }
  & input {
    width: 280px;
    margin-top: 10px;
    padding: 10px;
    padding-right: 20px;
    font-size: 0.8rem;
    text-align: right;
    border: none;
    border-bottom: 3px solid #ededed;
    transition: all 0.2s linear;
    :focus,
    :hover {
      border-bottom: 3px solid #ffbb3380;
    }
  }
`;
