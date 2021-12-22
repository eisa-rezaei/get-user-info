import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Switch from "react-switch";
import { GiDoorRingHandle } from "react-icons/gi";
import api from "api/contacts";

import {
  StDatePickerContainer,
  StHomeContainer,
  StInputs,
  StIsMarried,
} from "./style";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { completeUsersInfo, setStep } from "../../redux/userInfo/actions";
import selectors from "redux/userInfo/selectors";
import BirthdayDatePicker from "components/DatePicker";

const Complete = () => {
  const state = useSelector(selectors.getStep);
  const userInfo = useSelector(selectors.getUser);
  const [selectedBirthdayDay, setSelectedBirthdayDay] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    if (state !== "/complete") {
      navigate(`${state ? state : "/"}`);
    }
  }, [navigate, state]);

  const [isMarried, setIsMarried] = useState(false);
  const dispatch = useDispatch();
  const initialValues = {
    fatherName: "",
    homeNumber: "",
    birthdayPlace: "",
    isMarried: false,
  };
  const birthdayDate = `${selectedBirthdayDay?.year}/${selectedBirthdayDay?.month}/${selectedBirthdayDay?.day}`;
  const onSubmit = async (values) => {
    dispatch(
      completeUsersInfo({
        ...values,
        birthday: birthdayDate,
      })
    );
    dispatch(setStep("/profile"));
    await api.post("/user", {
      ...userInfo,
      birthday: birthdayDate,
      ...values,
    });
    navigate("/profile");
  };
  const validationSchema = Yup.object({
    fatherName: Yup.string().required("این فیلد الزامی میباشد"),
    homeNumber: Yup.string()
      .matches(/[\d]/, "فقط اعداد در این فیلد قابل استفاده است")
      .min(10, "تعداد ارقام وارده کمتر از ده عدد میباشد")
      .max(12, "تعداد ارقام وارده بیشتر از دوازده عدد میباشد")
      .required("این فیلد الزامی میباشد"),
    birthdayPlace: Yup.string().required("این فیلد الزامی میباشد"),
  });

  const formik = useFormik({ initialValues, onSubmit, validationSchema });

  const formIsInputHandler = (checked) => {
    formik.setFieldValue("isMarried", checked);
    setIsMarried(!isMarried);
  };

  return (
    <StHomeContainer>
      <Header>تکمیل اطلاعات</Header>
      <StInputs onSubmit={formik.handleSubmit}>
        <StDatePickerContainer>
          <BirthdayDatePicker
            selectedDay={selectedBirthdayDay}
            setSelectedDay={setSelectedBirthdayDay}
          />
          <span>: تاریخ تولد</span>
        </StDatePickerContainer>
        <Input
          placeholder="نام پدر"
          inputName="fatherName"
          formik={formik}
          title="نام پدر"
        />
        <Input
          inputName="homeNumber"
          formik={formik}
          title="شماره منزل"
          placeholder="021123412345"
          type="text"
        />
        <Input
          inputName="birthdayPlace"
          formik={formik}
          title="محل تولد"
          placeholder="تهران"
          type="text"
        />

        <StIsMarried>
          <Switch
            checked={isMarried}
            onChange={formIsInputHandler}
            offColor="#ff5555"
            onColor="#55aa55"
            checkedIcon={<GiDoorRingHandle />}
            uncheckedIcon={<GiDoorRingHandle />}
          />
          وضعیت تاهل
        </StIsMarried>

        <Button type="submit">ثبت</Button>
      </StInputs>
    </StHomeContainer>
  );
};

export default Complete;
