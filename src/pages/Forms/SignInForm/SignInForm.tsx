import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { PathEnum } from "../../../enums/enums";
import { loginUser } from "../../../redux/reducers/authReducer";
import "./style.css";

const SignInForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSignUpClick = () => navigate(PathEnum.SignUp);

  const [email, setEmail] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState("Required");

  const [password, setPassword] = useState("");
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [passwordError, setPasswordError] = useState("Required");

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);


  const onChangeInput = (event: any) => {
    const value = event.target.value;

    switch (event.target.id) {
      case "email":
        setEmail(value);

        const emailRegex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!value.trim()) {
          setEmailError("Required");
        } else if (!emailRegex.test(String(value).toLowerCase())) {
          setEmailError("Invalid email");
        } else {
          setEmailError("");
        }
        break;
      case "password":
        setPassword(value);

        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

        if (!value.trim()) {
          setPasswordError("Required");
        } else if (!passwordRegex.test(String(value))) {
          setPasswordError("Invalid password");
        } else {
          setPasswordError("");
        }
        break;
      default:
        break;
    }
  };

  const onSubmitForm = () => {
    dispatch(
      loginUser({
        email,
        password,
        token_name: "iphone 12",
        callback: () => window.location.replace(PathEnum.Home),
      })
    );
  };

  return (
    <div className="form">
      <div className="form__container">
        <span className="form__name">Sign In</span>
        <div className="form__item">
          <label htmlFor="email">Email</label>
          <Input
            onChange={onChangeInput}
            isError={emailDirty && emailError}
            value={email}
            placeholder="Your email"
            id="email"
          ></Input>
          {emailDirty && emailError && <span className="form__item__error">{emailError}</span>}
        </div>
        <div className="form__item">
          <label htmlFor="password">Password</label>
          <Input
            onChange={onChangeInput}
            isError={passwordDirty && passwordError}
            value={password}
            type="password"
            placeholder="Your password"
            id="password"
          ></Input>
          {passwordDirty && passwordError && <span className="form__item__error">{passwordError}</span>}
          <span className="form__item__help">
            <button className="help_button_password"> Forgot password ?</button>
          </span>
        </div>
        <Button
          onClick={onSubmitForm}
          className={classNames("primary", { ["_disabled"]: !formValid })}
          text={"Sign in"}
        ></Button>
        <p className="form__footer">
          Don’t have an account? <span onClick={onSignUpClick}>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
