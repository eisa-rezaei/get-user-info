import Button from "components/Button";
import Header from "components/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import selectors from "../../redux/userInfo/selectors";
import { StProfileContainer, StProfileSingleDetail } from "./style";
import api from "api/contacts";
import { reSetValues } from "redux/userInfo/actions";

const Profile = () => {
  const state = useSelector(selectors.getStep);
  const userInfo = useSelector(selectors.getUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (state !== "/profile") {
      navigate(`${state ? state : "/"}`);
    }
  }, [navigate, state]);

  const startOverHandler = async () => {
    await api.post("/user", {});
    dispatch(reSetValues());
  };

  return (
    <StProfileContainer>
      <Header>پروفایل</Header>
      <StProfileSingleDetail>
        {userInfo.name}&nbsp;
        <span>: نام</span>
      </StProfileSingleDetail>
      <StProfileSingleDetail>
        {userInfo.lastName}&nbsp;
        <span>: نام خانوادگی</span>
      </StProfileSingleDetail>
      <StProfileSingleDetail>
        {userInfo.isMale ? "آقا" : "خانم"}&nbsp;
        <span>: جنسیت</span>
      </StProfileSingleDetail>
      <StProfileSingleDetail>
        {userInfo.mobile}&nbsp;
        <span>: شماره موبایل</span>
      </StProfileSingleDetail>
      <StProfileSingleDetail>
        {userInfo.nationalCode}&nbsp;
        <span>: کد ملی</span>
      </StProfileSingleDetail>
      <StProfileSingleDetail>
        {userInfo.fatherName}&nbsp;
        <span>: نام پدر</span>
      </StProfileSingleDetail>
      <StProfileSingleDetail>
        {userInfo.homeNumber}&nbsp;
        <span>: شماره منزل</span>
      </StProfileSingleDetail>
      <StProfileSingleDetail>
        {userInfo.birthdayPlace}&nbsp;
        <span>: محل تولد</span>
      </StProfileSingleDetail>
      <StProfileSingleDetail>
        {userInfo.isMarried ? "متاهل" : "مجرد"}&nbsp;
        <span>: وضعیت تاهل</span>
      </StProfileSingleDetail>
      <Button onClick={() => startOverHandler()}> شروع مجدد</Button>
    </StProfileContainer>
  );
};

export default Profile;
