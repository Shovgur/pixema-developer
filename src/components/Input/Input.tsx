import React, { FC } from "react";
import "./Input.css";
import classNames from "classnames";

type InputProps = {
  value?: string;
  placeholder?: string;
  id?: string;
  isError?: any;
  autoComplete?: string;
  type?: string;
  onChange?: (event: any) => void;
  onBlur?: (event: any) => void;
};

const Input: FC<InputProps> = ({
  onBlur,
  onChange,
  value,
  isError,
  id,
  placeholder,
  autoComplete = "off",
  type = "text",
}) => {
  return (
    <input
      className={classNames("defaultInput", { ["_error"]: isError })}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      id={id}
      placeholder={placeholder}
      autoComplete={autoComplete}
      type={type}
    />
  );
};

export default Input;
