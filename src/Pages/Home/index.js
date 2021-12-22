import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Switch from "react-switch";
import { v4 as uuidv4 } from "uuid";
import { BiFemale, BiMale } from "react-icons/bi";

import { StHomeContainer, StIsMale, StLoginPageLoginInputs } from "./style";
import Header from "../../components/Header";
import { useDispatch } from "react-redux";
import { setStep, setUser } from "../../redux/userInfo/actions";

const Home = () => {
  const [isMale, setIsMale] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    lastName: "",
    mobile: "",
    nationalCode: "",
  };
  const onSubmit = (values) => {
    dispatch(
      setUser({
        ...values,
        id: uuidv4(),
        isMale: isMale,
        AddTime: new Date().toISOString(),
      })
    );
    dispatch(setStep("/code"));
    navigate("/code");
  };

  const checkCodeMelli = function () {
    const { nationalCode: input } = this.parent;

    if (!input || input?.toString().length === 0) return true;
    if (!/^\d{10}$/.test(input)) return false;
    const check = +input[9];
    const sum =
      Array.from({ length: 9 })
        .map((_, i) => +input[i] * (10 - i))
        .reduce((x, y) => x + y) % 11;
    return (sum < 2 && check === sum) || (sum >= 2 && check + sum === 11);
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/[^\d][^۰-۹]/, "فقط حروف الفبا در این فیلد قابل استفاده است")
      .required("این فیلد الزامی میباشد"),
    lastName: Yup.string()
      .matches(/[^\d][^۰-۹]/, "فقط حروف الفبا در این فیلد قابل استفاده است")
      .required("این فیلد الزامی میباشد"),
    mobile: Yup.string()
      .matches(/^(\+98|0)?9\d{9}$/, "شماره تلفن وارده درست نمیباشد")
      .required("این فیلد الزامی میباشد"),
    nationalCode: Yup.string()
      .length(10, "تعداد ارقام وارده صحیح نمی باشد")
      .test(
        "کد ملی وارد شده درست نیست",
        "کد ملی وارد شده نیست",
        checkCodeMelli
      ),
  });

  const formik = useFormik({ initialValues, onSubmit, validationSchema });

  const formIsInputHandler = (checked) => {
    formik.setFieldValue("isMale", checked);
    setIsMale(!isMale);
  };

  return (
    <StHomeContainer>
      <Header>اطلاعات اولیه</Header>
      <StLoginPageLoginInputs onSubmit={formik.handleSubmit}>
        <Input placeholder="نام" inputName="name" formik={formik} title="نام" />
        <Input
          placeholder="نام خانوادگی"
          inputName="lastName"
          formik={formik}
          title="نام خانوادگی"
          type="text"
        />
        <Input
          inputName="mobile"
          formik={formik}
          title="شماره موبایل"
          placeholder="09111234567"
          type="text"
        />
        <Input
          inputName="nationalCode"
          formik={formik}
          title="کد ملی"
          placeholder="1451234567"
          type="number"
        />
        <StIsMale>
          <Switch
            checked={isMale}
            onChange={formIsInputHandler}
            offColor="#ff66ff"
            onColor="#636364"
            checkedIcon={<BiMale />}
            uncheckedIcon={<BiFemale />}
          />
          جنسیت
        </StIsMale>
        <Button type="submit">ثبت</Button>
      </StLoginPageLoginInputs>
    </StHomeContainer>
  );
};

export default Home;
