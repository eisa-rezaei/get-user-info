import Button from "components/Button";
import Header from "components/Header";
import Input from "components/Input";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setStep } from "redux/userInfo/actions";
import selectors from "redux/userInfo/selectors";
import * as Yup from "yup";
import {
  StSmsContainer,
  StSmsPageContainer,
  StTimerPlaceHolder,
} from "./style";
import Timer from "./Timer";

const Code = () => {
  const [isZero, setIsZero] = useState(false);
  const state = useSelector(selectors.getStep);
  const navigate = useNavigate();
  useEffect(() => {
    if (state !== "/code") {
      navigate(`${state ? state : "/"}`);
    }
  }, [navigate, state]);

  const Random = Math.floor(Math.random() * (99999 - 10000) + 10000);
  const [randomNumber, setRandomNumber] = useState(Random);

  const initialValues = {
    number: "",
  };
  const dispatch = useDispatch();
  const onSubmit = () => {
    if (!isZero) {
      navigate("/complete");
      dispatch(setStep("/complete"));
    }
  };
  const validationSchema = Yup.object({
    number: Yup.number().required("این فیلد الزامی میباشد"),
  });

  const formik = useFormik({ initialValues, onSubmit, validationSchema });

  return (
    <StSmsPageContainer>
      <Header>کد ارسال شده به موبایل</Header>
      <StSmsContainer>
        <StTimerPlaceHolder>
          {!isZero ? (
            <Timer setIsZero={setIsZero} />
          ) : (
            <p>درصورت عدم دریافت پیامک مجددا درخواست نمایید</p>
          )}
        </StTimerPlaceHolder>
        <Input
          inputName="number"
          formik={formik}
          title="کد تایید"
          placeholder={randomNumber}
          type="number"
        />

        <Button onClick={formik.submitForm}>ارسال</Button>
        {isZero ? (
          <h3
            onClick={() => {
              setRandomNumber(Random);
              setIsZero(false);
              formik.setFieldValue("number", randomNumber);
            }}
          >
            ارسال مجدد
          </h3>
        ) : (
          <h3>کد تایید برای شما ارسال شد</h3>
        )}
      </StSmsContainer>
    </StSmsPageContainer>
  );
};

export default Code;
