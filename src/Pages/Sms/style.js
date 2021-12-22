import styled from "styled-components";

export const StSmsPageContainer = styled.div`
  width: 100%;
  min-height: 750px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const StSmsContainer = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 100px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const StTimerPlaceHolder = styled.div`
  width: 100%;
  height: 60px;
  & > p {
    text-align: center;
    font-size: 0.8rem;
  }
`;
