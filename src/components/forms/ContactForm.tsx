import { ChangeEvent, useState, useEffect } from "react";
import { GreenButton } from "../common/buttons";
import FormInput from "./FormInput";
import "./ContactForm.scss";

type ValidationRules = {
  notEmpty?: any;
  validEmail?: RegExp;
  validName?: RegExp;
};

const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const namePattern = /((^[A-Z]+[a-z- ]+)|(^[a-z- ]+[A-Z]+))+[A-Za-z- ]+$/i;

const errorMessages = {
  notEmpty: "Field must not be empty",
  validEmail: "Plaese enter a valid email",
  validName: "Please enter a real name",
};

const returnErrorMessage = (field: any) => {
  if (field.isEmpty) return errorMessages.notEmpty;
  if (field.nameError) return errorMessages.validName;
  if (field.emailError) return errorMessages.validEmail;
  return "";
};

const useValidation = (value: string, rules: ValidationRules) => {
  const [isEmpty, setEmpty] = useState(true);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    for (let rule in rules) {
      switch (rule) {
        case "notEmpty":
          value.length ? setEmpty(false) : setEmpty(true);
          break;
        case "validEmail":
          // @ts-ignore
          rules[rule].test(value) ? setEmailError(false) : setEmailError(true);
          break;
        case "validName":
          // @ts-ignore
          rules[rule].test(value) ? setNameError(false) : setNameError(true);
          break;
      }
    }
  }, [value]);

  return {
    isEmpty,
    nameError,
    emailError,
  };
};

const useInput = (initialValue: string, rules: ValidationRules) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, rules);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setDirty(true);
  };
  return {
    value,
    onChange,
    onBlur,
    setDirty,
    isDirty,
    ...valid,
  };
};

export default function ContactForm() {
  const name = useInput("", { notEmpty: true, validName: namePattern });
  const email = useInput("", { notEmpty: true, validEmail: emailPattern });

  const handleSubmit = (e: any) => {
    if (returnErrorMessage(name) || returnErrorMessage(email)) {
      e.preventDefault();
      email.setDirty(true);
      name.setDirty(true);
    }
  };
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__field">
        <FormInput
          onBlur={(e) => name.onBlur(e)}
          onChange={(e) => name.onChange(e)}
          onFocus={() => name.setDirty(false)}
          value={name.value}
          placeholder="Enter your name"
          name="name"
          className={
            name.isDirty && returnErrorMessage(name)
              ? "contact-form__input contact-form__input--error"
              : "contact-form__input"
          }
        />
        <label
          data-testid="nameLabel"
          className={
            name.isDirty
              ? "contact-form__label contact-form__label--visible"
              : "contact-form__label"
          }
          htmlFor="name"
        >
          {name.isDirty && returnErrorMessage(name)}
        </label>
      </div>
      <div className="contact-form__field">
        <FormInput
          onBlur={(e) => email.onBlur(e)}
          onChange={(e) => email.onChange(e)}
          onFocus={() => email.setDirty(false)}
          value={email.value}
          placeholder="Enter email*"
          name="email"
          className={
            email.isDirty && returnErrorMessage(email)
              ? "contact-form__input contact-form__input--error"
              : "contact-form__input"
          }
        />
        <label
        data-testid="emailLabel"
          className={
            email.isDirty
              ? "contact-form__label contact-form__label--visible"
              : "contact-form__label"
          }
          htmlFor="email"
        >
          {returnErrorMessage(email)}
        </label>
      </div>
      <GreenButton submit fullscreen>
        Send
      </GreenButton>
    </form>
  );
}
