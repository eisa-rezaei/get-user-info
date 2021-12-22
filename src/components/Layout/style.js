import styled, { createGlobalStyle } from "styled-components";
import { device } from "../../screenSizes";
import font from "assets/font/font.css";

export const StLayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: center;
  background-color: #f1f1f1;
`;

export const StFormsContainer = styled.div`
  width: 450px;
  max-width: 100%;
  height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 0 20px 40px -14px rgb(70 57 32 / 17%);
`;

export const GlobalStyle = createGlobalStyle`
${font}
*,
::after,
::before{
margin: 0;
padding: 0;
box-sizing: border-box;

}
body{
    user-select: none;
    line-height: 1;
    background-color: #14152c;
    font-family: 'vazir', sans-serif;

}
::-webkit-scrollbar {
  width: 0px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}

li{
    list-style: none;
}
a {
    text-decoration: none;
    color: inherit;
}
input{
    outline: none;
    border: none;
    line-height: 1;
    font-family: inherit; 
    ::placeholder{
      color: #aaa;
    }
}
button {
    background-color: inherit;
    border: none;
    line-height: 1;
    font-family: inherit;
}

@media ${device.tablet} {
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #000000; 
}
::-webkit-scrollbar-thumb {
  background: #888; 
  border-radius: 3px;
  :hover {
  background: #aaa; 
}
}
}
`;
