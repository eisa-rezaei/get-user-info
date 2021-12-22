import { StFromControlContainer, StInput, StInputFromControl } from "./style";

const Input = ({ formik, inputName, title, placeholder, type = "text" }) => {
  return (
    <StFromControlContainer>
      <StInputFromControl>
        <label htmlFor={inputName}>: {title}</label>
        <StInput
          type={type}
          id={inputName}
          name={inputName}
          placeholder={placeholder}
          {...formik.getFieldProps(inputName)}
        />
      </StInputFromControl>
      {formik.touched[inputName] && formik.errors[inputName] && (
        <p>{formik.errors[inputName]}</p>
      )}
    </StFromControlContainer>
  );
};

export default Input;
