import React, { useEffect, useState } from "react";
import "../Forms.css";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PathEnum } from "../../../enums/enums";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { registerUser } from "../../../redux/reducers/authReducer";

const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSignInClick = () => navigate(PathEnum.SignIn);

  const [name, setName] = useState("");
  const [nameDirty, setNameDirty] = useState(false);
  const [nameError, setNameError] = useState("Required");

  const [email, setEmail] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState("Required");

  const [password, setPassword] = useState("");
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [passwordError, setPasswordError] = useState("Required");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordDirty, setConfirmPasswordDirty] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState("Required");

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError || emailError || passwordError || confirmPasswordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, emailError, passwordError, confirmPasswordError]);

  const onBlurHandler = (event: any) => {
    switch (event.target.id) {
      case "name":
        setNameDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      case "confirmPassword":
        setConfirmPasswordDirty(true);
        break;
      default:
        break;
    }
  };

  const onChangeInput = (event: any) => {
    const value = event.target.value;

    switch (event.target.id) {
      case "name":
        setName(value);

        const nameRegex = /^[a-zA-Z ]{3,30}$/;

        if (!value.trim()) {
          setNameError("Required");
        } else if (!nameRegex.test(value)) {
          setNameError("Invalid name");
        } else {
          setNameError("");
        }
        break;
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
      case "confirmPassword":
        setConfirmPassword(value);

        if (!value.trim()) {
          setConfirmPasswordError("Required");
        } else if (password !== value) {
          setConfirmPasswordError("The password doesn't match");
        } else {
          setConfirmPasswordError("");
        }
        break;
      default:
        break;
    }
  };

  const onSubmitForm = () => {
    dispatch(
      registerUser({
        first_name: name,
        email,
        password,
        password_confirmation: confirmPassword,
        token_name: "iphone 12",
        callback: () => navigate(PathEnum.SignIn),
      })
    );
  };

  return (
    <div className="form">
      <div className="form__container">
        <span className="form__name">Sign Up</span>
        <div className="form__item">
          <label htmlFor="name">Name</label>
          <Input
            isError={nameDirty && nameError}
            value={name}
            onChange={onChangeInput}
            onBlur={onBlurHandler}
            placeholder="Your name"
            id="name"
          ></Input>
          {nameDirty && nameError && <span className="form__item__error">{nameError}</span>}
        </div>
        <div className="form__item">
          <label htmlFor="email">Email</label>
          <Input
            isError={emailDirty && emailError}
            value={email}
            onChange={onChangeInput}
            onBlur={onBlurHandler}
            placeholder="Your email"
            id="email"
          ></Input>
          {emailDirty && emailError && <span className="form__item__error">{emailError}</span>}
        </div>
        <div className="form__item">
          <label htmlFor="password">Password</label>
          <Input
            value={password}
            onChange={onChangeInput}
            onBlur={onBlurHandler}
            isError={passwordDirty && passwordError}
            type="password"
            placeholder="Your password"
            id="password"
          ></Input>
          {passwordDirty && passwordError && <span className="form__item__error">{passwordError}</span>}
        </div>
        <div className="form__item">
          <label htmlFor="confirmPassword">Confirm password</label>
          <Input
            value={confirmPassword}
            onChange={onChangeInput}
            onBlur={onBlurHandler}
            isError={confirmPasswordDirty && confirmPasswordError}
            type="password"
            placeholder="Confirm password"
            id="confirmPassword"
          ></Input>
          {confirmPasswordDirty && confirmPasswordError && (
            <span className="form__item__error">{confirmPasswordError}</span>
          )}
        </div>
        <Button
          onClick={onSubmitForm}
          className={classNames("primary", { ["_disabled"]: !formValid })}
          text={"Sign up"}
        ></Button>
        <p className="form__footer">
          Already have an account? <span onClick={onSignInClick}>Sign In</span>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
